var loginBtn = document.getElementById('login')
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById("login-area")
    loginArea.style.display="none";
    const transectionArea = document.getElementById('transectionArea')
    transectionArea.style.display='block'
})