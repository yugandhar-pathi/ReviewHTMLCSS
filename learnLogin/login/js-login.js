
const loginHandler = (event) => {
    const username = document.querySelector("#username").value
    const password = document.querySelector("#password").value
    const dialog = document.querySelector('#errorDialog')
    if(username.length == 0 || password.length === 0){
        dialog.showModal()

        // close dialog
        const element = document.getElementById("closeDialog")
        element.addEventListener("click", ()=>{
            const dialog = document.querySelector('#errorDialog')
            dialog.close()
        })
    }
}

fetch("/api/students").then(res => res.json()).then(res=> console.log(res))

const element = document.getElementById("loginButton")
element.addEventListener("click", loginHandler)

