import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IconAD from 'react-native-vector-icons/AntDesign';

import { ScrollView } from 'react-native-gesture-handler';
import CounterBar from './CounterBar';
import Body from '../../components/Body';
import Button from '../../components/Button';
import ReactionTestStepOneSVG from '../../../assets/svg/reactionTestStepOne.svg';
import ReactionTestStepTwoSVG from '../../../assets/svg/reactionTestStepTwo.svg';
import ReactionTestStepTreeSVG from '../../../assets/svg/reactionTestStepTree.svg';

const ReactionTestInstructionsSteps = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const stepsConfig = [
    {
      number: '01',
      message: 'Marque os quadrados verdes na sequência de 1 a 36.',
      image: (
        <ReactionTestStepOneSVG style={styles.reactionTestIntructionsSVG} />
      ),
    },
    {
      number: '02',
      message: 'Esteja concentrado do início ao fim.',
      image: (
        <ReactionTestStepTwoSVG style={styles.reactionTestIntructionsSVG} />
      ),
    },
    {
      number: '03',
      message: 'Mesmo se errar continue marcando até o final.',
      image: (
        <ReactionTestStepTreeSVG style={styles.reactionTestIntructionsSVG} />
      ),
    },
  ];

  const StepContent = ({ number, message, image }) => {
    return (
      <>
        <View>
          <Text style={styles.title}>{number}</Text>
          <Text style={styles.subtitle}>{message}</Text>
        </View>
        <View>
          {image}
          <CounterBar current={Number(number)} total={3} />
        </View>
      </>
    );
  };

  return (
    <Body style={{ justifyContent: 'space-between' }}>
      <StepContent {...stepsConfig[currentStep]} />
      <View style={styles.buttonsContainer}>
        {currentStep < stepsConfig.length - 1 && (
          <>
            <Button
              onPress={() => setCurrentStep(currentStep + 1)}
              text="Próxima"
              style={styles.firstButton}
              IconAfter={({ color }) => (
                <IconAD name="arrowright" size={20} color={color} />
              )}
            />
            <Button
              text="Pular"
              onPress={() => navigation.navigate('Test')}
              IconAfter={({ color }) => (
                <IconAD
                  color={color}
                  style={styles.textInputIcon}
                  name="arrowright"
                  size={20}
                  color="#342F2E"
                />
              )}
            />
          </>
        )}

        {currentStep === stepsConfig.length - 1 && (
          <Button
            onPress={() => navigation.navigate('Test')}
            text="Iniciar Teste"
            style={styles.firstButton}
            IconAfter={({ color }) => (
              <IconAD name="arrowright" size={20} color={color} />
            )}
          />
        )}
      </View>
    </Body>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 30,
    lineHeight: 35,
    color: '#211E1E',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 20,
    lineHeight: 25,
    color: '#211E1E',
    textAlign: 'center',
  },
  body: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 20,
    lineHeight: 30,
    color: '#211E1E',
    letterSpacing: 0.81,
    textAlign: 'center',
  },
  bodyBold: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 20,
    lineHeight: 30,
    color: '#211E1E',
    letterSpacing: 0.7,
    textAlign: 'center',
  },
  reactionTestIntructionsSVG: {
    alignSelf: 'center',
  },
  firstButton: {
    marginBottom: 10,
  },
});

export default ReactionTestInstructionsSteps;
