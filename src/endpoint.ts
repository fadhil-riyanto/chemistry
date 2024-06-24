export namespace endpoint {
    export const PUBCHEM_AUTOCOMPELETE = "/rest/autocomplete/compound/"
    export const PUBCHEM_CID_RESOLVE = "/rest/pug/concepts/name/JSON"
    export const PUBCHEM_DETAIL = "/rest/pug_view/data/compound/%d/JSON/"
}

export namespace imageEndpoint {
    export const IMAGE_2D = "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=%d&t=s"
    export const IMAGE_3D = "https://pubchem.ncbi.nlm.nih.gov/image/img3d.cgi?&cid=%d&t=s"
    export const CRYSTALLINE_STRUCTURE = "https://pubchem.ncbi.nlm.nih.gov/rest/pug_view/data/key/%d_1"

}