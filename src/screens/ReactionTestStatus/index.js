import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IconAD from 'react-native-vector-icons/AntDesign';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import Body from '../../components/Body';
import Button from '../../components/Button';
import ReactionTestStatusSVG from '../../../assets/svg/reactionTestStatus.svg';

const ReactionTestStatus = ({ navigation }) => {
  return (
    <Body>
      <View>
        <Text style={styles.title}>Teste de reação finalizado</Text>
        <Text style={styles.subtitle}>com sucesso!</Text>
      </View>
      <ReactionTestStatusSVG style={styles.reactionTestStatusSVG} />
      <Text style={styles.body}>
        Clique em
        <Text style={styles.bodyBold}>{` continuar `}</Text>
        para responder ao questionário
      </Text>
      <Button
        text="Continuar"
        onPress={() => navigation.navigate('QuestionnaireInstructions')}
        IconAfter={() => (
          <IconAD
            style={styles.textInputIcon}
            name="arrowright"
            size={20}
            color="#342F2E"
          />
        )}
      />
    </Body>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'OpenSans-Regular',
    fontSize: RFPercentage(3),
    // lineHeight: 30,
    color: '#211E1E',
    letterSpacing: 0.81,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'OpenSans-Bold',
    fontSize: RFPercentage(3.5),
    color: '#03AD3D',
    letterSpacing: 1.05,
    textAlign: 'center',
  },
  body: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 20,
    lineHeight: 30,
    color: '#211E1E',
    letterSpacing: 0.81,
    textAlign: 'center',
    marginVertical: 25,
  },
  bodyBold: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 20,
    lineHeight: 30,
    color: '#211E1E',
    letterSpacing: 0.7,
    textAlign: 'center',
  },
  reactionTestStatusSVG: {
    alignSelf: 'center',
    marginVertical: 20,
  },
});

export default ReactionTestStatus;
