import React, { useState, useEffect } from 'react';

import { Text, View, TouchableOpacity } from 'react-native';

import Modal from './Modal';
import ProgressBar from '../ProgressBar';
import Body from '../../../components/Body';
import stylesVertical from './styles.vertical';
import stylesHorizontal from './styles.horizontal';

const Question = ({
  currentQuestion,
  handleSelectAnswer,
  questionnaireSize,
  handleNextQuestion,
  device,
}) => {
  const styles =
    device.orientation === 'vertical' ? stylesVertical : stylesHorizontal;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState();

  const handleSaveModal = (item, selected) => {
    const answer = {
      ...item,
      JustificativaRespondido: selected.length > 0 ? selected.join(';') : '',
    };
    setModalVisible(false);
    handleSelectAnswer(answer);
  };

  return (
    <Body style={styles.container}>
      <ProgressBar
        current={currentQuestion.ordemPergunta}
        total={questionnaireSize}
        handleNextQuestion={handleNextQuestion}
      />
      <View style={styles.innerContainer}>
        <Text style={styles.text}>{currentQuestion.textoPergunta}</Text>
        {currentQuestion.respostasPergunta.map((item, i) => {
          return (
            <TouchableOpacity
              key={`answer-${i}`}
              onPress={() => {
                if (item.listaResposta && item.listaResposta !== '') {
                  setModalVisible(true);
                  setModalData(item);
                } else {
                  handleSelectAnswer(item);
                }
              }}
              style={styles.optionContainer}
            >
              <Text style={styles.optionText}>{item.textoResposta}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <Modal
        device={device}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        modalData={modalData}
        handleSaveModal={handleSaveModal}
      />
    </Body>
  );
};

export default Question;
