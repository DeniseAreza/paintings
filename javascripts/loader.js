var timeOut;

function loader() {
  timeOut = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("contents").style.display = "block";
}