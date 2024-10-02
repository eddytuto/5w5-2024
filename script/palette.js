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

  paletteCouleur[2] = ["#90adc6", "#e9e5b1", "#7acc2e", "#05273d", "#dbb9e9"];

  // Accéder à l'élément :root
  let root = document.documentElement;

  // Initialiser ou modifier la variable CSS

  function choixPalette(numero) {
    for (var i = 0; i < paletteCouleur[numero].length; i++) {
      root.style.setProperty("--couleur" + (i + 1), paletteCouleur[numero][i]);
    }
  }

  /* --------------------------------------------------- */
  var numero = 0;
  for (var k = 0; k < paletteCouleur.length; k++) {
    var palette__label = document.createElement("label");
    palette.appendChild(palette__label);
    palette__label.classList.add("palette__label");
    palette__label.id = "palette_" + k;
    for (var i = 0; i < paletteCouleur[k].length; i++) {
      var color = document.createElement("div");
      color.classList.add("palette__label__div");
      color.style.backgroundColor = paletteCouleur[k][i];
      palette__label.appendChild(color);

      color.addEventListener("click", function (e) {
        var id = e.target.parentElement.id;
        var numero = parseInt(id.substr(id.length - 1));
        choixPalette(numero);
      });
    }

    choixPalette(0);
  }
})();
