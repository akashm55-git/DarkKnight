function validateForm() {
 
    let nameValue = document.getElementById("name").value;
    alert(nameValue);

    
    let emailValue = document.getElementById("email").value;
    alert(emailValue);

}    

function changeSite(site) {
    const iframe = 
    document.getElementById('myFrame');
    iframe.src= site;
}


window.onload = function() {
const chHWbtn =
document.getElementById("chHWbtn")
chHWbtn.addEventListener('click', function() {
const iframe = document.getElementById('myFrame');
iframe.setAttribute('height', '200px');
iframe.width = 1000;
});

const iframe = document.getElementById('myFrame');
iframe.addEventListener('click', function () {
window.open('https://www.typing.com/student/typing-test/1-minute', "_blank");
});

};


