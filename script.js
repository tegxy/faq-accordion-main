let icons = document.querySelectorAll(".icon");

icons.forEach((icon) => {
  icon.onclick = function () {
    //this is the code that controls the other icons and text
    icons.forEach((otherIcon) => {
      // the code below only works if your text and image are in thesame parent div
      //   let otherDiv = otherIcon.parentElement;
      //   let otherText = otherDiv.querySelector(".text");
      // .parentElement goes up one level in the DOM tree

      // for our html structure, do below instead
      let otherDiv = otherIcon.closest("section");
      let otherText = otherDiv.querySelector(".text");
      // .closest() goes up the DOM tree to find the nearest ancestor that matches the selector
      if (otherIcon !== icon) {
        otherIcon.src = "../faq-accordion-main/assets/images/icon-plus.svg";
        otherText.classList.remove("show");
      }
    });

    //this is the code for the clicked icon
    let clickedDiv = icon.closest("section");
    let clickedText = clickedDiv.querySelector(".text");

    // include() checks if a string exists inside another string
    let isOpen = icon.src.includes("icon-minus.svg");

    //this is the magic part
    if (isOpen) {
      // if minus change to plus and hide text
      icon.src = "../faq-accordion-main/assets/images/icon-plus.svg";
      clickedText.classList.remove("show");
    } else {
      // if plus change to minus and show text
      icon.src = "../faq-accordion-main/assets/images/icon-minus.svg";
      clickedText.classList.add("show");
    }
  };
});
