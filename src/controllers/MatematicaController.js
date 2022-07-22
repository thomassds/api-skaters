const MatematicaService = require("../service/MatematicaService");

class MatematicaController {
  handleFilterCousinNumbers(req, res) {
    const { number } = req.params;

    let numbers = [];

    for (let i = 2; i < number; i++) {
      const response = MatematicaService.handleCousin(i);

      if (response) numbers.push(i);
    }

    return res.json(numbers);
  }
}

module.exports = new MatematicaController();
