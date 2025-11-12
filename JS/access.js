function aceAlert() {
    const a = document.getElementById("box");
    console.log(a);
    a.innerHTML = "The Last Day Of Republic";

       
}

function accAlert() {
    const b = document.getElementById("box");
    console.log(b);
    b.innerHTML = "Hardest choices required the strongest wills"; 
}

function add() {
    const in1 = document.getElementById("input1").value;
    const in2 = document.getElementById("input2").value;
    
    const sum = parseInt(in1) + parseInt(in2);
    const para = document.getElementById("result");
    para.innerHTML = "The Sum Is:" + sum;

}
