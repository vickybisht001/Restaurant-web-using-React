import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY>0);
  navbar.classList.toggle("bg-white",window.scrollY>0);

});

window.addEventListener('scroll', () => {
  const navBrand = document.querySelector('.navbar-brand');
  if (window.scrollY > 0) { // Adjust the scrollY value as needed
      navBrand.classList.add('text-black');
  } else {
      navBrand.classList.remove('text-black');
  }
});
window.addEventListener('scroll', () => {
  const navItem = document.querySelector('.navbar-nav ');
  if (window.scrollY > 0) { // Adjust the scrollY value as needed
      navItem.classList.add('text-black');
  } else {
      navItem.classList.remove('text-black');
  }
});





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
