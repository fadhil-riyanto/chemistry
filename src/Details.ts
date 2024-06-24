import { CompoundID } from './record/CompoundID'
import { RecordBaseclass } from './record/baseclass'
import { recordType, queryresult, CompoundRecord } from './type'

interface IDetailsProp {
    selectedType: recordType;
    selectedNumber: number;
}
export class Details {
    
    private detailsProp!: IDetailsProp;

    public constructor() {
        this.detailsProp = {} as IDetailsProp
    }

    public setId(detailsNumber: number) {
        this.detailsProp.selectedNumber = detailsNumber;
        return this
    }

    public setType(recordType: recordType) {
        this.detailsProp.selectedType = recordType;
        return this
    }

    public async get() : Promise<any>{
        let run!: RecordBaseclass;
        switch (this.detailsProp.selectedType) {
            case recordType.Compound:
                run = new CompoundID(this.detailsProp.selectedNumber)
                break
            default:
                break;
        }

        return await run.result()
    }
}