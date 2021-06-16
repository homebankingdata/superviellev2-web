import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

startImageTransition();
      
function startImageTransition() {

  var image1 = document.getElementById("img1");
  var image2 = document.getElementById("img2");
  var image3 = document.getElementById("img3");
  //var wrapper = document.getElementById("wrapper-right");
  
  var images =[image1, image2, image3];
  
  for (var i = 0; i < images.length; ++i) {
      images[i].style.opacity = 1;
  }
  
  var top = 1;
  
  var cur = images.length - 1;
  
  setInterval(changeImage, 6000);
  
  async function changeImage() {
  
      //wrapper.zIndex = 4;
  
      var nextImage = (1 + cur) % images.length;
  
      images[cur].style.zIndex = top + 1;
      images[nextImage].style.zIndex = top;
  
      await transition();
  
      images[cur].style.zIndex = top;
  
      images[nextImage].style.zIndex = top + 1;
  
      top = top + 1;
  
      images[cur].style.opacity = 1;
      
      cur = nextImage;
  
  }
  
  function transition() {
      return new Promise(function(resolve, reject) {
          var del = 0.01;
  
          var id = setInterval(changeOpacity, 10);
  
          function changeOpacity() {
              images[cur].style.opacity -= del;
              if (images[cur].style.opacity <= 0) {
                  clearInterval(id);
                  resolve();
              }
          }
  
      })
  }

}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
