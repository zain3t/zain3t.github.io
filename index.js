let myLeads = []
const inputEL = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEL.value)
  inputEL.value = ""
  renderLeads()
})


function renderLeads(){
let listItems = ""
for (let i=0; i < myLeads.length; i++){
    //  listItems += "<li><a href=' " + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>"
        listItems += `
        <li>
        <a href='${myLeads[i]}' target='_blank'>
         ${myLeads[i]}
        </a>
        </li>`
    }
    ulEl.innerHTML = listItems
    }

    
    
    
    
    
    
    // other way
    
    // create element
    // const li = document.createElement("li")
    
    // // set text content
    // li.textContent = myLeads[i]
     
    // // append to ul
    // ulEl.append(li)