    var login=document.querySelector('#login');
    var register=document.querySelector('#register');
    var user=document.querySelector('#user');
    var partner=document.querySelector('#partner');
    var selector=document.querySelector('#selector-block');
    var z =document.getElementById("btn");

    document.querySelector('#register-tab').addEventListener('click',function(){
        register.style.display="block";
        login.style.display="none";
        user.style.display="none";
        partner.style.display="none";
        z.style.left="150px";
    });
    document.querySelector('#login-tab').addEventListener('click',function(){
        login.style.display="block";
        register.style.display="none";
        user.style.display="none";
        partner.style.display="none";
        z.style.left="0px";
    });
    document.querySelector('#user-tab').addEventListener('click',function(){
        login.style.display="none";
        selector.style.display="none";
        user.style.display="block";
        partner.style.display="none";
        z.style.left="150px";
    });
    document.querySelector('#partner-tab').addEventListener('click',function(){
        login.style.display="none";
        selector.style.display="none";
        user.style.display="none";
        partner.style.display="block";
        z.style.left="150px";
    });
 
$(document).ready(function(){
$("#back-icon").click(function(){
$("#partner").remove();
});
});