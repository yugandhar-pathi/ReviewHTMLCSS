let studentArray;
let studentIdToDelete;
let dialog = document.getElementById('dialogId')
let errDialog = document.getElementById("errorDialog")
let studentDetailsPopup = document.getElementById("displayStudentDetailsId")
let addDialog = document.getElementById("addStuDia")
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


fetch("/api/students")
    .then(res => res.json())
    .then(res => {
        studentArray = res;

        studentArray.forEach(student => {
            let studentListDiv = document.createElement('div')
            let studentListItem = document.createElement('li')
            studentListItem.id = `student${student.id}`
            let textNode = document.createTextNode(`Student Name : ${student.name} Student grade: ${student.grade}`)
            studentListItem.appendChild(textNode)
            studentListItem.onclick = popupStudent
            studentListDiv.appendChild(studentListItem)

            let deleteButton = document.createElement('button')
            deleteButton.id = `${student.id}delete`
            deleteButton.innerText = "Delete"
            deleteButton.onclick = deleteStudent
            studentListDiv.appendChild(deleteButton);
            document.getElementById('studentUlId').appendChild(studentListDiv)
        });
    })


let addStudent = () => {
    addDialog.showModal()
}

let add = () => {
    fetch("/api/addstudent", {
        method: "POST"
    })
        .then(res => res.json())
        .then(res => {

            if (res.status == "success") {
                let listEle = document.createElement('li')
                let name = document.getElementById("stuName").value
                let grade = document.getElementById("stuGrade").value
                listEle.innerHTML = `Student Name : ${name} Student Grade : ${grade}`
                document.getElementById("studentUlId").appendChild(listEle)

            }
        })
    addDialog.close()
}



document.getElementById("addStudent").addEventListener('click', addStudent)

