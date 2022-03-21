function onFormSubmit() {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const date = document.getElementById("date_id").value
    const checkbox = document.getElementById("marital_status").checked
    const maleRadio = document.getElementById("male_radio").checked
    const femaleRadio = document.getElementById("female_radio").checked
    const dialog = document.getElementById("openDialog")
    if (username.length == 0 || password.length == 0 || date.length == 0 || checkbox == false || (maleRadio && femaleRadio == false)) {
        dialog.showModal()
        function closeDialodButton() {
            dialog.close()
        }
        document.getElementById("closeDialog").addEventListener('click', closeDialodButton)
    }

}

document.getElementById("buttonId").addEventListener('click', onFormSubmit)