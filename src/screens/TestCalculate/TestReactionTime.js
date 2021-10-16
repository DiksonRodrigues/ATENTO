const TestReactionTime = ({ params, totalReactionTime }) => {
  return params.find((param) => {
    return !!(
      param.minimaTempoReacao <= totalReactionTime &&
      param.maximaTempoReacao >= totalReactionTime
    );
  });
};

export default TestReactionTime;
