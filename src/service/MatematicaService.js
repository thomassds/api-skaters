class MatematicaService {
  handleImpar(number) {
    if (number % 2 === 0) {
      return false;
    }
    return true;
  }
}

module.exports = new MatematicaService();
