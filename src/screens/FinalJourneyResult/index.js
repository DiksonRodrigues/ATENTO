import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text, Platform, NativeModules, BackHandler } from 'react-native';
import IconAD from 'react-native-vector-icons/AntDesign';
import moment from 'moment';

import Success from '../../../assets/svg/questionnaireStatus.svg';
import Button from '../../components/Button';
import Body from '../../components/Body';
import sessionActions from '../../store/session/session.actions';
import evaluationActions from '../../store/evaluation/evaluation.actions';

const FinalJourneyResult = ({
  route,
  navigation,
  cleanSession,
  cleanEvaluation,
}) => {
  const { evaluation, session, connectivity } = route.params;
  // const { ClosesAtento } = NativeModules;

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

  return (
    <Body style={{ borderWidth: 2.5, borderColor: '#03AD3D' }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: 'OpenSans-Regular',
              fontSize: 20,
              color: '#211E1E',
              textAlign: 'center',
            }}
          >
            Teste finalizado com sucesso
          </Text>
          <Text
            style={{
              fontFamily: 'OpenSans-Bold',
              fontSize: 30,
              color: '#03AD3D',
              textAlign: 'center',
            }}
          >
            Bom descanso!
          </Text>
          <Text
            style={{
              fontFamily: 'OpenSans-Regular',
              fontSize: 10,
              color: '#211E1E',
              textAlign: 'center',
            }}
          >
            Caso necessite de comprovante do teste, tire um print desta tela.
          </Text>
          <Text
            style={{
              fontFamily: 'OpenSans-Regular',
              fontSize: 10,
              color: '#211E1E',
              textAlign: 'center',
            }}
          >
            {session.matriculaColaborador} - {session.nomeColaborador}
          </Text>
          <Text
            style={{
              fontFamily: 'OpenSans-Regular',
              fontSize: 10,
              color: '#211E1E',
              textAlign: 'center',
            }}
          >
            Finalizado em:{' '}
            {moment(evaluation.avaliacao.FinalizadoAvaliacao).format(
              'DD/MM/YYYY HH:mm',
            )}
          </Text>
        </View>

        <Success style={{ alignSelf: 'center' }} />
        <View>
          <Text
            style={{
              fontFamily: 'OpenSans-Regular',
              fontSize: 10,
              color: '#211E1E',
              textAlign: 'center',
            }}
          >
            Teste ID: {evaluation.avaliacao.IdentificadorUnico} {'\n'}
            Conectividade: {connectivity}
          </Text>
          <Text
            style={{
              fontFamily: 'OpenSans-Regular',
              fontSize: 20,
              color: '#211E1E',
              textAlign: 'center',
            }}
          >
            Clique em{' '}
            <Text style={{ fontFamily: 'OpenSans-Bold' }}>finalizar</Text> para
            concluir o teste de reação.
          </Text>
          <Button
            text="Finalizar"
            style={{ marginTop: 15 }}
            onPress={handleFinish}
            IconAfter={() => (
              <IconAD
                // style={styles.textInputIcon}
                name="arrowright"
                size={20}
                color="#342F2E"
              />
            )}
          />
        </View>
      </View>
    </Body>
  );
};

const mapStateToProps = (state) => ({
  calculateParams: state.params,
});

const mapDispatchToProps = (dispatch) => ({
  cleanSession: () => sessionActions.clean(dispatch),
  cleanEvaluation: () => dispatch(evaluationActions.clean()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FinalJourneyResult);
