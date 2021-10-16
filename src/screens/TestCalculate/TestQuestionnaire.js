const TestQuestionnaire = ({ params, events }) => {
  if (params && events) {
    const respostasErradas = params.find((param) => {
      const respostaErrada = events.find((event) => {
        return (
          param.perguntaID === event.PerguntaID &&
          param.respostaID === event.RespostaID
        );
      });
      return !!respostaErrada;
    });

    return !respostasErradas;
  }
  return false;
};

export default TestQuestionnaire;
