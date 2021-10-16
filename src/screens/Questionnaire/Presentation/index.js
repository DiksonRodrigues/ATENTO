import React from "react";
import IconAD from "react-native-vector-icons/AntDesign";
import {
  Text,
  View
} from "react-native";

import styles from './styles'
import Body from "../../../components/Body";
import Button from "../../../components/Button";
import QuestionnairePresentation from "../../../../assets/svg/questionnairePresentation.svg";


const Presentation = ({ currentQuestionnaire, handleNextQuestion }) => {
  return (
    <Body>
      <View>
        <Text style={styles.title}>{currentQuestionnaire.titulo}</Text>
      </View>
      <Text style={styles.subtitle}>{currentQuestionnaire.descricao}</Text>
      <QuestionnairePresentation style={{ alignSelf: 'center', marginVertical: 30 }} />
      <Button
        text="Iniciar Questionário"
        onPress={() => handleNextQuestion('next')}
        iconAfter={
          <IconAD
            style={styles.textInputIcon}
            name="arrowright"
            size={20}
            color="#342F2E"
          />
        } />
    </Body>
  );
}


export default Presentation;