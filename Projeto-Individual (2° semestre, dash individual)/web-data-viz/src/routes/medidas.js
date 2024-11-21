var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

// router.get("/ultimas/:idAquario", function (req, res) {
//     medidaController.buscarUltimasMedidas(req, res);
// });

router.get("/graficoRede", function (req, res) {
    medidaController.graficoRede(req, res);
})

router.get("/graficoRam", function (req, res) {
    medidaController.graficoRam(req, res);
})

router.get("/graficoDisco", function (req, res) {
    medidaController.graficoDisco(req, res);
})

router.get("/graficoCpu_", function (req, res) {
    medidaController.graficoCpu_(req, res);
})

router.get("/graficoStatus", function (req, res) {
    medidaController.graficoStatus(req, res);
})


router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;