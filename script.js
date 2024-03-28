// // Get the span element by its class
// const divElement = document.querySelector('.color-span');

// // Add event listener for mouseover event
// divElement.addEventListener('mouseover', function() {
//   // Change the text color to red when the mouse moves over the element
//   this.style.color = 'red';
// });

// // Add event listener for mouseout event
// divElement.addEventListener('mouseout', function() {
//   // Change the text color back to black when the mouse moves out of the element
//   this.style.color = 'black';
// }

function tab(tagname,attr,attrval){
    var table= document.createElement(tagname)
    table.setAttribute(attr,attrval)
    return table
}
function tr(tagname){
    var trow=document.createElement(tagname)
    return trow
}
function th(tagname,attr,attrval,content)
{
    var thead=document.createElement(tagname)
    thead.setAttribute(attr,attrval)
    thead.innerHTML=content
    return thead
}
function td(tagname,content)
{
    var td=document.createElement(tagname)
    td.innerHTML=content
    return td
}
let maintable=tab("table","class","table")
let mainhead=tab("thead","class","thead-dark")
let tr1=tr("tr")
let th1=th("th","scope","col","#")
let th2=th("th","scope","col","First")
let th3=th("th","scope","col","Last")
let th4=th("th","scope","col","Handle")
let tbody1=tr("tbody")
let tr2=tr("tr")
let th5=th("th","scope","col","1")
let td1=td("td","Mark")
let td2=td("td","Otto")
let td3=td("td","@mdo")
let tr3=tr("tr")
let th6=th("th","scope","col","2")
let td4=td("td","Jacod")
let td5=td("td","Thornton")
let td6=td("td","@fat")
let tr4=tr("tr")
let th7=th("th","scope","col","3")
let td7=td("td","Larry")
let td8=td("td","the Bird")
let td9=td("td","@twitter")

tr1.append(th1,th2,th3,th4)
mainhead.append(tr1)
tr2.append(th5,td1,td2,td3)
tr3.append(th6,td4,td5,td6)
tr4.append(th7,td7,td8,td9)
tbody1.append(tr2,tr3,tr4)
maintable.append(mainhead,tbody1)
document.body.append(maintable)