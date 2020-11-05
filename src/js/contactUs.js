const textInputs = document.querySelectorAll(".text-input");

textInputs.forEach((textInput) => {
  const label = textInput.getElementsByTagName("label");
  const input = textInput.getElementsByTagName("input");
  const activeline = textInput.getElementsByClassName("activeline");

  if (input[0].value) {
    label[0].classList.add("active");
  }

  input[0].addEventListener("focusin", () => {
    activeline[0].classList.add("active");
    label[0].classList.add("active");
  });

  input[0].addEventListener("focusout", () => {
    activeline[0].classList.remove("active");
    if (!input[0].value) {
      label[0].classList.remove("active");
    }
  });
});
