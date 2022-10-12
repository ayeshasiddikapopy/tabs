//======vertical============//

function openCity(ent, nAme){

  let tabcontent = document.querySelectorAll(".tabcontent");
  let arrAy = Array.from(tabcontent);

  arrAy.map((item) => {
    item.style.display = "none";
  })


  let tablink = document.querySelectorAll(".tablinks");
  let arrAys = Array.from(tablink);
  
  arrAys.map((items) => {
    items.className = items.className.replace(" active", "");
  })

  document.getElementById(nAme).style.display = "block";
  ent.currentTarget.className += " active";


} 
document.getElementById("defaultOpen").click();

//============about=============//

function about(evnt , names){
  let tabContents = document.querySelectorAll(".tab__contents");
  let tabArray = Array.from(tabContents)
  
  tabArray.map((items) => {
    items.style.display = "none";
  });

  let tablinks = document.querySelectorAll(".button__links");
  let tabbutn = Array.from(tablinks);

  tabbutn.map((items2) => {
    items2.className = items2.className.replace(" active", "");
  })

  document.getElementById(names).style.display = "block";
  evnt.currentTarget.className += " active";
}
document.getElementById("defaultOpens").click();

