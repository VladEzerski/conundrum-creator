import React, { FC } from 'react'
import { Text, View, Pressable, ActivityIndicator, Modal } from 'react-native'

import styles from './styles'

const ModalView: FC<ModalViewTypes> = props => {
  const { title, onClose } = props
  return (
    <Modal animationType="slide" transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.title}>{title}</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={onClose}>
            <Text style={styles.textStyle}>Hide</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}
export interface ModalViewTypes {
  title: string
  onClose: (...args: any) => any
}

export default ModalView
