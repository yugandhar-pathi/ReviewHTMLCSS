let addStudentFields = () => {
    const dialog = document.getElementById('dialogId')
    dialog.showModal()
    let addStudent = () => {
        const nameVal = document.getElementById('nameId').value
        const gradeVal = document.getElementById('gradeId').value

        const node = document.createElement('li') // <li></li>
        const textNode = document.createTextNode(`${nameVal} ${gradeVal}`) // <p>hh 5<p>
        node.appendChild(textNode) // <li> <text> hh 5 </text></li>

        document.getElementById('ulId').appendChild(node)
        dialog.close()
    }
    document.getElementById('addStudent').addEventListener('click', addStudent)

}

const deleteLiItem = (element) => {
    element.parentNode.remove()
}

const showDialog = (ele) => {
    let dialogOne = document.getElementById('diId')
    let dialogOneDiv = document.getElementById('diDivId')
    dialogOneDiv.innerHTML += ele.innerHTML
    dialogOne.showModal()
}

const closeDia = () => {
    let dialogOne = document.getElementById('diId')
    let dialogOneDiv = document.getElementById('diDivId')
    dialogOneDiv.innerHTML = ""
    dialogOne.close()
}

document.getElementById('addButton').addEventListener('click', addStudentFields)