function validateForm()
{
        let name=document.getElementById('name').value;
        let email=document.getElementById('email').value;
        let phone = document.getElementById('phone').value;

        let reg = new RegExp(/^\d/)

        let emai = new RegExp(/^[\w]+@[a-z]+\.[a-z]{2,}$/)

        if(name === ""){
            alert("name field cannot be empty")
            return false;
        }   

        else if(email === ""){
            alert("Email field cannot be empty")
            return false;
        }

        else if(phone === ""){
            alert("name field cannot be empty")
            return false;

        }

        else if(reg.test(name)){
            alert("name field cannot contain digit")
            return false;
        }

        else if(phone.length!==10){
            alert("invalid phone number!!")
            return false;
        }

        else if(!emai.test(email)){
            alert("invalid email")
            return false;
        }
    }