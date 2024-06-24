import { RecordBaseclass } from './baseclass'
import { axiosinit } from '../axiosInstance'
import { CompoundRecord } from '../type'
import { endpoint } from '../endpoint';
import util from 'node:util'; 

export class CompoundID extends RecordBaseclass { 
    private CID: number;
    private axios: axiosinit;
    private data!: CompoundRecord;

    public constructor(CID: number) {
        super()
        this.CID = CID;
        this.axios = new axiosinit().init()
    }

    private async getData(): Promise<CompoundRecord> {
        try {
            return await this.axios.doRequest(
                util.format(endpoint.PUBCHEM_DETAIL, this.CID)
            )
        } catch {
            throw new Error("http req error")
        }
    }

    
    
    public async getdata() : Promise<CompoundRecord> {
        
        return await this.getData()
    }


}