# chemistry
get data from largest chemistry database

```
npm i @fadhil-riyanto/chemistry
```

## how to search and getting Compound ID
```ts
import { chemistry } from "@fadhil-riyanto/chemistry"

(async () => {
    let search = new chemistry.Search("1,4 dichlorobenzene")
    let result = await search.get()
    console.log(result); // <-- you I'll get autocomplete data here

    console.log(await search.getCID("1-Bromo-2,4-dichlorobenzene")) // <-- fill desired keyword

})()
```

## getting chemical info based on CID

```ts
import { chemistry, imageType } from "@fadhil-riyanto/chemistry"

(async () => {
    let details = new chemistry.CompoundID(5360545)
    console.log(details.image(imageType.IMG_3D))

    console.log((await details.summary()))
})()
```

## maintainer:
<a href="https://github.com/fadhil-riyanto">@fadhil-riyanto</a>

## license
GPL-2.0

