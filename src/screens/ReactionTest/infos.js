const guide = (currentFase) => {
  const fase = parseInt(currentFase);
  const resp = [];
  const qtdGreen = 12;

  //GREEN
  for (let index = 1; index <= qtdGreen; index++) {
    resp.push({
      color: "verde",
      number: fase * qtdGreen + index,
      clicked: false,
      value: 0,
    });
  }
  return resp;
};

const colors = (currentFase) => {
  const fase = parseInt(currentFase);

  const resp = [];
  const qtdGreen = 12;
  const qtdYellow = 8;
  const qtdRed = 8;

  //GREEN
  for (let index = 1; index <= qtdGreen; index++) {
    resp.push({
      color: "verde",
      number: fase * qtdGreen + index,
      clicked: false,
      value: 0,
    });
  }

  //YELLOW
  for (let index = 1; index <= qtdYellow; index++) {
    resp.push({
      color: "amarelo",
      number: fase * qtdYellow + index,
      clicked: false,
      value: 0,
    });
  }

  //RED
  for (let index = 1; index <= qtdRed; index++) {
    resp.push({
      color: "vermelho",
      number: fase * qtdRed + index,
      clicked: false,
      value: 0,
    });
  }

  return resp;
};

export const getPositions = (currentFase) => {
  const currentPositions = colors(currentFase);
  const currentGuide = guide(currentFase);

  // SHUFLE ARRAY
  for (let i = currentPositions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [currentPositions[i], currentPositions[j]] = [
      currentPositions[j],
      currentPositions[i],
    ];
  }

  return {
    qtdVerde: currentGuide.length,
    guide: currentGuide,
    positions: currentPositions,
  };
};
