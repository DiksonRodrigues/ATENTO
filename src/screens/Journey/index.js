import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  StatusBar,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Alert,
  ActivityIndicator,
  PermissionsAndroid
} from 'react-native';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNetInfo } from '@react-native-community/netinfo';
import jwt_decode from 'jwt-decode';
import AsyncStorage from '@react-native-community/async-storage';
import DrawerInfo from './DrawerInfo';
import stylesVertical from './styles.vertical';
import stylesHorizontal from './styles.horizontal';
import JourneyEnd from '../../../assets/svg/journeyEnd';
import JourneyDuring from '../../../assets/svg/journeyDuring';
import JourneyStart from '../../../assets/svg/journeyStart';
import EvaluationActions from '../../store/evaluation/evaluation.actions';
import AtentoLogo from '../../../assets/svg/atentoLogo';
import formatTime from '../../utils/formatTime';
import StorageActions from '../../store/storage/storage.actions';

const Journey = ({
  navigation,
  journeys,
  setJourney,
  setHardware,
  device,
  session,
  route,
  evaluations,
  sendingEvaluations,
}) => {
  const { loginType } = route.params;

  const styles =
    device.orientation === 'vertical' ? stylesVertical : stylesHorizontal;

  const netInfo = useNetInfo();

  const THREE_HOURS_IN_MILISECONDS = 3 * 60 * 60 * 1000;

  const INTERVAL_TO_TEST_1_IN_MILISECONDS =
    session.intervaloEntreTeste * 60 * 1000;

  const INTERVAL_TO_TEST_2_IN_MILISECONDS =
    session.intervaloEntreTesteTesteFinal * 60 * 1000;

  const INTERVAL_TO_TEST_3_IN_MILISECONDS =
    session.intervaloEntreTeste3 * 60 * 1000;

  let LAST_TEST_DATE_IN_MILISECONDS = session.dataUltimaAvaliacao;

  const testsTimeCycle =
    loginType === 'offline'
      ? [
        ['minutosUltimaJornada_Inicio', 0],
        ['minutosUltimaJornada_Durante', 0],
        ['minutosUltimaJornada_Final', 0],
      ]
      : Object.entries(session.cicloTesteRegistrosTempos);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Precisamos usar sua localização",
          message: "Para iniciar o teste solicitamos que habilite o GPS do seu dispositivo."
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        alert('Não é possivel fazer o teste sem o acesso a sua localização, vá para as configurações do seu celular e habilite.')
        return false;
      }
    } catch (err) {
      alert('Não é possivel fazer o teste sem o acesso a sua localização, vá para as configurações do seu celular e habilite.')
      return false;
    }
  };

  const handleSelectJourney = async (journey) => {
    const DATE_NOW_IN_MILISECONDS =
      loginType === 'offline'
        ? new Date().getTime()
        : new Date().getTime() - THREE_HOURS_IN_MILISECONDS;
    let ultimas = await AsyncStorage.getItem('@ultimas');
    let lastUser = await AsyncStorage.getItem('@lastUser');
    if(ultimas && JSON.parse(lastUser) == session.matriculaColaborador) {
      let ultimasData = await AsyncStorage.getItem('@ultimasData');
      LAST_TEST_DATE_IN_MILISECONDS = JSON.parse(ultimasData);
      ultimas = JSON.parse(ultimas);
    } else {
      ultimas = session.ultimasAvaliacoes;
    }
    const INTERVAL_PASSED =
      getTimeInterval(ultimas) <= DATE_NOW_IN_MILISECONDS;

    if (
      INTERVAL_PASSED
    ) {
      const permission = await requestCameraPermission();
      if(permission) {
        setJourney(journey);
        navigation.navigate('TestInstructions');
      }
    } else {
      let howMuchTimeToTakeNewTestInMiliseconds =
        getTimeInterval(ultimas) - DATE_NOW_IN_MILISECONDS;

      Alert.alert(
        'Atenção',
        `Você está inapto para a jornada. Faça uma caminhada ou alongamentos e repita o teste em ${formatTime(
          howMuchTimeToTakeNewTestInMiliseconds,
        )}.`,
        [
          {
            text: 'OK',
            style: 'default',
          },
        ],
      );
    }
  };

  const getTimeInterval = (ultimosTestes) => {
    if (ultimosTestes) {
      if (ultimosTestes[0] && ultimosTestes[0].resultado == 'Anormal') {
        if (ultimosTestes[1] && ultimosTestes[1].resultado == 'Anormal') {
          if (ultimosTestes[2] && ultimosTestes[2].resultado == 'Anormal') {
            if (ultimosTestes[3] && ultimosTestes[3].resultado == 'Anormal') {
              if (ultimosTestes[4] && ultimosTestes[4].resultado == 'Anormal') {
                return LAST_TEST_DATE_IN_MILISECONDS + INTERVAL_TO_TEST_2_IN_MILISECONDS
              } else {
                return LAST_TEST_DATE_IN_MILISECONDS + INTERVAL_TO_TEST_1_IN_MILISECONDS
              }
            } else {
              return LAST_TEST_DATE_IN_MILISECONDS + INTERVAL_TO_TEST_3_IN_MILISECONDS
            }
          } else {
            return LAST_TEST_DATE_IN_MILISECONDS + INTERVAL_TO_TEST_2_IN_MILISECONDS
          }
        } else {
          return LAST_TEST_DATE_IN_MILISECONDS + INTERVAL_TO_TEST_1_IN_MILISECONDS
        }
      } else {
        return LAST_TEST_DATE_IN_MILISECONDS;
      }
    } else {
      if (session.statusUltimaClassifGeral == 'Inapto') {
        return LAST_TEST_DATE_IN_MILISECONDS + INTERVAL_TO_TEST_1_IN_MILISECONDS
      } else {
        return LAST_TEST_DATE_IN_MILISECONDS;
      }
    }
  }

  const getIcon = (type, isDone = false) => {
    switch (type) {
      case 'Início':
        return <JourneyStart isDone={isDone} />;
      case 'Durante':
        return <JourneyDuring isDone={isDone} />;
      case 'Final':
        return <JourneyEnd isDone={isDone} />;
      default:
        return <></>;
    }
  };

  const checksTokenIsValid = async () => {
    const token = await AsyncStorage.getItem('@user_token');
    const { exp } = jwt_decode(token);

    const DATE_NOW_IN_MILISECONDS = new Date().getTime();
    const TOKEN_EXPIRATION_IN_MILISECONDS = exp * 1000;

    if (TOKEN_EXPIRATION_IN_MILISECONDS < DATE_NOW_IN_MILISECONDS) {
      Alert.alert(
        'Atenção',
        'Seu token encontra-se expirado. Certifique-se de que seu aparelho está conectado à internet e refaça seu login.',
        [
          {
            text: 'OK',
            style: 'default',
          },
        ],
      );
    }
  };

  const sendOfflineEvaluations = async () => {
    await StorageActions.sendEvaluations(evaluations, sendingEvaluations);
  };

  useEffect(() => {
    console.log(session);
    setHardware();
    checksTokenIsValid();
  }, []);

  useEffect(() => {
    if (netInfo.isInternetReachable) {
      sendOfflineEvaluations();
    }
  }, [netInfo]);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#211E1E" />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <DrawerInfo
          session={session}
          content={({ navigation: drawerNavigation }) => (
            <View style={{ flex: 1 }}>
              <ScrollView contentContainerStyle={{ minHeight: '100%' }}>
                <View style={styles.container}>
                  <View style={styles.iconContainer}>
                    <TouchableOpacity
                      onPress={() => drawerNavigation.toggleDrawer()}
                    >
                      {session && (
                        <IconMCI name="menu" size={32} color="#FCBE1B" />
                      )}
                    </TouchableOpacity>
                  </View>
                  <View
                    style={[
                      styles.atentoIconContainer,
                      sendingEvaluations && { opacity: 0.3 },
                    ]}
                  >
                    {sendingEvaluations && (
                      <ActivityIndicator
                        color="#FCBE1B"
                        style={{ position: 'absolute' }}
                      />
                    )}
                    <TouchableWithoutFeedback
                      onLongPress={() => {
                        navigation.navigate('SyncScreen');
                      }}
                      disabled={sendingEvaluations}
                    >
                      <AtentoLogo width="195.13" height="52.831" />
                    </TouchableWithoutFeedback>
                  </View>
                  <View style={styles.optionsContainer}>
                    <Text style={styles.optionsTitle}>
                      {session && session.nomeColaborador
                        ? session.nomeColaborador
                        : ''}
                    </Text>
                    <Text style={styles.optionsSubtitle}>
                      Escolha seu tipo de jornada:
                    </Text>
                    {journeys.map((item, i) => {
                      return (
                        <TouchableOpacity
                          onPress={() =>
                            handleSelectJourney(item.jornadaPergunta)
                          }
                          key={i}
                        >
                          <View
                            style={[
                              styles.optionContainer,
                              testsTimeCycle[i][1] && {
                                borderColor: '#B0B5B9',
                              },
                            ]}
                          >
                            {getIcon(
                              item.jornadaPergunta,
                              !!testsTimeCycle[i][1],
                            )}
                            <Text
                              style={[
                                styles.optionTitle,
                                testsTimeCycle[i][1] && { color: '#B0B5B9' },
                              ]}
                            >{` ${item.nomeJornadaPergunta.toUpperCase()}`}</Text>
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
              </ScrollView>
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  device: state.device,
  session: state.session.data,
  journeys: state.journeys,
  evaluations: state.storage.evaluation,
  sendingEvaluations: state.sendingEvaluations,
});

const mapDispatchToProps = (dispatch) => ({
  setHardware: () => EvaluationActions.setHardware(dispatch),
  setJourney: (payload) => dispatch(EvaluationActions.setJourney(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Journey);
