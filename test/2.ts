import { chemistry } from "@fadhil-riyanto/chemistry"

(async () => {
    let details = new chemistry.Details().setId(6334).setType(chemistry.recordType.Compound)

    console.log((await details.get()).Record.Section[0].Description)

})()
;