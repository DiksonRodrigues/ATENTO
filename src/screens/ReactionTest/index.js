import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { getPositions } from './infos';
import Body from '../../components/Body';
import stylesVertical from './styles.vertical';
import stylesHorizontal from './styles.horizontal';
import evaluationActions from '../../store/evaluation/evaluation.actions';

const ReactionTest = ({ device, navigation, setTestData }) => {
  const styles =
    device.orientation === 'vertical' ? stylesVertical : stylesHorizontal;

  const [start, setStart] = useState();
  const [events, setEvents] = useState([]);
  const [positions, setPositions] = useState([]);
  const [qtdVerde, setQtdVerde] = useState(null);
  const [guideArray, setGuideArray] = useState([]);
  const [currentFase, setCurrentFase] = useState(0);

  const qtdFases = 3;

  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        if (!(currentFase < qtdFases)) {
          return;
        }
        e.preventDefault();
      }),
    [navigation, currentFase, qtdFases],
  );

  useEffect(() => {
    const newPositions = getPositions(0);

    setStart(Date.now());
    setGuideArray(newPositions.guide);
    setQtdVerde(newPositions.qtdVerde);
    setPositions(newPositions.positions);
  }, []);

  useEffect(() => {
    if (currentFase < qtdFases) {
      const newPositions = getPositions(currentFase);
      setPositions(newPositions.positions);
      setQtdVerde(newPositions.qtdVerde);
      setGuideArray(newPositions.guide);
    } else {
      setTestData({
        start,
        end: Date.now(),
        data: events,
      });
      navigation.navigate('QuestionnaireInstructions');
    }
  }, [currentFase]);

  useEffect(() => {
    if (qtdVerde === 0) {
      setCurrentFase(currentFase + 1);
    }
  }, [qtdVerde]);

  const handleCheck = (evt, i) => {
    const clickedCircle = positions[i];
    let StatusReacao = 0;

    try {
      if (
        clickedCircle.color === 'verde' &&
        clickedCircle.number === guideArray[0].number
      ) {
        guideArray.shift();
        clickedCircle.clicked = true;
        setQtdVerde(qtdVerde - 1);
        StatusReacao = 1;
      }
    } catch {
      navigation.navigate('QuestionnaireInstructions');
    }

    setEvents([
      ...events,
      {
        InstanteReacao: Date.now() - start,
        CorReacao: clickedCircle.color,
        StatusReacao,
        CoordX: Math.round(evt.nativeEvent.pageX),
        CoordY: Math.round(evt.nativeEvent.pageY),
        NumeroReacao: clickedCircle.value,
        NumeroSequencia: clickedCircle.number,
      },
    ]);
  };

  return (
    <Body style={{ justifyContent: 'center' }}>
      <View style={styles.container}>
        {positions.map((position, i) => {
          const clicked = position.clicked ? 'clicked' : '';
          return (
            <TouchableOpacity
              key={`square-${i}`}
              onPress={(evt) => handleCheck(evt, i)}
            >
              <View
                style={{
                  ...styles.square,
                  ...styles[`square${position.color}`],
                  ...styles[clicked],
                }}
              >
                {clicked ? (
                  <Icon name="check" size={30} color="#FCBE1B" />
                ) : (
                  <Text
                    style={{
                      ...styles.squareText,
                      ...styles[`squareText${position.color}`],
                    }}
                  >
                    {position.number}
                  </Text>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </Body>
  );
};

const mapStateToProps = (state) => ({
  device: state.device,
});

const mapDispatchToProps = (dispatch) => ({
  setTestData: (payload) => dispatch(evaluationActions.setTestData(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReactionTest);
