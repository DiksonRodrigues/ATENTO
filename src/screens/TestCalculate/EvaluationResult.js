const EvaluationResult = ({
  resultReactionTime,
  resultErrorFrequency,
  resultQuestionnaire,
}) => {
  if (
    resultReactionTime &&
    (resultReactionTime.statusTempoReacao === 'Anormal' ||
      resultReactionTime.statusTempoReacao === 'Não Classificado')
  ) {
    return false;
  }
  if (
    resultErrorFrequency &&
    resultErrorFrequency.statusFrequenciaErro === 'Anormal'
  ) {
    return false;
  }

  if (resultQuestionnaire === false) {
    return false;
  }
  return true;
};

export default EvaluationResult;
