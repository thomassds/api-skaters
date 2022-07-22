class MatematicaService {
  handleCousin(number) {
    let isCousin = true;
    for (let index = 2; index < number; index++) {
      if (number % index === 0) {
        isCousin = false;
        break;
      }
    }

    return isCousin;
  }
}

module.exports = new MatematicaService();
