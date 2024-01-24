let number = 0;
let data = []; // ajax.jsonから取得したデータを格納するための変数を追加
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
  // return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4) {
        if(request.status == 200) {
          // try {
            data = JSON.parse(request.responseText); // レスポンスをJSONとして解析
            return data
            // resolve(data);
          // } catch (error) {
          //   reject(error);
          // }
        // }
      }
    };
    request.open("GET", "ajax.json");
    request.responseType = "json";
    request.send(null);
}

// ajax.jsonからデータを取得する処理を記述
function changeVideo() {
  button.addEventListener('click', function() {
    // debugger
    if (data == []){
      getData();
      };
    });
  debugger
    // getData().then(function(data) {
    //   videoArea.innerHTML = data[number].url;
    //   titleArea.innerHTML = data[number].title;
    //   contentArea.innerHTML = data[number].content;
    //   number == 2 ? number == 0 : number ++ ; 
    // }).catch(function(error) {
    //   console.error("Error fetching data:", error);
    // });
}

// ボタンがクリックされた際の処理を記述  
// ajax.jsonからデータを取得していない場合のみ、getDataの処理を呼び出す
window.onload = changeVideo;