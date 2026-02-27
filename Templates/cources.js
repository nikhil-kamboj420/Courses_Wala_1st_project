function toggleCourses() {
  var list= document.getElementById("courseList");
  if(list.style.display === "block"){
    list.style.display = "none";
  } else {
    list.style.display = "block";
  }
}