// promises and callbacks in javascript

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "";
            if (data.length === 0){
                reject("no data");
            } else {
                resolve(data);
            }

        }, 2000)
    });
};

// console.log(fetchData());
console.log("Im first");

fetchData().then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})

