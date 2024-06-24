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
        RecordNumber: number;
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
                    Description: string;
                    Value: {
                        Boolean: {
                            [Index: number]: Boolean
                        }[]
                    }
                }[];
                Section: {
                    TOCHeading: string;
                    Description: string;
                    URL: URL;
                    // Information: 
                }
            }[]
        }[]
    }
}

export interface queryresult {
}

export interface CIDqueryResult extends queryresult {
    name?: string;
    CID?: number;
    structure?: {
        image_2d?: string;
        image_3d?: string;
        image_crystal?: string;
    };
    chemical_safety?: {
        // enum defined soon
    };
    formula?: string[];
    mass?: number;
    desc?: string;
}