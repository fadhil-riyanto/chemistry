import { chemistry } from "@fadhil-riyanto/chemistry"
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });


(async () => {
    let search = new chemistry.Search("1,4 dichlorobenzene") // regular moth ball
    let result = await search.get()
    console.log(result);

    const answer = await rl.question('What do you think of Node.js? ');
    console.log(await search.getCID(answer)) // select

})()
;