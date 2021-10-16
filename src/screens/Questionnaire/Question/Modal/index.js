import React, { useState, useEffect } from 'react'
import Modal from 'react-native-modal';
import { Text, View, ScrollView, Alert } from "react-native";
import CheckBox from '@react-native-community/checkbox';

import Button from "../../../../components/Button";
import stylesVertical from './styles.vertical'
import stylesHorizontal from './styles.horizontal'

const ModalOptions = ({ device, modalVisible, modalData, handleSaveModal }) => {
  const styles = device.orientation === 'vertical' ? stylesVertical : stylesHorizontal

  const [scrollViewRef, setScrollViewRef] = useState();
  const [scrollOffset, setScrollOffset] = useState();
  const [list, setList] = useState([]);
  const [selectedList, setSelectedList] = useState([]);

  useEffect(() => {
    setScrollViewRef(React.createRef())
  }, [])

  useEffect(() => {
    if (modalData && modalData.listaResposta !== '') {
      setList(modalData.listaResposta.split('|'))
    }
  }, [modalData])

  const alert = async (message) => {
    Alert.alert('Atenção', message, [
      {
        text: 'OK',
        style: 'default',
      },
    ]);
  };

  const handleScrollTo = p => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo(p);
    }
  };

  const handleOnScroll = event => {
    setScrollOffset(event.nativeEvent.contentOffset.y)
  };

  return (
    <Modal
      isVisible={modalVisible}
      swipeDirection={['down']}
      scrollTo={handleScrollTo}
      scrollOffsetMax={100}
      scrollEventThrottle={16}
      scrollOffset={scrollOffset}
      propagateSwipe={true}
      avoidKeyboard
    >
      <View style={styles.modalContainer}>
        <ScrollView
          onScroll={handleOnScroll}
          ref={scrollViewRef}
          style={styles.scrollViewContainer}
        >
          <Text style={styles.modalTitle}>Marque os medicamentos na lista abaixo</Text>
          {list.map((item, i) => {
            const selected = selectedList.find(selectedItem => selectedItem === item)
            return (
              <View key={`item-${i}`} style={{ flex: 1, flexDirection: 'row', marginBottom: 5 }} >
                <CheckBox
                  value={!!selected}
                  onValueChange={() => {

                    var index = selectedList.indexOf(item);
                    
                    if(index == -1){
                      setSelectedList([...selectedList, item]);
                    }
                    else{
                      selectedList.splice(index,1);
                    }

                  }}                 
                />
                <Text style={styles.listItem}>{item}</Text>
              </View>
            )
          })}
        </ScrollView>
        <Button
          text="Continuar"
          onPress={() => {
            if(selectedList.length > 0){
              handleSaveModal(modalData, selectedList)
              setSelectedList([])
            }
            else{
              alert('Favor informar pelo menos um medicamento')
            }  
          }}
        />
      </View>
    </Modal>
  )
}

export default ModalOptions
