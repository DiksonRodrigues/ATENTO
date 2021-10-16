import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import IconAD from 'react-native-vector-icons/AntDesign';

import Error from '../../../assets/svg/questionnaireStatusFail.svg';
import Button from '../../components/Button';

const Disapproved = ({
  handleFinish,
  evaluationID,
  finalizadoEm,
  session,
  connectivity,
}) => {
  return (
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
          Teste finalizado, você está
        </Text>
        <Text
          style={{
            fontFamily: 'OpenSans-Bold',
            fontSize: 30,
            color: '#e35151',
            textAlign: 'center',
          }}
        >
          Inapto para sua jornada!
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
          {session && session.matriculaColaborador} -{' '}
          {session && session.nomeColaborador}
        </Text>
        <Text
          style={{
            fontFamily: 'OpenSans-Regular',
            fontSize: 10,
            color: '#211E1E',
            textAlign: 'center',
          }}
        >
          Finalizado em: {moment(finalizadoEm).format('DD/MM/YYYY HH:mm')}
        </Text>
      </View>

      <Error style={{ alignSelf: 'center' }} />
      <View>
        <Text
          style={{
            fontFamily: 'OpenSans-Regular',
            fontSize: 10,
            color: '#211E1E',
            textAlign: 'center',
          }}
        >
          Teste ID: {evaluationID} {'\n'}Conectividade: {connectivity}
        </Text>
        <Text
          style={{
            fontFamily: 'OpenSans-Regular',
            fontSize: 20,
            color: '#211E1E',
            textAlign: 'center',
          }}
        >
          Por favor, entre em contato com o seu gestor.
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
  );
};

export default Disapproved;
