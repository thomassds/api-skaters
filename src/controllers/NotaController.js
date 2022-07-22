class NotaController {
  handleMediaNote(req, res) {
    const { notas } = req.body;

    let valueTotal = 0;

    notas.forEach((nota) => {
      valueTotal += nota;
    });

    const media = valueTotal / 5;

    let response;
    if (media > 100) {
      response = "Parabéns sua media esta perfeita.";
    }

    if (media >= 50 && media < 100) {
      response = "Continue estudando, você pode melhorar.";
    }

    if (media < 50) {
      response = "Não desista, programar é dificil mesmo.";
    }

    return res.json(response);
  }
}

module.exports = new NotaController();
