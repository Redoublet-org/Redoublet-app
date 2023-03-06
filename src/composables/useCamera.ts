import { ref, onMounted, watch } from 'vue';
import { Capacitor } from '@capacitor/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
const photos = ref<UserPhoto[]>([]);
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { isPlatform } from '@ionic/vue';
const PHOTO_STORAGE = 'photos';

export function useCamera() {

    //The filesystem API requires that files written to disk are passed in as base64 data
    const convertBlobToBase64 = (blob: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });

    const takePhoto = async () => {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100,
      });
      const fileName = new Date().getTime() + '.jpeg';
      const savedFileImage = await savePicture(photo,fileName);
      photos.value = [savedFileImage, ...photos.value];
    
    };

    const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
      let base64Data: string; 

      //We have to check which platform the app is running on. 
      if (isPlatform('hybrid')){
        const file = await Filesystem.readFile({path: photo.path!});
        base64Data = file.data;
      }
      else {
        // Fetch the photo, read as a blob, then convert to base64 format
        const response = await fetch(photo.webPath!);
        const blob = await response.blob();
        base64Data = (await convertBlobToBase64(blob)) as string;
      }
       
      const savedFile = await Filesystem.writeFile({
        path: fileName,
        data: base64Data,
        directory: Directory.Data,
      });
      
      if(isPlatform('hybrid'))
      {
        // Display the new image by rewriting the 'file://' path to HTTP
        // Details: https://ionicframework.com/docs/building/webview#file-protocol
        return {
          filepath: savedFile.uri,
          webviewPath: Capacitor.convertFileSrc(savedFile.uri),
        };
      }
      else {
        // Use webPath to display the new image instead of base64 since it's
        // already loaded into memory
        return {
          filepath: fileName,
          webviewPath: photo.webPath,
        };
      }
    };

    const cachePhotos = () => {
      Preferences.set({
        key: PHOTO_STORAGE,
        value: JSON.stringify(photos.value),
      });
    };

    watch(photos, cachePhotos);

    const loadSaved = async () => {
      const photoList = await Preferences.get({ key: PHOTO_STORAGE });
      const photosInPreferences = photoList.value ? JSON.parse(photoList.value) : [];
    
      for (const photo of photosInPreferences) {
        const file = await Filesystem.readFile({
          path: photo.filepath,
          directory: Directory.Data,
        });
        photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
      }
    
      photos.value = photosInPreferences;
    };

    onMounted(loadSaved);

    return {
      photos,
      takePhoto,
    };
  }

export interface UserPhoto {
    filepath: string;
    webviewPath?: string;
}
