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

let showDialogBox = (event) => {
    let id = event.target.id;
    let student = studentArray[id]
    let dialog = document.getElementById('dialogId')
    let diaDiv = document.getElementById('diDivId')
    let nodeGrade = document.createTextNode(`grade : ${student.grade} `)
    let nodeMarks = document.createTextNode(`marks : ${student.marks}`)
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

// displays list of students
studentArray.forEach((ele, index) => {
    let displayList = document.getElementById('ulId')
    let newLi = document.createElement('li') //<li></li>
    newLi.id = index // <li id="0"></li>
    let nodeName = document.createTextNode(`name : ${ele.name}, `)
    let nodeAge = document.createTextNode(`age: ${ele.age}`)
    newLi.appendChild(nodeName)
    newLi.appendChild(nodeAge)
    newLi.addEventListener('click', showDialogBox)
    displayList.appendChild(newLi)
})