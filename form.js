function validateForm()
{
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value


if(name ===""){
    alert("name field cannnot be empty")
}
else if(email === ""){
    alert("email field cannnot be empty")
}
else if(phone === ""){
    alert("phone field not be empty")
}
}