
let users = []
let alertDiv = document.getElementById('alert')
let usersBox = document.getElementById('usersBox')
function registor() {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value

    // storing user info

    let tempUsers = {
        name: name,
        email: email,
    }

    // users.push(tempUsers)
    // console.table(users);


    // check emails
    let countEmail = users.filter((user) => {
        return user.email == email
    })

    if (countEmail.length == 0) {
        users.push(tempUsers)
        alertDiv.classList.remove('d-none')
        alertDiv.classList.add('sucess')
        alertDiv.classList.add('alert')

        setTimeout(() => {
            alertDiv.classList.add('d-none')
            alertDiv.classList.remove('sucess')
            alertDiv.classList.remove('alert')
        }, 2000)

    } else {
        console.log("This email is already exist");
        alertDiv.innerText = 'Email already Exists';

        alertDiv.classList.remove('d-none')
        alertDiv.classList.add('danger')
        alertDiv.classList.add('alert')

        setTimeout(() => {
            alertDiv.classList.add('d-none')
            alertDiv.classList.remove('danger')
            alertDiv.classList.remove('alert')
        }, 2000)
    }

    console.log(users);

    //////////////////////////////////////////////////////, 

    usersBox.innerHTML = " "

    users.map((use)=>{

    let userDiv = document.createElement('div')
    usersBox.appendChild(userDiv)
    userDiv.classList.add('userDiv')
    
    let nameCont = document.createElement('p')
    let emailCont = document.createElement('p')

    userDiv.appendChild(nameCont)
    userDiv.appendChild(emailCont)

    emailCont.classList.add('email')

    nameCont.innerText = use.name
    emailCont.innerText = use.email

    })

}
