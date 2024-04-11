


function validate() {
    var first_name = document.getElementById("first_name").value;
    var second_name = document.getElementById("second_name").value;
    var pass = document.getElementById("pass").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById('number').value;

    if (first_name !== "" && second_name !== "" && pass !== "" && email !== "" && number !== "") 
    {
        return true;
    } 

    else 
    {
        alert("Please fill all the inputs");
        return false;
    }
 
}
