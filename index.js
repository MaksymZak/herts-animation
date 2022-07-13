import $ from "jquery";

function hearts() {
  var b = Math.floor(Math.random() * 100 + 1);
  var d = ["flowOne", "flowTwo", "flowThree"];
  var a = ["colOne", "colTwo", "colThree", "colFour", "colFive", "colSix"];
  var c = (Math.random() * (1.6 - 1.2) + 1.2).toFixed(1);
  $(
    '<div class="heart part-' +
      b +
      " " +
      a[Math.floor(Math.random() * 6)] +
      '" style="font-size:' +
      Math.floor(Math.random() * (50 - 22) + 22) +
      'px;"><svg class="icon" width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.041 5.30861C24.6483 4.39935 24.0821 3.57538 23.374 2.88283C22.6654 2.18822 21.83 1.63622 20.9131 1.25686C19.9623 0.861914 18.9426 0.65976 17.9131 0.66213C16.4688 0.66213 15.0596 1.05764 13.835 1.80471C13.542 1.98342 13.2637 2.17971 13 2.39358C12.7363 2.17971 12.458 1.98342 12.165 1.80471C10.9404 1.05764 9.53125 0.66213 8.08691 0.66213C7.04687 0.66213 6.03906 0.861349 5.08691 1.25686C4.16699 1.63772 3.33789 2.18557 2.62598 2.88283C1.91698 3.5746 1.35062 4.39876 0.958984 5.30861C0.551758 6.2549 0.34375 7.25979 0.34375 8.29397C0.34375 9.26955 0.542969 10.2862 0.938477 11.3203C1.26953 12.1846 1.74414 13.0811 2.35059 13.9863C3.31152 15.419 4.63281 16.9131 6.27344 18.4278C8.99219 20.9385 11.6846 22.6729 11.7988 22.7432L12.4932 23.1885C12.8008 23.3848 13.1963 23.3848 13.5039 23.1885L14.1982 22.7432C14.3125 22.6699 17.002 20.9385 19.7236 18.4278C21.3643 16.9131 22.6855 15.419 23.6465 13.9863C24.2529 13.0811 24.7305 12.1846 25.0586 11.3203C25.4541 10.2862 25.6533 9.26955 25.6533 8.29397C25.6562 7.25979 25.4482 6.2549 25.041 5.30861Z" fill="#FF6B0A"/></svg></div>'
  )
    .appendTo(".hearts")
    .css({
      animation: "" + d[Math.floor(Math.random() * 3)] + " " + c + "s linear",
    });
  $(".part-" + b).show();
  setTimeout(function () {
    $(".part-" + b).remove();
  }, c * 800);
}

const sectionFormat = document.querySelector(".format .image");

let interval;

function observeHandler() {
  function observerCallback([entrie]) {
    if (!entrie.isIntersecting) {
      clearInterval(interval);
      return;
    } else {
      interval = setInterval(() => hearts(), 250);
    }
  }
  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.25,
  });
  observer.observe(sectionFormat);
}

observeHandler();
