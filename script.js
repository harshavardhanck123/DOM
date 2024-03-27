function foo(){
    let firstValue = document.getElementById("first").value;
    let emailValue = document.getElementById("email").value;
    let secondValue = document.getElementById("second").value;
    let thirdValue = document.getElementById("third").value;
    let addressValue = document.getElementById("addr").value;
    
    console.log(firstValue);
    console.log(secondValue);
    console.log(thirdValue);
    console.log(emailValue);
    console.log(addressValue);

}
function label_create(tagname,attr1,attrval1,content)
{
    var ele=document.createElement(tagname)
    ele.setAttribute(attr1,attrval1)
    ele.innerHTML=content
    return ele;
}
function break_create()
{
    var breaks=document.createElement("br")
    return breaks;
}
function input_create(tagname,attr1,attrval1,idname){
    var inp =document.createElement(tagname)
    inp.setAttribute(attr1,attrval1)
    inp.id=idname
    return inp;
}

let first=label_create("label","for","firstname","Firstname")
let first_break=break_create()
let first_input=input_create("input","type","text","first")
let first_input_break=break_create()
let second=label_create("label","for","secondname","Middlename")
let second_break=break_create()
let second_input=input_create("input","type","text","second")
let second_input_break=break_create()
let third=label_create("label","for","thirdname","Lastname")
let third_break=break_create()
let third_input=input_create("input","type","text","third")
let third_input_break=break_create()
let email=label_create("label","for","email","Email")
let email_break=break_create()
let email_input=input_create("input","type","email","email")
let email_input_break=break_create()
let addr=label_create("label","for","addr","Address")
let addr_break=break_create()
let addr_input=input_create("input","type","text","addr")
let addr_input_break=break_create()
let submit_input=input_create("input","type","submit")
submit_input.setAttribute("onclick","foo()")
document.body.append(first,first_break,first_input,first_input_break,second,second_break,second_input,second_input_break,third,third_break,third_input,third_input_break,email,email_break,email_input,email_input_break,addr,addr_break,addr_input,addr_input_break,submit_input)