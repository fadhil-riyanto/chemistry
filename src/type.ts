export enum recordType {
    Compound = "CID"
}

export enum imageType {
    IMG_2D,
    IMG_3D,
    CRYSTAL_STRUCTURE
    
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

// endpoint Title,[CID],[safety? soon],MolecularFormula,
export interface CIDqueryResult {
    name?: {
        compound_name: string;
        iupac_name: string;
        
    };
    CID?: number;
    formula?: string;
    other_name: string[];
    mass?: number; // Molecular Weight
    metadata: {
        // use datetime later
        created: Date,
    };
    desc?: string;
}