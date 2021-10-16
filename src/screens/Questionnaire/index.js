import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Question from './Question';
import Presentation from './Presentation';
import EvaluationActions from '../../store/evaluation/evaluation.actions';

const Questionnaire = ({
  route,
  device,
  journeys,
  navigation,
  setQuestionnaire,
  questionnaire,
  evaluation,
}) => {
  const [currentQuestionnaire, setCurrentQuestionnaire] = useState();
  const [currentQuestion, setCurrentQuestion] = useState();
  const [nextQuestionnaire, setNextQuestionnaire] = useState();
  const [start, setStart] = useState();

  const handleNextQuestionnaire = () => {
    const { journey } = evaluation;

    const currentGrupoQuestionarioID = currentQuestionnaire.grupoQuestionarioID;

    const currentJourney = journeys.find(
      (item) => item.jornadaPergunta === journey,
    );

    const currentQuestionnaireIndex = currentJourney.grupoQuestionario.findIndex(
      (item) => item.grupoQuestionarioID === currentGrupoQuestionarioID,
    );

    const next =
      currentJourney.grupoQuestionario[currentQuestionnaireIndex + 1];

    if (next) {
      const { grupoQuestionarioID } = next;
      navigation.push('Questionnaire', grupoQuestionarioID);
    } else {
      navigation.navigate('SendDataLoading');
    }

    // if (next) {
    //   navigation.push('QuestionnaireStatus', {
    //     grupoQuestionarioID: next.grupoQuestionarioID,
    //   });
    // } else {
    //   navigation.push('QuestionnaireStatus');
    // }
  };

  const handleNextQuestion = (action = 'next') => {
    const currentQuestionID = currentQuestion && currentQuestion.perguntaID;
    const currentQuestionIndex = currentQuestionnaire.pergunta.findIndex(
      (item) => item.perguntaID === currentQuestionID,
    );
    const nextQuestionIndex =
      currentQuestionIndex || currentQuestionIndex === 0
        ? currentQuestionIndex + 1
        : 0;
    const previousQuestionIndex =
      currentQuestionIndex || currentQuestionIndex === 0
        ? currentQuestionIndex - 1
        : 0;

    const nextQuestion =
      currentQuestionnaire.pergunta[
        action === 'next' ? nextQuestionIndex : previousQuestionIndex
      ];

    if (nextQuestion) {
      setCurrentQuestion(nextQuestion);
    } else {
      handleNextQuestionnaire();
    }
  };

  const handleSelectAnswer = (answer) => {
    const currentAnswer = {
      JustificativaRespondido: answer.JustificativaRespondido,
      RespostaID: answer.respostaID,
      PerguntaID: answer.perguntaID,
      InstanteRespondido: Date.now(),
      TipoResposta: answer.tipoResposta,
      TextoResposta: answer.textoResposta,
      OrdemResposta: answer.ordemResposta,
    };

    const newQuestionnaire = {
      start,
      end: 0,
    };

    const findAnswer = questionnaire.data.findIndex(
      (item) => item.PerguntaID === currentAnswer.PerguntaID,
    );

    if (findAnswer !== -1) {
      const newAnswers = questionnaire.data.map((item) => {
        if (item.PerguntaID === currentAnswer.PerguntaID) {
          item = currentAnswer;
        }
        return item;
      });
      newQuestionnaire.data = newAnswers;
    } else {
      newQuestionnaire.data = [...questionnaire.data, currentAnswer];
    }

    setQuestionnaire(newQuestionnaire);
    handleNextQuestion();
  };

  useEffect(() => {
    setStart(Date.now());
    const { journey } = evaluation;
    const routeParams = route.params;

    const currentJourney = journeys.find(
      (item) => item.jornadaPergunta === journey,
    );

    let nextQuestionnaireIndex = 0;

    if (routeParams && routeParams.grupoQuestionarioID) {
      const findIndex = currentJourney.grupoQuestionario.findIndex(
        (item) => item.grupoQuestionarioID === routeParams.grupoQuestionarioID,
      );
      nextQuestionnaireIndex = findIndex !== -1 ? findIndex : 0;
    }

    setCurrentQuestionnaire(
      currentJourney.grupoQuestionario[nextQuestionnaireIndex],
    );
  }, []);

  useEffect(() => {
    if (nextQuestionnaire) {
      navigation.push('QuestionnaireStatus', {
        grupoQuestionarioID: nextQuestionnaire.grupoQuestionarioID,
      });
    }
  }, [nextQuestionnaire]);

  return !currentQuestion ? (
    <Presentation
      currentQuestionnaire={currentQuestionnaire || {}}
      handleNextQuestion={handleNextQuestion}
    />
  ) : (
    <Question
      currentQuestion={currentQuestion || {}}
      questionnaireSize={currentQuestionnaire.pergunta.length}
      handleSelectAnswer={handleSelectAnswer}
      handleNextQuestion={handleNextQuestion}
      device={device}
    />
  );
};

const mapStateToProps = (state) => ({
  journeys: state.journeys,
  evaluation: state.evaluation,
  device: state.device,
  questionnaire: state.evaluation.questionnaire,
});

const mapDispatchToProps = (dispatch) => ({
  setQuestionnaire: (payload) =>
    dispatch(EvaluationActions.setQuestionnaire(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);
