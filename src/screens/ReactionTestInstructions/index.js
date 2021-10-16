import React from 'react';
import { Text } from 'react-native';
import IconAD from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import Body from '../../components/Body';
import Button from '../../components/Button';
import ReactionTestInstructionsSVG from '../../../assets/svg/reactionTestInstructions.svg';

const ReactionTestInstructions = ({ navigation }) => {
  return (
    <Body>
      <Text style={styles.title}>Teste de reação</Text>
      <ReactionTestInstructionsSVG style={styles.reactionTestIntructionsSVG} />
      <Button
        text="Iniciar Tutorial"
        onPress={() => navigation.navigate('TestInstructionsSteps')}
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

export default ReactionTestInstructions;
