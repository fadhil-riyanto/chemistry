import {AxiosRequestConfig, AxiosInstance } from 'axios';
import { searchResult, searchResultCID } from './type'
import { endpoint } from './endpoint'
import { axiosinit } from './axiosInstance'


export class Search {
    private compound: string;
    private axios: AxiosInstance;

    public constructor(compoundName: string) {
        this.compound = compoundName;
        this.axios = axiosinit.init()
    }

    public async getCID(compound_name?: searchResult["dictionary_terms"]["compound"]) {
        var result: searchResultCID = await this.doRequest(
            endpoint.PUBCHEM_CID_RESOLVE, {
                name: "Propane"
            }
        );
        return result.ConceptsAndCIDs.CID[0]
    }

    private async doRequest(host: string, data?: any): Promise<any> {
        return await this.axios.get(
            host, { params: data }
        ).then((response) => {
            return response.data
        })
    }

    public async get() {
        var result: searchResult = await this.doRequest(
            endpoint.PUBCHEM_AUTOCOMPELETE + encodeURI(this.compound)
        );
        return result.dictionary_terms.compound
    }


}