import { imageTypeNotFound } from '../Exception/imageTypeNotFound'
import { axiosinit } from '../axiosInstance'
import { imageType, CIDqueryResult } from '../type'
import { endpoint, imageEndpoint } from '../endpoint';
import util from 'node:util'; 

class chemicalSummary {
    protected CID!: number;
    private axios: axiosinit;
    private CIDqueryResult: CIDqueryResult

    public constructor(CID: number) {
        this.CID = CID;
        this.axios = new axiosinit().init()
        this.CIDqueryResult = {} as CIDqueryResult;
    }

    private fillName(data: any) {
        this.CIDqueryResult.name = {
            compound_name: data.PropertyTable.Properties[0].Title,
            iupac_name: data.PropertyTable.Properties[0].IUPACName,
        }
    }

    private fillCID(CID: number) {
        this.CIDqueryResult.CID = CID;
    }

    private fillFormula(data: any) {
        this.CIDqueryResult.formula = data.PropertyTable.Properties[0].MolecularFormula;
    }

    private async fillOtherName() {
        let data = await this.axios.doRequest(util.format(endpoint.PUBCHEM_SYNONYMS, this.CID))
        this.CIDqueryResult.other_name = data.InformationList.Information[0].Synonym
    }

    private fillMoleculeWeight(data: any) {
        this.CIDqueryResult.mass = data.PropertyTable.Properties[0].MolecularWeight;
    }

    private async fillDate() {
        let result = await this.axios.doRequest(
            util.format(endpoint.PUBCHEM_DATE, this.CID)
        )

        this.CIDqueryResult.metadata = {
            created: new Date(
                result.InformationList.Information[0].CreationDate.Year,
                result.InformationList.Information[0].CreationDate.Month,
                result.InformationList.Information[0].CreationDate.Day
            )
        }

        // console.log(new Date(2022, 3, 2))
        // console.log(this.CIDqueryResult.metadata.created)

        // this.CIDqueryResult.metadata.created = 
    }

    private async fillDesc() {
        let data = await this.axios.doRequest(
            util.format(endpoint.PUBCHEM_DESC, this.CID)
        )
        
        this.CIDqueryResult.desc = data.InformationList.Information[1].Description
    }

    private async getCompoundPropertyTables() { 
        let search = "Title,IUPACName,MolecularFormula,MolecularWeight"
        let result = await this.axios.doRequest(
            util.format("https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/%d/property/%s/JSON", this.CID, search)
        )
        this.fillName(result)
        this.fillCID(this.CID)
        this.fillFormula(result)
        await this.fillOtherName()
        this.fillMoleculeWeight(result)
        await this.fillDate()
        await this.fillDesc()
    }

    public async export() : Promise<CIDqueryResult>{
        await this.getCompoundPropertyTables()
        return this.CIDqueryResult;
    }
}


export class CompoundID { 
    private CID: number;
    

    public constructor(CID: number) {
        this.CID = CID;
        
    }

    public image(img: imageType) {
        switch (img) {
            case imageType.IMG_2D:
                return util.format(imageEndpoint.IMAGE_2D, this.CID);
                break;
            
            case imageType.IMG_3D:
                return util.format(imageEndpoint.IMAGE_3D, this.CID);
                break;
        
            default:
                throw new imageTypeNotFound("image type not found", "please fill with correct type")
                break;
        }
    }

    /**
     * return all data
     */
    public async summary(): Promise<CIDqueryResult> {
        let data: chemicalSummary = new chemicalSummary(this.CID)
        return await data.export()
    }
    
}