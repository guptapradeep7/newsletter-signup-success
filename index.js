let x;
let ans = false;
function myFunction(){
    x = document.forms["fForm"]["email"].value;
    let exp = /[a-z0-9]{1,15}@[a-z]+\.com$/;
    let res = exp.exec(x);
    if(res == null){
        event.preventDefault();
        let e = document.getElementById("email");
        e.style.border = "1px solid red";
        e.style.color = "red";
        e.style.backgroundColor = "#F1E1E0";
        console.log(e);
        console.log("Invalid Email");
        let k = document.getElementById("erroremail");
        k.style.visibility = "visible";
        console.log(k);
        return false;
    }
    return true;
}

