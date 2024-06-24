import axios, { AxiosInstance } from 'axios';
import https from 'https';

const BASEURL = "https://pubchem.ncbi.nlm.nih.gov"

export class axiosinit
{
    private axios!: AxiosInstance;

    public init() {
        this.axios = axios.create({
            baseURL: "https://pubchem.ncbi.nlm.nih.gov",
            timeout: 60000, //optional
            httpsAgent: new https.Agent({ keepAlive: true, family: 4}), 
            headers: {'Content-Type':'application/json'}
        });
        return this;
    }

    public async doRequest(host: string, data?: any): Promise<any> {
        return await this.axios.get(
            host, { params: data }
        ).then((response) => {
            return response.data
        })
    }
    
}