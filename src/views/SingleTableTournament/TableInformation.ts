export interface TableInformation {
    northName: string,
    southName: string,
    eastName: string,
    westName: string,
    scoringPrinciple: ScoringPrinciple
}

export enum ScoringPrinciple {
    ReferenceTable,
    TheoreticalOptimum
}

export function ScoringPrincipleFromString(s: string): ScoringPrinciple {
    s = s.toLowerCase();
    if (s === "reference" || s === "referencetable")
        return ScoringPrinciple.ReferenceTable;
    else 
        return ScoringPrinciple.TheoreticalOptimum;
}