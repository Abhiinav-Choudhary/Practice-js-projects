const inputBox = document.getElementById("input-box");
const listContent = document.getElementById("Taskbar");

function addTask(){

  if (inputBox.value === '') {
      alert("you must write something! ");
  }
  else{
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      listContent.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
  }
  inputBox.value= "";
  saveData();
}

listContent.addEventListener("click" ,function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);


function saveData(){
    localStorage.setItem("Data",listContent.innerHTML);
}

function displaytask(){
    listContent.innerHTML = localStorage.getItem("Data");
}
displaytask();





