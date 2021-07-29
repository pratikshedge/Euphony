

function login()
{
    var uname = document.getElementById("usrname").value;
    var pwd = document.getElementById("pass").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(usrname =='')
    {
        alert("please enter user name.");
    }
    else if(pass=='')
    {
        alert("enter the password");
    }
    else if(!filter.test(usrname))
    {
        alert("Enter valid user id.");
    }
    else if(pass.length < 6 || pass.length > 6)
    {
        alert("Password min and max length is 6.");
    }
}