const headers = document.querySelectorAll(".acc");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    //toggle active class
    header.classList.toggle("active");
    if (header.classList.contains("active")) {
      header.lastElementChild.style.display = "block";
    }
    if (!header.classList.contains("active")) {
      header.lastElementChild.style.display = "none";
    }

    // Change the icon
    let accHead = header.children[0];
    if (header.classList.contains("active")) {
      accHead.children[1].attributes["src"].value =
        "./assets/images/icon-minus.svg";
      console.log(accHead.children[1].attributes["src"].value);
    } else {
      accHead.children[1].attributes["src"].value =
        "./assets/images/icon-plus.svg";
    }
  });
});
