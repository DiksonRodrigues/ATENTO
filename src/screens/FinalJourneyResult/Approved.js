import React from 'react';
import { View, Text } from 'react-native';
import IconAD from 'react-native-vector-icons/AntDesign';
import moment from 'moment';

import Success from '../../../assets/svg/questionnaireStatus.svg';
import Button from '../../components/Button';

const Approved = ({ handleFinish, evaluationID, finalizadoEm }) => {
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
          ID do Teste: {evaluationID}
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
