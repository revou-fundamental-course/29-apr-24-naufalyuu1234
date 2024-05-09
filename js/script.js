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

document.getElementById("send-btn").addEventListener('click', () => validation())

//Content slide Click
var slideIndex = 1; 
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("banner-item");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

    //Content Slides otomatis
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("banner-item");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}