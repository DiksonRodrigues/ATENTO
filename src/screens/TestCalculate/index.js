import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { NativeModules, Platform, BackHandler } from 'react-native';
import Approved from './Approved';
import Disapproved from './Disapproved';
import Body from '../../components/Body';
import evaluationResult from './EvaluationResult';
import testReactionTime from './TestReactionTime';
import testQuestionnaire from './TestQuestionnaire';
import testErrorFrequency from './TestErrorFrequency';
import sessionActions from '../../store/session/session.actions';
import evaluationActions from '../../store/evaluation/evaluation.actions';
import TestFinishScreen from './TestFinishScreen';
import UsersActions from '../../store/users/users.actions';
import AsyncStorage from '@react-native-community/async-storage';

const TestCalculate = ({
  route,
  session,
  company,
  navigation,
  calculateParams,
  cleanSession,
  cleanEvaluation,
  users,
}) => {
  // const { AtentoBroadcast, ClosesAtento } = NativeModules;

  const { formattedEvaluation: evaluation, connectivity } = route.params;
  const { reacao, respondido, avaliacao } = evaluation;
  const [result, setResult] = useState();

  const {
    listaParametroTempoReacao,
    listaParametroFrequenciaErro,
    listaParametroQuestionarioRepostasQueReprovam,
  } = calculateParams;

  const hardwareBackPressCustom = useCallback(() => {
    return true;
  }, []);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', hardwareBackPressCustom);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        hardwareBackPressCustom,
      );
    };
  });

  // const cleanSessionAndEvaluation = () => {
  //   cleanSession();
  //   cleanEvaluation();
  // };

  // const handleFinish = () => {
  //   // ID da Sodep
  //   if (session.empresaID === 22 && Platform.OS === 'android') {
  //     cleanSessionAndEvaluation();
  //     ClosesAtento.closesAtentoApp();
  //   } else {
  //     cleanSessionAndEvaluation();
  //     navigation.navigate('Login');
  //   }
  // };

  const handleFinish = () => {
    cleanSession();
    cleanEvaluation();
    if(session.empresaID == 22 && Platform.OS === 'android') {
      BackHandler.exitApp();
    } else {
      navigation.navigate('Login');
    }
  };

  const calcule = async () => {
    const totalReactionTimeInMiliseconds = avaliacao.TotalTempoReacao / 1000;
    const roundedTotalReactionTimeInMiliseconds = parseInt(
      totalReactionTimeInMiliseconds,
      10,
    );

    const resultReactionTime = testReactionTime({
      params: listaParametroTempoReacao,
      totalReactionTime: roundedTotalReactionTimeInMiliseconds,
    });

    const resultErrorFrequency = testErrorFrequency({
      params: listaParametroFrequenciaErro,
      events: reacao,
    });

    const resultQuestionnaire = testQuestionnaire({
      params: listaParametroQuestionarioRepostasQueReprovam,
      events: respondido,
    });

    const testResult = evaluationResult({
      resultReactionTime,
      resultErrorFrequency,
      resultQuestionnaire,
    });

    const allUsersList = users;

    const loggedUserinList = users.find(
      (user) => user.matriculaColaborador === session.matriculaColaborador,
    );

    const usersListWithoutSessionUser = users.filter(
      (user) => user.matriculaColaborador !== session.matriculaColaborador,
    );

    let ultimas = null;

    console.log(session);

    if (session.ultimasAvaliacoes) {
      ultimas = [
        {
          "avaliacaoId": avaliacao.IdentificadorUnico ? avaliacao.IdentificadorUnico : null,
          "finalizadoAvaliacao": dataAtualFormatada(),
          "resultado": testResult ? 'Apto' : 'Anormal',
          "jornada": avaliacao.Jornada ? avaliacao.Jornada : 0
        },
        ...session.ultimasAvaliacoes
      ]
    } else {
      ultimas = [
        {
          "avaliacaoId": avaliacao.IdentificadorUnico ? avaliacao.IdentificadorUnico : null,
          "finalizadoAvaliacao": dataAtualFormatada(),
          "resultado": testResult ? 'Apto' : 'Anormal',
          "jornada": avaliacao.Jornada ? avaliacao.Jornada : 0
        }
      ]
    }

    const updatedLoggedUser = {
      ...loggedUserinList,
      intervaloEntreTesteTesteFinal: session.intervaloEntreTesteTesteFinal ? session.intervaloEntreTesteTesteFinal : 60,
      statusUltimaClassifGeral: testResult ? 'Apto' : 'Inapto',
      dataUltimaAvaliacao: avaliacao.FinalizadoAvaliacao,
      jornada: avaliacao.Jornada,
      ultimasAvaliacoes: ultimas
    };

    UsersActions.setUsersList(allUsersList);
    UsersActions.setUsersList([
      ...usersListWithoutSessionUser,
      updatedLoggedUser,
    ]);
    await AsyncStorage.setItem('@lastUser', JSON.stringify(session.matriculaColaborador));
    await AsyncStorage.setItem('@ultimas', JSON.stringify(ultimas));
    await AsyncStorage.setItem('@ultimasData', JSON.stringify(avaliacao.FinalizadoAvaliacao));

    // AtentoBroadcast.sendAtentoBroadcast(String(testResult));
    setResult(testResult);
  };

  function dataAtualFormatada(){
    var data = new Date(),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
    return diaF+"/"+mesF+"/"+anoF+" "+data.getHours()+":"+data.getMinutes();
  }

  useEffect(() => {
    calcule();
    if (avaliacao.Jornada === 2) {
      navigation.navigate('FinalJourneyResult', {
        evaluation,
        session,
        connectivity,
      });
    }
  }, []);

  if (
    company.listaNop &&
    company.listaNop.length > 0 &&
    company.listaNop[0].visResultAval &&
    company.listaNop[0].visResultAval === 'N'
  ) {
    return (
      <TestFinishScreen
        handleFinish={handleFinish}
        evaluationID={avaliacao.IdentificadorUnico}
        finalizadoEm={avaliacao.FinalizadoAvaliacao}
        session={session}
      />
    );
  }

  return (
    result !== undefined && (
      <Body
        style={
          result
            ? { borderWidth: 2.5, borderColor: '#03AD3D' }
            : { borderWidth: 2.5, borderColor: '#e35151' }
        }
      >
        {result ? (
          <Approved
            handleFinish={handleFinish}
            evaluationID={avaliacao.IdentificadorUnico}
            finalizadoEm={avaliacao.FinalizadoAvaliacao}
            session={session}
            connectivity={connectivity}
          />
        ) : (
          <Disapproved
            handleFinish={handleFinish}
            evaluationID={avaliacao.IdentificadorUnico}
            finalizadoEm={avaliacao.FinalizadoAvaliacao}
            session={session}
            connectivity={connectivity}
          />
        )}
      </Body>
    )
  );
};

const mapStateToProps = (state) => ({
  session: state.session.data,
  calculateParams: state.params,
  company: state.company,
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  cleanSession: () => sessionActions.clean(dispatch),
  cleanEvaluation: () => dispatch(evaluationActions.clean()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TestCalculate);
