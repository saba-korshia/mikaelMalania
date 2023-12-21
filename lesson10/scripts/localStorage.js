let usersData = [
    {
        firstname: "James",
        lastName: "aptsiauri",
        username: "jame123",
        password: "amskdmaksmd"       
    }, 
    {
        firstname: "Giorgi",
        lastName: "aptsiauri",
        username: "jame123",
        password: "amskdmaksmd"       
    },
    {
        firstname: "Nikoloz",
        lastName: "aptsiauri",
        username: "jame123",
        password: "amskdmaksmd"       
    }
]

localStorage.setItem("usersData", JSON.stringify(usersData))

let dataFromDb = localStorage.getItem("usersData");
dataFromDb = JSON.parse(dataFromDb);

dataFromDb.push(
    {
        firstname: "Davit",
        lastName: "aptsiauri",
        username: "davit111",
        password: "amskdmaksmd"       
    }
)

localStorage.setItem("usersData", JSON.stringify(dataFromDb))

// localStorage.clear()
localStorage.removeItem("asdasd123")