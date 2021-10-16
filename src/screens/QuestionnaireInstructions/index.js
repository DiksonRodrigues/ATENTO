import React, { useCallback, useEffect } from 'react';
import { Text, View, BackHandler } from 'react-native';
import IconAD from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import Body from '../../components/Body';
import Button from '../../components/Button';
import QuestionnaireInstruction from '../../../assets/svg/questionnaireInstruction.svg';

const QuestionnaireInstructions = ({ navigation }) => {
  const handleStartQuestionnaire = () => {
    navigation.navigate('Questionnaire');
  };

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
    <Body style={{ alignItems: 'center' }}>
      <View>
        <Text style={styles.Text}>Responda as perguntas com honestidade.</Text>
        <Text style={styles.Text}>
          Não coloque sua vida e dos outros em risco.
        </Text>
      </View>
      <QuestionnaireInstruction style={{ marginVertical: 20 }} />
      <Button
        text="Iniciar Questionário"
        onPress={handleStartQuestionnaire}
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

export default QuestionnaireInstructions;
