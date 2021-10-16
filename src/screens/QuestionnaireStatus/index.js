import React from 'react';
import { connect } from 'react-redux';
import IconAD from 'react-native-vector-icons/AntDesign';
import { View, Text } from 'react-native';

import styles from './styles';
import Body from '../../components/Body';
import Button from '../../components/Button';
import QuestionnaireStatusSVG from '../../../assets/svg/questionnaireStatus.svg';

const QuestionnaireStatus = ({ route, navigation }) => {
  const { params } = route;
  const grupoQuestionarioID = params && params.grupoQuestionarioID;

  const handleContinue = () => {
    if (grupoQuestionarioID) {
      navigation.push('Questionnaire', { grupoQuestionarioID });
    } else {
      navigation.navigate('SendDataLoading');
    }
  };

  return (
    <Body style={{ justifyContent: 'space-between' }}>
      <View>
        <Text style={styles.title}>Questionário preenchido</Text>
        <Text style={styles.subtitle}>com sucesso!</Text>
      </View>
      <QuestionnaireStatusSVG style={styles.questionnaireStatusSVG} />
      <Text style={styles.body}>
        Clique em
        <Text style={styles.bodyBold}>{` continuar `}</Text>
        para{' '}
        {grupoQuestionarioID
          ? `responder ao próximo questionário`
          : `enviar os resultados`}
      </Text>
      <Button
        text="Continuar"
        onPress={handleContinue}
        iconAfter={
          <IconAD
            style={styles.textInputIcon}
            name="arrowright"
            size={20}
            color="#342F2E"
          />
        }
      />
    </Body>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestionnaireStatus);
