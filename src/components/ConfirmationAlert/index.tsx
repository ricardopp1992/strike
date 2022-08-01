import React, { FC } from 'react'
import { Modal, Text, View } from 'react-native'

import { IConformationAlertProps } from '@/interfaces'
import styles from './styles'
import { SecondaryButton } from '../Buttons/SecondaryButton'

const ConfirmationAlert: FC<IConformationAlertProps> = ({
  customStyles,
  headerText,
  alertMessage,
  confirmText = 'Yes',
  cancelText = 'Cancel',
  visible,
  onConfirm,
  onDismiss,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      statusBarTranslucent={true}
    >
      <View style={[styles.viewContainer, customStyles]}>
        <Text style={styles.headerText}>{headerText}</Text>
        <Text>{alertMessage}</Text>
        <View style={styles.actionButtons}>
          <SecondaryButton onPress={onConfirm}>{confirmText}</SecondaryButton>
          <SecondaryButton onPress={onDismiss}>{cancelText}</SecondaryButton>
        </View>
      </View>
    </Modal>
  )
}

export default ConfirmationAlert