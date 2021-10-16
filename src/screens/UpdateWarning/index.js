import React from 'react';
import IconAD from 'react-native-vector-icons/AntDesign';
import { View, Text, StatusBar, Linking, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import styles from './styles';
import UpdateWarningImage from '../../../assets/svg/updateWarningImage';

const UpdateWarning = () => {
  const goesToDeviceStore = () => {
    if (Platform.OS === 'android') {
      Linking.openURL('market://details?id=com.atentoappv3');
    }
  };

  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <StatusBar barStyle="light-content" backgroundColor="#211E1E" />
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Versão do app desatualizada</Text>
        <Text style={styles.message}>
          A versão do app Atento instalada em seu celular está desatualizada.
          Clique no botão abaixo e instale a versão mais recente.
        </Text>
        <View style={{ maxWidth: 280, maxHeight: 280 }}>
          <UpdateWarningImage />
        </View>
        <Button
          text="Atualizar agora"
          onPress={goesToDeviceStore}
          style={styles.button}
          IconAfter={() => (
            <IconAD
              style={styles.textInputIcon}
              name="arrowright"
              size={20}
              color="#342F2E"
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default UpdateWarning;
