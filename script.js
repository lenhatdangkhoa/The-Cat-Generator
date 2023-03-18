document.getElementById("generate").addEventListener("click", () => {
  console.log("testing");
  test = document.createElement("div");
  test.innerHTML = "hello";
  document.body.append(test);
});
