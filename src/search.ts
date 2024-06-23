import {AxiosRequestConfig, AxiosInstance } from 'axios';
import { searchResult } from './type'
import { endpoint } from './endpoint'
import { axiosinit } from './axiosInstance'


export class Search {
    private compound: string;
    private axios: AxiosInstance;

    public constructor(compoundName: string) {
        this.compound = compoundName;
        this.axios = axiosinit.init()
    }

    private async doRequest(): Promise<searchResult> {
        return await this.axios.get(
            endpoint.PUBCHEM_AUTOCOMPELETE + encodeURI(this.compound)
        ).then((response) => {
            console.log(response.data)
        })
        // return await axios({
        //     method: "get",
        //     url: endpoint.PUBCHEM_AUTOCOMPELETE + encodeURI(this.compound)
        // }).then((response) => {
        //     
        // })
    }

    public async get() {
        var result: searchResult = await this.doRequest();
        
        console.log(result.dictionary_terms.compound)
    }


}