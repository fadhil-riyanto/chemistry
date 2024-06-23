import { chemistry } from "@fadhil-riyanto/chemistry"

(async () => {
    let search = new chemistry.Search("benzene")
    await search.get()
})();