import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import IconAD from 'react-native-vector-icons/AntDesign';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import {
  View,
  Text,
  Alert,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
  TextInput
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import stylesVertical from './styles.vertical';
import stylesHorizontal from './styles.horizontal';
import LoadingScreen from '../../components/LoadingScreen';
import AtentoLogo from '../../../assets/svg/atentoLogo';
import UsersActions from '../../store/users/users.actions';
import ParamsActions from '../../store/params/params.actions';
import SessionActions from '../../store/session/session.actions';
import CompanyActions from '../../store/company/company.actions';
import LoadingActions from '../../store/loading/loading.actions';
import JourneyActions from '../../store/journeys/journeys.actions';
import EvaluationActions from '../../store/evaluation/evaluation.actions';

const Login = ({
  navigation,
  loading,
  device,
  company,
  users,
  journeys,
  params,
  setHardware,
}) => {
  const dim = Dimensions.get('screen');
  const [maskedIdentifier, setMaskedIdentifier] = useState('');
  const [nopId, setNopId] = useState(null);
  const [idEmpresa, setIdEmpresa] = useState(null);
  const [firstLogin, setFirstLogin] = useState(true);
  const [loginType, setLoginType] = useState('CPF');
  const [orientation, setOrientation] = useState('LANDSCAPE');
  const [styles, setStyles] = useState(dim.height >= dim.width ? stylesVertical : stylesHorizontal);

  useEffect(() => {
    setHardware();
    getInfos();
  }, []);

  useEffect(() => {
    setStyles(orientation == 'PORTRAIT' ? stylesHorizontal : stylesVertical);
  }, [orientation]);

  useEffect(() => {
    determineAndSetOrientation();
    Dimensions.addEventListener('change', determineAndSetOrientation);

    return () => {
      Dimensions.removeEventListener('change', determineAndSetOrientation)
    }
  }, []);

  const getInfos = async () => {
    const empresa = await AsyncStorage.getItem('@empresaID');
    const nop = await AsyncStorage.getItem('@nopID');
    setIdEmpresa(JSON.parse(empresa));
    setNopId(JSON.parse(nop));
    if(JSON.parse(empresa) && JSON.parse(nop)) {
      setFirstLogin(false);
    }
  }

  const determineAndSetOrientation = () => {
    let width = Dimensions.get('window').width;
    let height = Dimensions.get('window').height;
    if (width > height) {
      setOrientation('PORTRAIT');
    } else {
      setOrientation('LANDSCAPE');
    }
  }
  const alert = async (message) => {
    const alertMessage = message.length === 0 ? 'Falha no login' : message;
    Alert.alert('Atenção', alertMessage, [
      {
        text: 'OK',
        style: 'default',
      },
    ]);
  };
  const handleLogin = async () => {
    const identifier = maskedIdentifier.replace(/[^\d]/g, '');

    if (!identifier) {
      Alert.alert('Atenção', 'Informe a matricula', [
        {
          text: 'OK',
          style: 'default',
        },
      ]);

      return;
    }

    try {
      LoadingActions.set(true);
      let nop = nopId;
      let empresa = idEmpresa;
      if(loginType == 'CPF') {
        nop = null;
        empresa = null;
      }
      const responseSession = await SessionActions.loginOnline(
        identifier.replace(/[^\d]/g, ''),
        nop,
        empresa
      );
      await AsyncStorage.setItem('@user_token', responseSession.data.token);
      if(loginType == 'Matricula') {
        await AsyncStorage.setItem('@empresaID', JSON.stringify(idEmpresa));
        await AsyncStorage.setItem('@nopID', JSON.stringify(nopId));
      }

      // const usersListWithoutSessionUser = users.filter(
      //   (user) => user.matriculaColaborador !== responseSession.data.matriculaColaborador,
      // );

      await CompanyActions.get(responseSession.data.empresaID);
      await UsersActions.getAll();
      await JourneyActions.getAll();
      await ParamsActions.get();
      // await UsersActions.setUsersList([
      //   ...usersListWithoutSessionUser,
      //   responseSession.data
      // ]);
      setMaskedIdentifier();
      LoadingActions.set(false);

      navigation.navigate('Journey', {
        loginType: 'online',
      });
      return;
    } catch (error) {
      const apiIsDown =
        error.response === undefined
          ? false
          : String(error?.response?.data).includes('<html>');

      if (apiIsDown && !users) {
        alert('O servidor encontra-se fora do ar.');
        LoadingActions.set(false);
        return;
      }
      if (error.response && !apiIsDown) {
        console.log(error.response.data)
        alert(error.response.data && error.response.data);
        LoadingActions.set(false);
      } else if (
        !error.statusCode &&
        error.message !== 'Network Error' &&
        !apiIsDown
      ) {
        alert(
          'Ocorreu um erro ao acessar o sistema. Tente novamente, se o erro persistir contacte seu supervisor.',
        );
        LoadingActions.set(false);
        return;
      }

      LoadingActions.set(true);

      if (!error.response || apiIsDown) {
        if (!company || !users || !journeys || !params) {
          alert('Dados não sincronizados');
          LoadingActions.set(false);
          return;
        }

        if (company.empresa && company.empresa.regTesteOffLine === 'N') {
          alert('Login offline desabilitado');
          LoadingActions.set(false);
          return;
        }

        if (
          company.listaNop &&
          company.listaNop.length > 0 &&
          company.listaNop[0].regTesteOffLine === 'N'
        ) {
          alert('Login offline desabilitado');
          LoadingActions.set(false);
          return;
        }
        let userLogin = null;
        if(loginType == 'CPF') {
          userLogin = users.find(
            (user) => user.cpfColaborador === identifier,
          );
        } else {
          userLogin = users.find(
            (user) => user.matriculaColaborador === identifier,
          );
        }
        if (!userLogin) {
          alert('Credenciais inválidas, favor tentar realizar login online.');
          LoadingActions.set(false);
          return;
        }

        SessionActions.loginOffline(userLogin);
        setMaskedIdentifier();
        LoadingActions.set(false);
        navigation.navigate('Journey', {
          loginType: 'offline',
        });
        return;
      }
      LoadingActions.set(false);
    }
  };

  useEffect(() => {
    setHardware();
  }, []);

  function changeLoginType(type) {
    setLoginType(type);
    if(firstLogin) {
      setNopId(null);
      setIdEmpresa(null);
    }
  }

  return loading === false ? (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <StatusBar barStyle="light-content" backgroundColor="#211E1E" />
        <View style={styles.logoContainer}>
          <TouchableWithoutFeedback
            onLongPress={() => {
              alert(
                'A tela de sincronia de testes agora é acessada através do logo da tela de Jornadas.',
              );
            }}
          >
            <AtentoLogo width="248.56" height="67.3" />
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.contentBox}>
          <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
            <Text style={styles.titlePrimary}>SEJA BEM-VINDO</Text>
            <Text style={styles.titleSecondary}>
              Para realizar o login, selecione a sua modalidade e informe seu usuário
            </Text>
            <View style={styles.containerButton}>
              <TouchableWithoutFeedback style={[loginType == 'CPF' ? styles.button2 : styles.buttonNone]} onPress={() => changeLoginType('CPF')}>
                <Text style={styles.textButton2}>CPF</Text>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback style={loginType == 'Matricula' ? styles.button2 : styles.buttonNone} onPress={() => changeLoginType('Matricula')}>
                <Text style={styles.textButton2}>Matricula</Text>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.textInputContainer}>
              <IconMI size={25} name="person" color="#342F2E" />
              <TextInputMask
                type='cpf'
                value={maskedIdentifier}
                style={styles.textInput}
                placeholder={loginType}
                onChangeText={setMaskedIdentifier}
                disableFullscreenUI
                returnKeyType="done"
              />
            </View>
            {loginType == 'Matricula' && firstLogin && (
              <>
                <View style={styles.textInputContainer}>
                  <IconMI size={25} name="person" color="#342F2E" />
                  <TextInput
                    value={nopId}
                    style={styles.textInput}
                    placeholder="NOP ID"
                    onChangeText={setNopId}
                    disableFullscreenUI
                    returnKeyType="done"
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.textInputContainer}>
                  <IconMI size={25} name="person" color="#342F2E" />
                  <TextInput
                    value={idEmpresa}
                    style={styles.textInput}
                    placeholder="EMPRESA ID"
                    onChangeText={setIdEmpresa}
                    disableFullscreenUI
                    returnKeyType="done"
                    keyboardType="numeric"
                  />
                </View>
              </>
            )}
            <Button
              text="Acessar o teste"
              style={styles.button}
              onPress={handleLogin}
              IconAfter={() => (
                <IconAD
                  style={styles.textInputIcon}
                  name="arrowright"
                  size={20}
                  color="#342F2E"
                />
              )}
            />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </View>
  ) : (
    <LoadingScreen />
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  device: state.device,
  company: state.company,
  users: state.users,
  journeys: state.journeys,
  params: state.params,
});

const mapDispatchToProps = (dispatch) => ({
  setHardware: () => EvaluationActions.setHardware(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
