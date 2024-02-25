const yargs = require("yargs")
const appFuncs = require("./appFunctions")



yargs.command ({
    command: "add",
    describe: "adding new data",
    builder: {
        firstName: {
            describe: "first name of the new person",
            demandOption: true,
            type: "string"
        },
        lastName: {
            describe: "last name of the new person",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x)=>{
        appFuncs.addData(x.id , x.firstName , x.lastName , x.age , x.city)
    }
})



yargs.command ({
    command: "delete",
    describe: "deleting data",
    builder: {
        id: {
            describe: "id of the deleted person",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x)=>{
        appFuncs.deleteData(x.id)
    }
})



yargs.command ({
    command: "read",
    describe: "reading data of specified person",
    builder: {
        id: {
            describe: "id of the chosen person",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x)=>{
        appFuncs.readData(x.id)
    }
})



yargs.command ({
    command: "list",
    describe: "list the data of all persons",
    handler: ()=>{
        appFuncs.listData()
    }
})



yargs.parse()