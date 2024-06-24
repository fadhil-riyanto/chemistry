export enum recordType {
    Compound = "CID"
}

export interface searchResult {
    status: {
        [code: string]: number
    };
    total: number;
    dictionary_terms: {
        compound: {
            [index: number]: string
        }
    }
}


export interface searchResultCID {
    ConceptsAndCIDs: {
        Concept: {
            ConceptName: string;
            ConceptID: number
        }[];
        CID: {
            [index: number]: number;
        }
    };
}

/**
 * defined in /record/CompoundID.ts
 */

export interface CompoundRecord {
    Record: {
        RecordType: recordType;
        Record: number;
        RecordTitle: string;
        // Section: 
    }
    

}
