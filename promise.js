function getMusicData() {
  return new Promise((resolve) => {
    fetch("https://itunes.apple.com/search?term=the%20grateful%20dead")
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      });
  });
}

const getDataFromAPI = async () => {
  // Make a network request to get data from an API
  const musicData = await fetch(
    "https://itunes.apple.com/search?term=the%20grateful%20dead"
  );
  const jsonMusicData = await musicData.json();
  return jsonMusicData;
};

// getDataFromAPI()
//   .then((data) => {
//     // Do something with the data
//     console.log(data);
//   })
//   .catch((error) => {
//     // Handle the error
//     console.error(error);
//   });

const ul = document.createElement("ul");

const button = document.getElementById("avocado");
button.addEventListener("click", async () => {
  const data = await getDataFromAPI();
  console.log(data);
  data.results.forEach((data, index) => {
    const artistName = data.artistName;
    const trackName = data.trackName;
    const collectionCensoredName = data.collectionCensoredName;
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const div = document.createElement("div");
    h1.textContent = trackName;
    h2.textContent = artistName;
    div.textContent = collectionCensoredName;
    li.setAttribute("id", `${artistName}-${index}`);
    li.append(h1);
    li.append(h2);
    li.append(div);
    ul.append(li);
    return;
  });

  document.body.append(ul);
});
