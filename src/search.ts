import {AxiosRequestConfig, AxiosInstance } from 'axios';
import { searchResult, searchResultCID } from './type'
import { endpoint } from './endpoint'
import { axiosinit } from './axiosInstance'
import util from 'node:util'

export class Search {
    private compound: string;
    private axios: axiosinit;

    public constructor(compoundName: string) {
        this.compound = compoundName;
        this.axios = new axiosinit().init()
    }

    public async getCID(compound_name?: searchResult["dictionary_terms"]["compound"]) {
        var result: searchResultCID = await this.axios.doRequest(
            util.format(endpoint.PUBCHEM_CID_RESOLVE, compound_name)
        );
        return result
    }

    

    public async get() {
        var result: searchResult = await this.axios.doRequest(
            endpoint.PUBCHEM_AUTOCOMPELETE + encodeURI(this.compound)
        );
        return result.dictionary_terms.compound
    }


}