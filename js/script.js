// Ini java Script

// validate function
function validation() {
    let username = document.getElementById('form-username').value;
    console.log(username);
    if(username == "" || username == null){
        document.getElementById('form-username').style.border = "1px solid red";
        alert('Harap isi nama anda') 
    }else{
        alert('welcome ' + username);
        console.log(username);
    }

} 


document.getElementById("send-btn").addEventListener('click', () => validation())