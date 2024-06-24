import { chemistry } from "@fadhil-riyanto/chemistry"

(async () => {
    let search = new chemistry.Search("sodium sulfate")
    let result = await search.get()
    
    console.log(result)
    
    console.log(await search.getCID(result[0]))

})()
;