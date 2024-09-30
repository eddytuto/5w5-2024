(function () {
  var palette = document.getElementById("palette");
  var paletteCouleur = [];
  paletteCouleur[0] = ["#90adc6", "#e9eaec", "#fad02c", "#333652", "#f7f6d9"];

  paletteCouleur[1] = [
    "rgb(8, 61, 119)",
    "rgb(235, 235, 211)",
    "rgb(218, 65, 103)",
    "rgb(244, 211, 94)",
    "rgb(247, 135, 100)",
  ];

  // Accéder à l'élément :root
  let root = document.documentElement;

  // Initialiser ou modifier la variable CSS

  function choixPalette(numero) {
    for (var i = 0; i < paletteCouleur[numero].length; i++) {
      root.style.setProperty("--couleur" + (i + 1), paletteCouleur[numero][i]);
    }
  }
  for (var k = 0; k < paletteCouleur.length; k++) {
    var palette__label = document.createElement("label");
    palette.appendChild(palette__label);
    palette__label.classList.add("palette__label");
    for (var i = 0; i < paletteCouleur[k].length; i++) {
      var color = document.createElement("div");
      color.classList.add("palette__label__div");
      color.style.backgroundColor = paletteCouleur[k][i];
      /*
      color.onclick = function () {
        var color = this.style.backgroundColor;
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        context.fillStyle = color;
        context.strokeStyle = color;
      };
*/
      palette__label.appendChild(color);
    }
  }
  choixPalette(0);
})();
