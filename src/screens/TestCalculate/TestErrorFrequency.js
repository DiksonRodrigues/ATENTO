const TestErrorFrequency = ({ params, events }) => {
  const errorQuantity = events.reduce((acc, curr) => {
    return curr.StatusReacao === 0 ? acc + 1 : acc;
  }, 0);

  return params.find((param) => {
    return !!(
      param.minimaFrequenciaErro <= errorQuantity &&
      param.maximaFrequenciaErro >= errorQuantity
    );
  });
};

export default TestErrorFrequency;
