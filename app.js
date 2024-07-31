var AllUsers = [];

var users = localStorage.getItem('users');

if (users !== null) {
    AllUsers = JSON.parse(users);
}

function signup() {
    var a = document.getElementsByid("semail");
    var b = document.getElementsByid("spass");
    var user = {
        email: a.value,
        pass: b.value
    }

AllUsers.push(user)
localStorage.setItem('users', JSON.stringify(AllUsers))
location.href = './index.html'
}


function Login(){
    var a = document.getElementById('lemail')
    var b = document.getElementById('lpass')  
    let filterUser = AllUsers.filter(data=> data.email === a.value && data.password === b.value);

    if(filterUser.length){
        location.href = './welcome.html'

    }else{
        alert("email/password incorrect")
    }

}


function signout(){
    localStorage.clear()
    location.href = './index.html'
}

function sign(){
    location.href = './signup.html'
}