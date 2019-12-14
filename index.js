function formSubmit() {
    var name = document.forms["signUp"]["Name"].value;
    var email = document.forms["signUp"]["Email"].value;
    var password = document.forms["signUp"]["Password"].value;
    var boxFillTheForm = document.getElementById("boxFillTheForm")
    var alphabetExp = /^[a-zA-Z ]+$/;
    var emailExp = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

        if(name == "" || email =="" || password == "") {
            boxFillTheForm.innerHTML = " Hey, cloudy wants to know you !! Please fill all the form &#128522; "
            return false
        }
        if(password.length <= 4) {
            alert("Password must be longer than 4")
            return false
        }
        if(password.length > 11) {
            alert("Password must be less than 10")
            return false
        }
        if(!alphabetExp.test(name)) {
            alert(" Name should be an alphabet and doesn't contain any number or symbols")
            return false
        }
        if(!emailExp.test(email)) {
            alert("Email is not valid, check again")
            return false
        }
        else {
            return true
        }
}