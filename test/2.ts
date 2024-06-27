import { chemistry, CIDqueryResult, imageType } from "@fadhil-riyanto/chemistry"

(async () => {
    // let details = new chemistry.Details().setId(4685).setType(chemistry.recordType.Compound)

    /**
     * design
     * let details = new chemistry.CompoundID(222) // ammonia
     * console.log(details.image(imageType.IMG_3D)) // return structure image in 3d
     * 
     * console.log(details.image(imageType.IMG_3D)) // return structure image in 3d
     * 
     */

    let details = new chemistry.CompoundID(5360545)
    console.log(details.image(imageType.IMG_3D))

    console.log((await details.summary()))

    // let compounddetail: CIDqueryResult = await details.get()
    // console.log(compounddetail);

})()
;