import React, { FC } from 'react'
import { Modal, View } from 'react-native'

import { IConformationAlertProps } from '@/interfaces'
import styles from './styles'
import { SecondaryButton } from '../Buttons/SecondaryButton'
import { SimpleText } from '../Texts'
import HeadingText from '../Texts/HeadingText'

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
        <HeadingText style={styles.headerText}>{headerText}</HeadingText>
        <SimpleText>{alertMessage}</SimpleText>
        <View style={styles.actionButtons}>
          <SecondaryButton onPress={onConfirm}>{confirmText}</SecondaryButton>
          <SecondaryButton onPress={onDismiss}>{cancelText}</SecondaryButton>
        </View>
      </View>
    </Modal>
  )
}

export default ConfirmationAlert