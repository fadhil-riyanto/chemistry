import { chemistry, CIDqueryResult } from "@fadhil-riyanto/chemistry"

(async () => {
    let details = new chemistry.Details().setId(222).setType(chemistry.recordType.Compound)

    let compounddetail: CIDqueryResult = await details.get()
    console.log(compounddetail);

})()
;