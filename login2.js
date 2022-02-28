function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin"&&password=="user")
    {
        alert("login successfull");
        window.open("linkPage.html");
        return false;
}
else
{
    alert("login failed");
}
}