function onFormSubmit() {
    //const form = document.getElementById("myForm")
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const date = document.getElementById("date_id").value
    const checkbox = document.getElementById("marital_status").checked
    const maleRadio = document.getElementById("male_radio").checked
    const femaleRadio = document.getElementById("female_radio").checked
    const dialog = document.getElementById("openDialog")
    let radio;
    let maritalStatus
    console.log(maleRadio.length)
    console.log(femaleRadio.length)
    if (maleRadio == true) {
        radio = document.getElementById("male_radio").value
    } else {
        radio = document.getElementById("female_radio").value
    }

    if (checkbox == true) {
        maritalStatus = "Married"
    }

    if (username.length == 0 || password.length == 0 || date.length == 0 || checkbox == false || (maleRadio.length == 0 || femaleRadio.length == 0)) {
        dialog.showModal()
        function closeDialodButton() {
            dialog.close()
        }
        document.getElementById("closeDialog").addEventListener('click', closeDialodButton)
    } else {
        document.getElementById("paragraphId").innerHTML = `User Name : ${username}   Date : ${date}   Marital Status : ${maritalStatus}    Gender : ${radio}`
        document.getElementById('myForm').reset()
    }
}
document.getElementById("buttonId").addEventListener('click', onFormSubmit)