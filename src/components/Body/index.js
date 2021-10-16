import React from 'react';
import { connect } from 'react-redux';
import { StatusBar, View, ScrollView, SafeAreaView } from 'react-native';

import Header from '../Header';
import stylesVertical from './styles.vertical';
import stylesHorizontal from './styles.horizontal';

const Body = ({ style, children, device }) => {
  const styles =
    device.orientation === 'vertical' ? stylesVertical : stylesHorizontal;

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#342F2E" />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView contentContainerStyle={styles.contentScrollView}>
          <View style={{ ...styles.bodyContainer }}>
            <Header />
            <View style={{ ...styles.bodyInnerContainer, ...style }}>
              {children}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  device: state.device,
});

export default connect(mapStateToProps, null)(Body);
