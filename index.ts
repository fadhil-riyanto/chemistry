import { Search as _search } from './src/search'
import { CIDqueryResult } from './src/type'
import { imageType as _imageType } from './src/type'
import { CompoundID as _CompoundID } from './src/record/CompoundID'

export namespace chemistry {
    export const Search = _search;
    export const CompoundID = _CompoundID;
    
    
}

export const imageType = _imageType

export type { CIDqueryResult }