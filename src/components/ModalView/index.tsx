import React, { FC, PropsWithChildren } from 'react'
import { Text, View, Pressable, ActivityIndicator, Modal } from 'react-native'

import styles from './styles'

const ModalView: FC<PropsWithChildren<ModalViewTypes>> = props => {
  const { title, onClose, children } = props

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
          {children}
        </View>
      </View>
    </Modal>
  )
}
export interface ModalViewTypes {
  title: string
  //TODO fix types
  onClose: (...args: any) => any
}

export default ModalView
