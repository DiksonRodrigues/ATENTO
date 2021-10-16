export default function resultToNumericParameter(resultText) {
  let numericParameterResult = 0;
  switch (resultText) {
    case 'Anormal':
      numericParameterResult = 3;
      break;
    case 'Atenção':
      numericParameterResult = 2;
      break;
    case 'Não Classificado':
      numericParameterResult = 1;
      break;
    default:
      break;
  }

  return numericParameterResult;
}
