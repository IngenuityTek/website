function showDropdown(id) {
  var temp = document.getElementById(id);
  if (temp.style.display === "block") {
    temp.style.display = "none";
  } else {
    temp.style.display = "block";
  }
}