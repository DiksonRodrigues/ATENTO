import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import IconAD from 'react-native-vector-icons/AntDesign';

import Success from '../../../assets/svg/questionnaireStatus.svg';
import Button from '../../components/Button';

const Approved = ({
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
            color: '#03AD3D',
            textAlign: 'center',
          }}
        >
          Apto para sua jornada!
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
  );
};

export default Approved;
