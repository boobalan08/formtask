//Assignemt 01: Create a HTML Form Using DOM
//1.firstname,2.Middlename,3.lastname,4.Phone number
//Deploy it in Netlify

        //** Firstname

var firstname=createlabels("label","for","firstName","Firstname");
var br5=createlinebreak("br");
var firstNameinput=createinput("input","type","text","id","firstName");
var br6=createlinebreak("br");

//            //** lastname
var lastname=createlabels("label","for","lastName","Lastname");
var br7=createlinebreak("br");
var lastNameinput=createinput("input","type","text","id","lastName");
var br8=createlinebreak("br");

//            //** Phone-Number
var phonenumber=createlabels("label","for","phonenumber","PhoneNumber");
var br9=createlinebreak("br");
var PhoneNumberinput=createinput("input","type","number","id","phonenumber");
var br10=createlinebreak("br");

          //** Email-id
var label=createlabels("label","for","email","Email");
var br1=createlinebreak("br");
var input=createinput("input","type","email","id","email");
var br2=createlinebreak("br");

          //** Password
var password=createlabels("label","for","pass","Password");
var br3=createlinebreak("br");
var passinput=createinput("input","type","password","id","pass");
var br4=createlinebreak("br");


document.body.append(firstname,br5,firstNameinput,br6,lastname,br7,lastNameinput,br8, phonenumber,br9,PhoneNumberinput,br10, label,br1,input,br2,password,br3,passinput,br4);


function createlabels(tagname,attrname,attrvalue,content){
var ele=document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML=content;
return ele;
}
//it is returning an HTML element
//<label for="email">Mail</label>

function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
}
function createlinebreak(tagname){
var ele=document.createElement(tagname);
return ele;
}