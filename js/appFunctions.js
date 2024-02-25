const fs = require("fs")



const loadData = () => {
    try{
        const dataJSON = fs.readFileSync("data.json").toString()
        return JSON.parse(dataJSON)
    }
    catch{
        return []
    }
}



const saveData = (data)=>{
    dataJSON = JSON.stringify(data)
    fs.writeFileSync("data.json" , dataJSON)
}



const addData = (id , firstName , lastName , age , city) => {
    const allData = loadData()

    const duplicatedId = allData.filter((ele) => {
        return ele.id === id
    })

    if(duplicatedId.length == 0){
        allData.push({
            id : id,
            firstName : firstName,
            lastName : lastName,
            age : age,
            city : city
        })
    }else{
        console.log("this id is already exist")
    }

    saveData(allData)
}



const deleteData = (id) => {
    const allData = loadData()

    const dataKeep = allData.filter((ele) => {
        return ele.id != id
    })

    saveData(dataKeep)
    console.log("you have deleted person number", id)
}



const readData = (id) => {
    const allData = loadData()

    const chosenPerson = allData.find((ele) => {
        return ele.id == id
    })

    if(chosenPerson){
        console.log(chosenPerson)
    }else{
        console.log("ID not found")
    }
}



const listData = () => {
    const allData = loadData()

    allData.forEach((ele) => {
        console.log(ele.firstName , ele.age , ele.city)
    })
}



module.exports = {
    addData,
    deleteData,
    readData,
    listData
}