import React, { useEffect, useCallback } from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { View, Text, ActivityIndicator, BackHandler } from 'react-native';
import { VERSION_NAME } from '../../../env.local';

import styles from './styles';
import Body from '../../components/Body';
import StorageActions from '../../store/storage/storage.actions';
import EvaluationActions from '../../store/evaluation/evaluation.actions';

const SendDataLoading = ({
  session,
  navigation,
  evaluation,
  setEvaluation,
}) => {
  const handleSubmit = async () => {
    let Jornada;
    switch (evaluation.journey) {
      case 'Durante':
        Jornada = 1;
        break;
      case 'Final':
        Jornada = 2;
        break;
      default:
        Jornada = 0;
        break;
    }

    const formattedEvaluation = {
      avaliacao: {
        Jornada,
        IdentificadorUnico: uuidv4(),
        ColaboradorId: session.colaboradorID,
        ColaboradorMatricula: session.matriculaColaborador,
        TotalTempoReacao: evaluation.test.end - evaluation.test.start,
        InicioAvaliacao: evaluation.test.start,
        FinalizadoAvaliacao: evaluation.test.end,
        VersaoApp: VERSION_NAME
      },
      reacao: evaluation.test.data,
      hardware: evaluation.hardware,
      questionario: {
        ConfirmadoQuestionario: 1,
        FinalizadoQuestionario: evaluation.questionnaire.end,
      },
      respondido: evaluation.questionnaire.data,
    };

    let connectivity = '';

    try {
      connectivity = 'ONLINE';
      const sendData = [
        {
          ...formattedEvaluation,
          avaliacao: {
            ...formattedEvaluation.avaliacao,
            Conectividade: connectivity,
          },
        },
      ];

      await EvaluationActions.sendOnlineEvaluation(sendData);
    } catch (e) {
      connectivity = 'OFFLINE';
      const setData = {
        ...formattedEvaluation,
        avaliacao: {
          ...formattedEvaluation.avaliacao,
          Conectividade: connectivity,
        },
      };

      setEvaluation(setData);
    }

    navigation.navigate('TestCalculate', {
      formattedEvaluation,
      session,
      connectivity,
    });
  };

  useEffect(() => {
    handleSubmit();
  }, []);

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

  return (
    <Body>
      <View>
        <Text style={styles.title}>Aguarde, estamos</Text>
        <Text style={styles.subtitle}>enviando os dados.</Text>
      </View>
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size={70} color="#FCBE1B" />
      </View>
    </Body>
  );
};

const mapStateToProps = (state) => ({
  evaluation: state.evaluation,
  session: state.session.data,
  hardware: state.evaluation.hardware,
  device: state.device,
});

const mapDispatchToProps = (dispatch) => ({
  setEvaluation: (payload) => dispatch(StorageActions.setEvaluation(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SendDataLoading);
