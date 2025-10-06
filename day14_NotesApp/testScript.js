let userData = {
    bgcolor: 'green',
    fgcolor: 'white',
    subscriber: 'true',
    level: 5
}

let body = document.getElementsByTagName('body');

localStorage.setItem('usersettings', JSON.stringify(body))

let usersetting = JSON.parse(localStorage.getItem('usersettings'));
console.log(usersetting); 