var popupOverlay=document.getElementById("popup-overlay")
var popupBox=document.getElementById("popup-box")
var addButton=document.getElementById("addButton")

function addBtn(){
    popupOverlay.style.display="block"
    popupBox.style.display="block"
}

var Cancel=document.getElementById("Cancel")
Cancel.addEventListener("click",function(event){
    event.preventDefault()
    popupOverlay.style.display="none"
    popupBox.style.display="none"
})


var container=document.querySelector(".container")
var bookNameinput1=document.getElementById("bookName-input2")
var bookAuthorinput1=document.getElementById("bookAuthor-input2")
var bookDescriptioninput1=document.getElementById("bookDescription-input2")
var add=document.getElementById("Add")

add.addEventListener("click",function(event){  
    event.preventDefault()
var div=document.createElement("div")
div.setAttribute("class","Book-containerBox")
div.innerHTML=`<h2 id='bookName-input'>${bookNameinput1.value}</h2>
<h5 id='bookAuthor-input'>${bookAuthorinput1.value}</h5>
<p id='bookDescription-input' > ${bookDescriptioninput1.value}</p>
<button id='deleteButton' onclick='delete1(event)' >Delete</button>`
container.append(div)
popupOverlay.style.display="none"
popupBox.style.display="none"


})
function delete1(event){
    event.target.parentElement.remove()
}