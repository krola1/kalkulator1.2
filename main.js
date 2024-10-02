const inputField = document.getElementById("input-field");
const addButton = document.querySelector(".add-button");

const CaLcUlAtE = () => {
  inputField.value = eval(inputField.value);
};

inputField.addEventListener("keydown", (key) => {
  if (key.key === "Enter") {
    if (inputField.value !== "") {
      CaLcUlAtE();
    }
  }
});

document.addEventListener("click", (e) => {
  if (e.target.toString() === "[object HTMLTableCellElement]") {
    if (e.target.id.toString() === "=") {
      CaLcUlAtE();
    } else if (e.target.id.toString() === "clear-button") {
      inputField.value = "";
    } else {
      console.log(e);
      console.log(e.target.id.toString());
      console.log(e.target.toString());
      inputField.value = inputField.value + e.target.id;
    }
  }
});
