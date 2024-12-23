var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

    var idAquario = req.params.idAquario;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    var idAquario = req.params.idAquario;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function graficoRede( req , res) {
    medidaModel.graficoRede()
    .then(resultadoAutenticar => {
      console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
      console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);
  
      if (resultadoAutenticar.length > 0) {
        res.status(200).json(resultadoAutenticar);
      } else {
        res.status(200).json([]);
      }
    })
    .catch(erro => {
      console.log(erro);
      console.log("\nHouve um erro ao realizar o buscar Empresas! Erro: ", erro.sqlMessage);
      res.status(500).json({ error: "Houve um erro ao realizar o buscar Empresas!", details: erro.sqlMessage });
    });
  }

  function graficoRam( req , res) {
    medidaModel.graficoRam()
    .then(resultadoAutenticar => {
      console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
      console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);
  
      if (resultadoAutenticar.length > 0) {
        res.status(200).json(resultadoAutenticar);
      } else {
        res.status(200).json([]);
      }
    })
    .catch(erro => {
      console.log(erro);
      console.log("\nHouve um erro ao realizar o buscar Empresas! Erro: ", erro.sqlMessage);
      res.status(500).json({ error: "Houve um erro ao realizar o buscar Empresas!", details: erro.sqlMessage });
    });
  }

  function graficoDisco( req , res) {
    medidaModel.graficoDisco()
    .then(resultadoAutenticar => {
      console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
      console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);
  
      if (resultadoAutenticar.length > 0) {
        res.status(200).json(resultadoAutenticar);
      } else {
        res.status(200).json([]);
      }
    })
    .catch(erro => {
      console.log(erro);
      console.log("\nHouve um erro ao realizar o buscar Empresas! Erro: ", erro.sqlMessage);
      res.status(500).json({ error: "Houve um erro ao realizar o buscar Empresas!", details: erro.sqlMessage });
    });
  }

  function graficoCpu_( req , res) {
    medidaModel.graficoCpu_()
    .then(resultadoAutenticar => {
      console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
      console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);
  
      if (resultadoAutenticar.length > 0) {
        res.status(200).json(resultadoAutenticar);
      } else {
        res.status(200).json([]);
      }
    })
    .catch(erro => {
      console.log(erro);
      console.log("\nHouve um erro ao realizar o buscar Empresas! Erro: ", erro.sqlMessage);
      res.status(500).json({ error: "Houve um erro ao realizar o buscar Empresas!", details: erro.sqlMessage });
    });
  }

  function graficoStatus( req , res) {
    medidaModel.graficoStatus()
    .then(resultadoAutenticar => {
      console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
      console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);
  
      if (resultadoAutenticar.length > 0) {
        res.status(200).json(resultadoAutenticar);
      } else {
        res.status(200).json([]);
      }
    })
    .catch(erro => {
      console.log(erro);
      console.log("\nHouve um erro ao realizar o buscar Empresas! Erro: ", erro.sqlMessage);
      res.status(500).json({ error: "Houve um erro ao realizar o buscar Empresas!", details: erro.sqlMessage });
    });
  }
  
  

module.exports = {
    // buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    graficoRede,
    graficoRam,
    graficoDisco,
    graficoCpu_,
    graficoStatus

}