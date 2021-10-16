import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import IconAD from 'react-native-vector-icons/AntDesign';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import {
  VERSION_CODE,
  VERSION_NAME,
  VERSION_CODEPUSH,
} from '../../../../env.local';
import UserCircle from '../../../../assets/svg/userCircle';

const Drawer = createDrawerNavigator();

const DrawerInfo = ({ content, session }) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent session={session} {...props} />
      )}
    >
      <Drawer.Screen name="Home" component={content} />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = ({ session, ...props }) => {
  const navigation = useNavigation();

  const infos = [
    { label: 'Nome', description: (session && session.nomeColaborador) || '' },
    {
      label: 'Login',
      description: session && session.matriculaColaborador,
    },
  ];

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.iconCloseContainer}>
        <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
          <IconAD name="close" size={25} color="#FCBE1B" />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <UserCircle style={styles.drawerIcon} />
        <View style={styles.innerContainer}>
          {infos.map(({ label, description }) => (
            <View key={label}>
              <Text style={styles.drawerLabel}>{label}</Text>
              <View style={styles.drawerDescriptionContainer}>
                <Text style={styles.drawerDescription}>{description}</Text>
              </View>
            </View>
          ))}
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
        <Text style={{ color: '#FCBE1B', textAlign: 'center', marginTop: 20 }}>
          v:{`${VERSION_CODE}\n${VERSION_NAME}/${VERSION_CODEPUSH}`}
        </Text>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerInfo;
