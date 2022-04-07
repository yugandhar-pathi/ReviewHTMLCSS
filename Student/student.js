let studentArray;
let studentIdToDelete;
let dialog = document.getElementById('deleteWarningDlg')
let errDialog = document.getElementById("errorDialog")
let studentDetailsPopup = document.getElementById("displayStudentDetailsDlg")
let addDialog = document.getElementById("addStudentDlg")
let deleteStudent = (event) => {
    studentIdToDelete = event.target.id;
    dialog.showModal()
}

let removeStudent = () => {

    fetch("/api/deletestudent", {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(res => {
            if (res.status == "success") {
                document.getElementById(studentIdToDelete).parentElement.remove()
                dialog.close()
            }
        }).catch(err => {
            dialog.close()
            errDialog.showModal()
        })

}
let closeErrorDialog = () => {
    errDialog.close()
}

let closeDialog = () => {
    dialog.close()
}


let popupStudent = (event) => {
    document.getElementById("details").innerHTML = event.target.innerHTML
    studentDetailsPopup.showModal()
}

let closeDialogStudentDEtails = () => {
    studentDetailsPopup.close()
}

let createListItem = (name, grade, id) => {
    let studentListDiv = document.createElement('div')
    let studentListItem = document.createElement('li')
    studentListItem.id = `student${id}`
    let textNode = document.createTextNode(`Student Name : ${name} Student grade: ${grade}`)
    studentListItem.appendChild(textNode)
    studentListItem.onclick = popupStudent
    studentListDiv.appendChild(studentListItem)

    let deleteButton = document.createElement('button')
    deleteButton.id = `${id}delete`
    deleteButton.innerText = "Delete"
    deleteButton.onclick = deleteStudent
    studentListDiv.appendChild(deleteButton);

    return studentListDiv

}

fetch("/api/students")
    .then(res => res.json())
    .then(res => {
        studentArray = res;

        studentArray.forEach(student => {
            let stuDiv = createListItem(student.name, student.grade, student.id)
            document.getElementById('studentUlId').appendChild(stuDiv)
        });
    })


let addStudent = () => {
    addDialog.showModal()
}



let add = () => {
    let name = document.getElementById("stuName").value
    let grade = document.getElementById("stuGrade").value

    let studentData = {
        stuName: name,
        stuGrade: grade
    }

    fetch("/api/addstudent", {
        method: "POST",
        body: JSON.stringify(studentData)
    })
        .then(res => res.json())
        .then(res => {

            if (res.status == "success") {
                let stuDiv = createListItem(studentData.stuName, studentData.stuGrade)
                document.getElementById("studentUlId").appendChild(stuDiv)

            }
        })
    addDialog.close()
}

document.getElementById("addStudent").addEventListener('click', addStudent)

