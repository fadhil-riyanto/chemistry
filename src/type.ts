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

