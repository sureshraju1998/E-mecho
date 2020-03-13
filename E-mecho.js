var login=document.querySelector('#login');
var register=document.querySelector('#register');
var user=document.querySelector('#user');
var partner=document.querySelector('#partner');
var selector=document.querySelector('#selector-block');
var z =document.getElementById("btn");
var z1 =document.getElementById("btn1");
var PartnerExtend=document.querySelector('#partner-company-details');

document.querySelector('#register-tab').addEventListener('click',function(){
    alert("select USER button if you want use your services" + "\n" + "select PARTNER if your an dealer are an garage owner");
    register.style.display="block";
    login.style.display="none";
    user.style.display="none";
    partner.style.display="none";
    z.style.left="150px";
    PartnerExtend.style.display="none";
});
document.querySelector('#login-tab').addEventListener('click',function(){
    login.style.display="block";
    register.style.display="none";
    user.style.display="none";
    partner.style.display="none";
    z.style.left="0px";
    PartnerExtend.style.display="none";
});
document.querySelector('#user-tab').addEventListener('click',function(){
    login.style.display="none";
    selector.style.display="block";
    user.style.display="block";
    partner.style.display="none";
    z.style.left="150px";
    z1.style.background="yellow";
    partner.z.style.display="none";
    PartnerExtend.style.display="none";
});
document.querySelector('#partner-tab').addEventListener('click',function(){
    login.style.display="none";
    selector.style.display="block";
    user.style.display="none";
    partner.style.display="block";
    z.style.left="150px";
    PartnerExtend.style.display="none";
});
document.querySelector('#partner-company-details-tab').addEventListener('click',function(){
    login.style.display="none";
    selector.style.display="block";
    PartnerExtend.style.display="block";
    user.style.display="none";
    partner.style.display="none";
    z.style.left="150px";
});


