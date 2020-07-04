function moviesA() {
  var windwo = window.open("./details.html");

  function gogo() {
    let aladdin = {
      name: "aladdin",
      rating: "9.1/10",
      description: "GGoood",
    };

    window.document.getElementById("aa").innerHTML = aladdin.name;
    window.document.getElementById("bb").innerHTML = aladdin.rating;
    window.document.getElementById("cc").innerHTML = aladdin.description;
  }
  window.addEventListener("load", gogo());
}
