/* eslint-disable no-restricted-globals */
async function ping() {
    try {
        await fetch(process.env.REACT_APP_JAVA_SERVER  + "/consistent");
        return true;
    } catch (error) {
        return false;
    }
}
function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const REQ_LIMIT   = 15;
const SLEEP_LIMIT = 5000;
let currTotal     = 0;

while (true) {

    const totalRequests = Math.floor(Math.random() * REQ_LIMIT) + 1
    const sleepTime     = Math.floor(Math.random() * SLEEP_LIMIT) + 1000
    
    for (let i = 0; i < totalRequests; i++) {
        const success = await ping();
        if (success) {
            currTotal++;
            // send message to react component
            self.postMessage(currTotal);
        }
    }
    await sleep(sleepTime);
}
export {};