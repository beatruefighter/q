let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let gender = document.getElementById("gender");
let age = document.getElementById("age");
let dob = document.getElementById("dob");
let ug = document.getElementById("ug");
let st = document.getElementById("st");
let con = document.getElementById("con");
let per = document.getElementById("per");
let cur = document.getElementById("cur");




let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (textInput.value === "") {
    console.log("failure");
    msg.innerHTML = "Task cannot be blank";
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();

    (() => {
      add.setAttribute("data-bs-dismiss", "");
    })();
  }
};

let data = [{}];

let acceptData = () => {
  data.push({
    text: textInput.value,
    gender: gender.value,
    age: age.value,
    dob: dob.value,
    ug: ug.value,
    st: st.value,
    con: con.value,
    per: per.value,
    cur: cur.value,


    
    

  });

  localStorage.setItem("data", JSON.stringify(data));

  console.log(data);
  createTasks();
};

let createTasks = () => {
  tasks.innerHTML = "";
  data.map((x, y) => {
    return (tasks.innerHTML += `
    <div id=${y}>
          <span class="fw-bold">${x.text}</span>
          <span class="fw-bold">${x.gender}</span>
          <span class="fw-bold">${x.age}</span>
          <span class="fw-bold">${x.dob}</span>
          <span class="fw-bold">${x.ug}</span>
          <span class="fw-bold">${x.st}</span>
          <span class="fw-bold">${x.con}</span>
          <span class="fw-bold">${x.per}</span>
          <span class="fw-bold">${x.cur}</span>
          


          

  
          <span class="options">
            <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
            
          </span>
        </div>
    `);
  });

  resetForm();
};

let deleteTask = (e) => {
  e.parentElement.parentElement.remove();
  data.splice(e.parentElement.parentElement.id, 1);
  localStorage.setItem("data", JSON.stringify(data));
  console.log(data);
  
};

let editTask = (e) => {
  let selectedTask = e.parentElement.parentElement;

  textInput.value = selectedTask.children[0].innerHTML;
  gender.value = selectedTask.children[1].innerHTML;
  age.value = selectedTask.children[2].innerHTML;
  dob.value = selectedTask.children[3].innerHTML;
  ug.value = selectedTask.children[4].innerHTML;
  st.value = selectedTask.children[5].innerHTML;
  con.value = selectedTask.children[6].innerHTML;
  per.value = selectedTask.children[7].innerHTML;
  cur.value = selectedTask.children[8].innerHTML;
  

  



  deleteTask(e);
};

let resetForm = () => {
  textInput.value = "";
  gender.value = "";
  age.value = "";
  dob.value = "";
  ug.value = "";
  st.value = "";
  con.value = "";
  per.value = "";
  cur.value = "";
  

  

  





};

(() => {
  data = JSON.parse(localStorage.getItem("data")) || []
  console.log(data);
  createTasks();
})();