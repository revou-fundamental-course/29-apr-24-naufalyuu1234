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


// Section slide
let indexslide = 1;
showSlide(1);
// triger next slide
function nextSlide(n) {
    console.log("next slide " + n);
    showSlide(indexslide += n);
}

// slide logic
function showSlide(index) {
    let listimage = document.getElementsByClassName('banner-item');
    console.log(listimage);
    console.log('banyaknya image: ' + listimage.length);
    // reset slide index
    if(index > listimage.length) indexslide =1;
    // hide all image
    let i =0;
    while(i < listimage.length){
        listimage[i].style.display ="none";
        i++;
    }
    // show only one image
    listimage[indexslide - 1].style.display="block";
    console.log('showslide ' + index);
}
// auto slide
setInterval(() => nextSlide(1), 2000);

document.getElementById("send-btn").addEventListener('click', () => nextSlide(1))