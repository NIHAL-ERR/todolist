showtask();
let addtxt = document.getElementById("addtxt");
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {
  addtxtValue = addtxt.value;
  let value = localStorage.getItem("key");
  if (value == null) {
    taskobj = [];
  }
  else {
    taskobj = JSON.parse(value);
  }
  var str = addtxtValue;
  if (str.trim().length != 0) {
    taskobj.push(addtxtValue);
    localStorage.setItem("key", JSON.stringify(taskobj));
  }
  showtask();

});
function showtask() {
  document.getElementById("addtxt").value="";
  let value = localStorage.getItem("key");
  if (value == null) {
    taskobj = [];
  }
  else {
    taskobj = JSON.parse(value);
  }
  console.log(taskobj);
  html = "";
  if(taskobj.length!==0)
  {
  taskobj.forEach(function (item, index) {
    html = html + `
        <div class="col " style="border:1px solid black;" >
          <div class="card shadow-sm">
              <title>${index + 1} Note</title>
            

            <div class="card-body ">
              <p class="card-text" style="font-family:courier,arial,helvetica;">${item}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-danger " onclick=deleteCard(${index})>Delete note</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
     `;
    document.getElementById("classcontainer").innerHTML = html;
  });
}
else
document.getElementById("classcontainer").innerHTML =`<div class="container text-center"><h2 class="text-primary">Your notes are empty</h2></div>`;
}
function deleteCard(index) {
 
  console.log(index);

  let result = taskobj.filter(function (item, ind) {
    if (ind !== index)
      return true;
    else
      return false;
  })
  taskobj = result;
  localStorage.setItem("key", JSON.stringify(taskobj));
  showtask();
}
