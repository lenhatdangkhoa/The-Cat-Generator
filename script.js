document.getElementById("generate").addEventListener("click", () => {
  picture = document.createElement("img");
  getImage().then((url) => {
    picture.src = url;
    document.querySelector(".images").appendChild(picture);
  });
});

document.getElementById("clear").addEventListener("click", () => {
  document.querySelector(".images").remove();
  pictureList = document.createElement("div");
  pictureList.className = "images";
  document.querySelector(".picture").appendChild(pictureList);
});

async function getImage() {
  try {
    res = await fetch("https://api.thecatapi.com/v1/images/search");
    res = await res.json();
    return res[0]["url"];
  } catch (error) {
    alert("An error has occurred while fetching the API.");
  }
}
