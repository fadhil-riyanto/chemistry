import {AxiosRequestConfig, AxiosInstance } from 'axios';
import { searchResult, searchResultCID } from './type'
import { endpoint } from './endpoint'
import { axiosinit } from './axiosInstance'


export class Search {
    private compound: string;
    private axios: axiosinit;

    public constructor(compoundName: string) {
        this.compound = compoundName;
        this.axios = new axiosinit().init()
    }

    public async getCID(compound_name?: searchResult["dictionary_terms"]["compound"]) {
        var result: searchResultCID = await this.axios.doRequest(
            endpoint.PUBCHEM_CID_RESOLVE, {
                name: "Propane"
            }
        );
        return result.ConceptsAndCIDs.CID[0]
    }

    

    public async get() {
        var result: searchResult = await this.axios.doRequest(
            endpoint.PUBCHEM_AUTOCOMPELETE + encodeURI(this.compound)
        );
        return result.dictionary_terms.compound
    }


}