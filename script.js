document.getElementById("generate").addEventListener("click", () => {
  picture = document.createElement("img");
  getImage().then((url) => {
    picture.src = url;
    document.body.appendChild(picture);
  });
});

async function getImage() {
  try {
    res = await fetch("https://api.thecatapi.com/v1/images/search");
    res = await res.json();
    return res[0]["url"];
  } catch {
    console.log("Error");
  }
}
