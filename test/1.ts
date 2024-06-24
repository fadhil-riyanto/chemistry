import { chemistry } from "@fadhil-riyanto/chemistry"

(async () => {
    let search = new chemistry.Search("ammonia")
    let result = await search.get()
    console.log(await search.getCID(result[0])) // select

})()
;