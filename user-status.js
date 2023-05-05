let wrapper = document.querySelector(".wrapper");
let toast = document.querySelector(".toast");
let wifiIcon = document.querySelector(".icon");
let title = document.querySelector("span");
let subTitle = document.querySelector("p");
let closeIcon = document.querySelector(".close-icon");

window.onload = () => {
  function ajax() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true); //sending get request on this URL
    xhr.onload = () => {
      if (xhr.status == 200 && xhr.status < 300) {
        toast.classList.remove("offline");
        title.innerText = "You're online now";
        subTitle.innerText = "Internet is connected.";
        wifiIcon.innerHTML = '<i class="uil uil-wifi"></i>';

        closeIcon.onclick = () => {
          //hide toast notification on close icon click
          wrapper.classList.add("hide");
        };

        setTimeout(() => {
          //hide the toast notification automatically after 5 seconds
          wrapper.classList.add("hide");
        }, 5000);
      } else {
        offline(); //calling offline function if the passed url is not correct or returning 404 or other error
      }
    };
    xhr.onerror = () => {
      offline(); //calling offline function if the passed url is not correct or returning 404 or other error
    };
    xhr.send();
  }

  function offline() {
    wrapper.classList.remove("hide");
    toast.classList.add("offline");
    title.innerText = "You're offline now";
    subTitle.innerText = "Internet is disconnected.";
    wifiIcon.innerHTML = '<i class="uil uil-wifi-slash"></i>';
  }

  setInterval(() => {
    ajax();
  }, 100);
};