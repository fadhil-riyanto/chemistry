import { RecordBaseclass } from './baseclass'
import { axiosinit } from '../axiosInstance'
import { CompoundRecord, CIDqueryResult } from '../type'
import { endpoint, imageEndpoint } from '../endpoint';
import util from 'node:util'; 

class CompoundIDparser {
    private obj: CompoundRecord;
    private res!: CIDqueryResult;
    public constructor(obj: CompoundRecord) {
        this.obj = obj;
        this.res = {} as CIDqueryResult
    }

    private fill_image() {
        this.res.structure = {
            image_2d: util.format(imageEndpoint.IMAGE_2D, this.res.CID),
            image_3d: util.format(imageEndpoint.IMAGE_3D, this.res.CID),
            image_crystal: this.obj.Record.Section.map((arr) => {
                if (arr.TOCHeading == "Structures") {
                    arr.Section.map((sectionarr) => {
                        if (sectionarr.TOCHeading == "Crystal Structures") {
                            sectionarr.Section.map((crystaldatarr) => {
                                if (crystaldatarr.TOCHeading == "")
                            })
                        }
                    })
                }
            })
        }
    }
    private fill() {
        this.res.name = this.obj.Record.RecordTitle;
        this.res.CID = this.obj.Record.RecordNumber;
        
    }

    public async get(): Promise<CIDqueryResult> {
        this.fill()
        return this.res;
    }
}

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

    
    
    public async result() : Promise<CIDqueryResult> {
        let ctx = new CompoundIDparser(await this.getData());
        return await ctx.get()
    }
}