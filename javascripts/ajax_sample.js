let number = 0;
let data = [];
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4) {
        if(request.status == 200) {
            data = request.response;
            changeVideo();
        }
      }
    };
    request.open("GET", "ajax.json");
    request.responseType = "json";
    request.send(null);
}

function changeVideo(){
    if (!data.length){
      getData();
      return;
      }
      videoArea.setAttribute("src",data[number].url);
      titleArea.innerHTML= data[number].title;
      contentArea.innerHTML = data[number].content;
      number == 2 ? (number = 0) : number ++ ; 
}
window.onload = function(){
  button.addEventListener(`click`,changeVideo);
};