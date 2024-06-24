import { CompoundID } from './record/CompoundID'
import { RecordBaseclass } from './record/baseclass'

export enum recordType {
    Compound
}
interface IDetailsProp {
    selectedType: recordType;
    selectedNumber: number;
}
export class Details {
    
    private detailsProp!: IDetailsProp;

    public set(detailsNumber: number) {
        this.detailsProp.selectedNumber = detailsNumber;
        return this
    }

    public setType(recordType: recordType) {
        this.detailsProp.selectedType = recordType;
        return this
    }

    public get() {
        let run!: RecordBaseclass;
        switch (this.detailsProp.selectedType) {
            case recordType.Compound:
                run = new CompoundID(this.detailsProp.selectedNumber)
                break;
        
            default:
                break;
        }

        run.getdata()
    }
}