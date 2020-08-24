$(document).ready(function () {
  //   var pisosNode = document.querySelector("#pisos");
  //   var selectedPiso = pisosNode.options[pisosNode.selectedIndex];
  //   var selectedPisoId = selectedPiso.getAttribute("data-piso");
  //   var prevStyles = {};

  //   showSelectedGroup();
  //   ChangePiso("intial");

  //   //llamado de librerias de sombreado y responsive
  //   $(function () {
  //     $("#apto-image-" + selectedPisoId).maphilight();
  //   });

  //   $("img[usemap]").rwdImageMaps();

  //   pisosNode.addEventListener("change", function () {
  //     hideGroups();

  //     selectedPiso = this.options[this.selectedIndex];
  //     selectedPisoId = selectedPiso.getAttribute("data-piso");

  //     showSelectedGroup();
  //     showSelectedPlano();
  //   });

  //   function hideGroups() {
  //     document.querySelectorAll("optgroup").forEach(function (el) {
  //       el.style.display = "none";
  //     });
  //   }

  //   function showSelectedGroup() {
  //     document.querySelector("#piso-" + selectedPisoId).style.display = "block";
  //   }

  //   function ChangePiso(moment) {
  //     document
  //       .querySelector("#piso-" + selectedPisoId)
  //       .querySelectorAll("option")
  //       .forEach(function (el) {
  //         var clase = el.getAttribute("class");
  //         var id = el.getAttribute("data-apartamento");
  //         var apto = document.querySelector(
  //           "#plano-piso-" + selectedPisoId + " map" + " .area-apto-" + id
  //         );

  //         if (clase == "vendido") {
  //           apto.setAttribute(
  //             "data-maphilight",
  //             '{"fillColor":"000000","shadow":true,"strokeColor": "000000","alwaysOn":true}'
  //           );
  //         }
  //         if (clase == "disponible") {
  //           apto.setAttribute(
  //             "data-maphilight",
  //             '{"fillColor":"4422B1","shadow":true,"strokeColor": "000552","alwaysOn":true}'
  //           );
  //         }
  //       });
  //   }

  //   function hidePlanos() {
  //     document.querySelectorAll(".planos").forEach(function (el) {
  //       el.style.display = "none";
  //     });
  //   }

  //   function showSelectedPlano() {
  //     hidePlanos();

  //     document.querySelector("#plano-piso-" + selectedPisoId).style.display =
  //       "block";

  //     //llamado de librerias de sombreado y responsive
  //     $(function () {
  //       $("#apto-image-" + selectedPisoId).maphilight();

  //       prevStyles.previous.querySelector(".first-image-map").style = "";
  //       var styles =
  //         "display: block; position:relative; padding: 0px; width:" +
  //         prevStyles.width +
  //         "; height:" +
  //         prevStyles.height +
  //         "; background: url(" +
  //         prevStyles.src +
  //         ") 0% 0% / " +
  //         prevStyles.width +
  //         " " +
  //         prevStyles.height;
  //       prevStyles.previous
  //         .querySelector(".first-image-map")
  //         .setAttribute("style", styles);

  //       prevStyles.previous
  //         .querySelector(".first-image-map")
  //         .querySelectorAll("canvas")
  //         .forEach(function (element) {
  //           element.style.width = prevStyles.width;
  //           element.style.height = prevStyles.height;
  //           //   element.width = 440;
  //           //   element.height = 336;
  //         });
  //     });

  //     $("img[usemap]").rwdImageMaps();

  //     ChangePiso("change");
  //   }
  var pisosNode = document.querySelector("#pisos");
  var selectedPiso = pisosNode.options[pisosNode.selectedIndex];
  var selectedPisoId = selectedPiso.getAttribute("data-piso");

  showSelectedGroup();
  ChangePiso();
  updateNamePiso();

  pisosNode.addEventListener("change", function () {
    hideGroups();
    selectedPiso = this.options[this.selectedIndex];
    selectedPisoId = selectedPiso.getAttribute("data-piso");

    showSelectedGroup();
    ChangePiso();
    updateNamePiso();
    $(".plano svg").show();
  });

  document
    .querySelector("#selectGroups")
    .addEventListener("change", function () {
      var selectedAptoId = this.options[this.selectedIndex].getAttribute(
        "data-apartamento"
      );
      $(".plano svg").show();
      document
        .querySelectorAll(".plano svg")
        .forEach(function (element, index) {
          index++;
          if (index !== Number(selectedAptoId)) {
            element.style.display = "none";
          }
        });
    });

  function updateNamePiso() {
    document.querySelector("#number-piso").innerHTML = selectedPisoId;
  }

  function hideGroups() {
    document.querySelectorAll("optgroup").forEach(function (el) {
      el.style.display = "none";
    });
  }

  function showSelectedGroup() {
    document.querySelector("#piso-" + selectedPisoId).style.display = "block";
  }

  function ChangePiso() {
    document
      .querySelector("#piso-" + selectedPisoId)
      .querySelectorAll("option")
      .forEach(function (el) {
        var clase = el.getAttribute("class");
        var id = el.getAttribute("data-apartamento");
        var apto = document.querySelector("#apartment-" + id);

        apto.classList = "";

        if (clase == "vendido") {
          apto.classList.add("apto-vendido");
        }
        if (clase == "disponible") {
          apto.classList.add("apto-disponible");
        }
      });
  }
});
