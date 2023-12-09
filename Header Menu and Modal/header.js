document.getElementById("openModal").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "block";
});

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "none";
});

document
  .getElementById("closeSecondModal")
  .addEventListener("click", function () {
    document.getElementById("secondModal").style.display = "none";
  });

document.querySelector(".next-modal").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "none";
  document.getElementById("secondModal").style.display = "block";
});

document.querySelector(".prev-modal").addEventListener("click", function () {
  document.getElementById("secondModal").style.display = "none";
  document.getElementById("myModal").style.display = "block";
});

window.addEventListener("click", function (event) {
  if (event.target === document.getElementById("myModal")) {
    document.getElementById("myModal").style.display = "none";
  }
  if (event.target === document.getElementById("secondModal")) {
    document.getElementById("secondModal").style.display = "none";
  }
});
