function delay(ms) {
    return new Promise( resolve => setTimeout(resolve, ms));
}

async function myAsyncFunction() {
    console.log("start")

    await delay(1000);

    console.log("End after 1000 milliseconds")
}

myAsyncFunction();