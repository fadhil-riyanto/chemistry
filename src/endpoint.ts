export namespace endpoint {
    export const PUBCHEM_AUTOCOMPELETE = "/rest/autocomplete/compound/"
    export const PUBCHEM_CID_RESOLVE = "/rest/pug/compound/name/%s/cids/TXT"
    export const PUBCHEM_DETAIL = "/rest/pug_view/data/compound/%d/JSON/"
    export const PUBCHEM_SYNONYMS = "/rest/pug/compound/cid/%s/synonyms/json"
    export const PUBCHEM_DATE = "/rest/pug/compound/cid/%d/dates/JSON"
    export const PUBCHEM_DESC = "/rest/pug/compound/cid/%d/description/JSON"
    export const PUBCHEM_FULL = "/rest/pug_view/data/compound/%d/JSON"

    // endpoint for another data
    // 1. https://pubchem.ncbi.nlm.nih.gov/rest/pug_view/data/compound/10197650/JSON/
    // 2. https://pubchem.ncbi.nlm.nih.gov/rest/pug_view/index/compound/10197650/JSON
}   

export namespace imageEndpoint {
    export const IMAGE_2D = "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=%d&t=l"
    export const IMAGE_3D = "https://pubchem.ncbi.nlm.nih.gov/image/img3d.cgi?&cid=%d&t=l"
}