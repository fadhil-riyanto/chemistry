import axios, { AxiosInstance } from 'axios';
import https from 'https';

const BASEURL = "https://pubchem.ncbi.nlm.nih.gov"

export class axiosinit
{
    public static init(): AxiosInstance {
        return axios.create({
            baseURL: "https://pubchem.ncbi.nlm.nih.gov",
            timeout: 60000, //optional
            httpsAgent: new https.Agent({ keepAlive: true, family: 4}), // disable ipv6
            headers: {'Content-Type':'application/json'}
        });
    }
}