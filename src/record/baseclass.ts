import { CompoundRecord } from '../type'

export abstract class RecordBaseclass { 
    abstract getdata() : Promise<CompoundRecord>;
}