import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { View, Text, Alert, StatusBar } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import Button from '../../components/Button';
import styles from './styles';
import LoadingScreen from '../../components/LoadingScreen';
import AtentoIcon from '../../../assets/svg/atentoIcon';
import StorageActions from '../../store/storage/storage.actions';

const SyncScreen = ({ navigation, evaluations, sendingEvaluations }) => {
  const netInfo = useNetInfo();
  const [evaluationsData, setEvaluationsData] = useState(evaluations);
  const [loading, setLoading] = useState(false);

  const alert = (message) => {
    Alert.alert('Atenção', message, [
      {
        text: 'OK',
        style: 'default',
      },
    ]);
  };

  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        if (!loading) {
          return;
        }
        e.preventDefault();
      }),
    [navigation, loading],
  );

  const handleSync = async () => {
    if (netInfo.isInternetReachable) {
      setLoading(true);
      try {
        await StorageActions.sendEvaluations(evaluations, sendingEvaluations);
        setEvaluationsData([]);
        setLoading(false);
        alert('Sincronização realizada com sucesso!');
      } catch (e) {
        setLoading(false);
        alert(e.message);
      }
    } else {
      alert('Verifique sua conexão com a internet');
    }
  };
  return !loading ? (
    <View style={styles.container}>
      <View>
        <StatusBar barStyle="dark-content" />
        <View style={styles.iconContainer}>
          <AtentoIcon />
        </View>
        <Text style={styles.titleSecondary}>SISTEMA ATENTO</Text>
        <Text style={styles.titlePrimary}>
          Existem {evaluationsData.length} testes aguardando sincronização
        </Text>
      </View>
      <View>
        {evaluationsData.length > 0 && (
          <Button
            text="Sincronizar"
            style={styles.button}
            onPress={handleSync}
          />
        )}
        <Button
          text="Voltar"
          style={styles.buttonVoltar}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </View>
  ) : (
    <LoadingScreen />
  );
};

const mapStateToProps = (state) => ({
  sendingEvaluations: state.sendingEvaluations,
  evaluations: state.storage.evaluation,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SyncScreen);
