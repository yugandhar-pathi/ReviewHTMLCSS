let studentArray = [
    {
        name: "Reshitha",
        age: 2,
        grade: "Kinder Garden",
        marks: "A+"
    },
    {
        name: "Skandhana",
        age: 4,
        grade: "1st Grade",
        marks: "A+"
    },
    {
        name: "Tanmay",
        age: 6,
        grade: "2nd Grade",
        marks: "A-"
    },
    {
        name: "Neel",
        age: 8,
        grade: "3rd Grade",
        marks: "B-"
    },
    {
        name: "Roopa",
        age: 10,
        grade: "4th Grade",
        marks: "C+"
    }
]


studentArray.forEach(ele => {
    let showDialogBox = () => {
        let dialog = document.getElementById('dialogId')
        let diaDiv = document.getElementById('diDivId')
        let nodeGrade = document.createTextNode(`grade : ${ele.grade} `)
        let nodeMarks = document.createTextNode(`marks : ${ele.marks}`)
        diaDiv.appendChild(nodeGrade)
        diaDiv.appendChild(nodeMarks)
        dialog.appendChild(diaDiv)
        dialog.showModal()
        let closeDialog = () => {
            dialog.close()
            diaDiv.innerHTML = ""
        }
        document.getElementById('closeId').addEventListener('click', closeDialog)
    }

    let displayList = document.getElementById('ulId')
    let newLi = document.createElement('li')
    let nodeName = document.createTextNode(`name : ${ele.name}, `)
    let nodeAge = document.createTextNode(`age: ${ele.age}`)
    newLi.appendChild(nodeName)
    newLi.appendChild(nodeAge)
    displayList.appendChild(newLi).addEventListener('click', showDialogBox)
})