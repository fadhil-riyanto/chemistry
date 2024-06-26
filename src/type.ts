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
 * 
 */
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