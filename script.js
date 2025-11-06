function validateForm(event) 
{
    event.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const confirmPassword=document.getElementById("confirmpassword").value; 
    const errorMessage=document.getElementById("error-message");

    if(name.trim()===' ' || email.trim()==='' || password.trim()===' ' || confirmPassword.trim()===' ')
    {
        errorMessage.innerText="All fields are mandatory";
        return;
    }

    if(password!=confirmPassword)
    {
        errorMessage.innerText="Password do not match";
        return;
    }
    else
    {
        if(!isValidLength(password))
        {
            errorMessage.innerText="Password length is less than 8 or greater than 12";
            return;
        }
        if(!(containsAlpha(password) && containsDigit(password) && containsSpecialCharacter(password)))
        {
            errorMessage.innerText="Password dose not contain atleast one alphabet,digits or specual Charcater";
            return;
        }
    }
    console.log(event);
    console.log({
    name,
    email,
    password,
    confirmPassword
});
}

function containsAlpha(pwd)
{
    for(i=0;i<pwd.length;i++)
    {
        if(pwd.charAt(i)>='a' && pwd.charAt(i)<='z' || pwd.charAt(i)>='A' && pwd.charAt(i)<='Z')
        {
            return true;
        }
    }
    return false;
}

function containsDigit(pwd)
{
    for(i=0;i<pwd.length;i++)
    {
        if(pwd.charAt(i)>='0' && pwd.charAt(i)<='9')
        {
            return true;
        }
    }
    return false;
}

function containsSpecialCharacter(pwd)
{
    for(i=0;i<pwd.length;i++)
    {
        if(pwd.charAt(i)>='a' && pwd.charAt(i)<='z' || pwd.charAt(i)>='A' && pwd.charAt(i)<='Z' || pwd.charAt(i)>='0' && pwd.charAt(i)<='9')
        {

        }
        else
        {
            return true;
        }
    }
    return false;
}

function isValidLength(pwd)
{
    if(pwd.length>=8 && pwd.length<=12)
    {
        return true;
    }
    return false;
}