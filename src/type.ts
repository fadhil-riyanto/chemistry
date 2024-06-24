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
        };
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
        Section: {
            TOCHeading: string;
            Description: string;
            Section: {
                TOCHeading: string;
                Description: string;
                URL: URL;
                DisplayControls: {
                    MoveToTop: Boolean;
                };
                Information: {
                    ReferenceNumber: Number;
                    Value: {
                        Boolean: {
                            [Index: number]: Boolean
                        }[]
                    }
                }[]
            }[]
        }[]
    }
}

export interface queryresult {
}

export interface CIDqueryResult extends queryresult {
    name: string;
    CID: number;
    structure: {
        image_2d: string;
        image_3d: string;
        image_crystal: string;
    };
    chemical_safety: {
        // enum defined soon
    };
    formula: string[];
    mass: number;
    desc: string;
}