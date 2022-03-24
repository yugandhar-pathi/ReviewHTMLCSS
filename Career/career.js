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

const clickLiOne = () => {
    const dialogOne = document.getElementById('dialogOne')
    dialogOne.showModal()
}
const closeDialogOne = () => {
    dialogOne.close()
}

const clickLiTwo = () => {
    const dialogTwo = document.getElementById('dialogTwo')
    dialogTwo.showModal()
}
const closeDialogTwo = () => {
    dialogTwo.close()
}

const clickLiThree = () => {
    const dialogThree = document.getElementById('dialogThree')
    dialogThree.showModal()
}
const closeDialogThree = () => {
    dialogThree.close()
}

const deleteFieldOne = () => {
    document.getElementById('liIdOne').parentNode.removeChild(liIdOne)
}
const deleteFieldTwo = () => {
    document.getElementById('liIdTwo').parentNode.removeChild(liIdTwo)
}
const deleteFieldThree = () => {
    document.getElementById('liIdThree').parentNode.removeChild(liIdThree)
}

document.getElementById('addButton').addEventListener('click', addStudentFields)
document.getElementById('deleteFieldOne').addEventListener('click', deleteFieldOne)
document.getElementById('deleteFieldTwo').addEventListener('click', deleteFieldTwo)
document.getElementById('deleteFieldThree').addEventListener('click', deleteFieldThree)