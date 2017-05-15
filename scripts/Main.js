/// <reference path="../Index.html" />

   var dojoConfig = {
            packages: [{
                name: "bootstrap",
                location: "https://esri.github.io/calcite-maps/dist/vendor/dojo-bootstrap"
            }, {
                name: "calcite-maps",
                location: "https://esri.github.io/calcite-maps/dist/js/dojo"
            }]
        };

 
    require([
      "esri/arcgis/utils",
      "esri/dijit/Measurement",
      "calcite-maps/calcitemaps-v0.3",
      "bootstrap/Collapse",
      "bootstrap/Dropdown",
      "bootstrap/Tab",
      "dojo/domReady!"
    ],
    function (arcgisUtils, Measurement, Button, CalciteMaps) {

        esri.config.defaults.io.proxyUrl = "/proxy/";
        esri.config.defaults.io.alwaysUseProxy = false;
        esri.config.defaults.geometryService = new esri.tasks.GeometryService("https://utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer");

        arcgisUtils.createMap("a7892820987c499ea376fe558b54eab3", "mapViewDiv").then(function (response) {
            window.map = response.map;

            var measurement = new Measurement({
                map: window.map,
            }, dojo.byId('measurementDiv'));
            measurement.startup();
        })
        //JS code should deploy
        document.getElementById("btnfb").onclick = function () {
            window.open("https://www.facebook.com/");
        }
        document.getElementById("btnTwitter").onclick = function () {
            window.open("https://twitter.com/");
        }
        document.getElementById("btnGplus").onclick = function () {
            window.open("https://plus.google.com/");
        }
        document.getElementById("btnEmail").onclick = function () {
            window.open("http://ww8.msoutlook.com/");
        }
        document.getElementById("btnLink").onclick = function () {
            window.open("http://localhost:34129/");
        }
    })

