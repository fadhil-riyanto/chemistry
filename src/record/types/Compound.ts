interface namesAndIdentifier {
    computed: {
        iupacName: string;
        inchl: string;
        inchlKey: string;
        canonicalSMILES: string;
    }
}

interface chemicalSafety {
    desc: string;
    GHS: {
        image: string;
        text: string
    }[]
}

interface structure {
    desc: string;
    structure_2d: string;
    structure_3d: string;
}

export interface CompoundFullData {
    CID: number;
    title: string;

    data: {
        structure?: structure;
        chemicalSafety: chemicalSafety;
    }
}