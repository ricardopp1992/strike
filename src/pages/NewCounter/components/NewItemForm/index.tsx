import React, { FC, useEffect, useState } from 'react'
import { Text, TextInput, View, Keyboard } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'

import { PrimaryButton } from '@/components/Buttons'
import { NewItemFromProps } from '@/pages/NewCounter/interfaces'
import { useCounterContext } from '@/pages/NewCounter/hooks'
import ioniconsList from './listIcons'
import styles from './styles'
import { useToastContext } from '@/context/toastContext'

const NewItemForm: FC<NewItemFromProps> = ({ snapTo }) => {
  const [itemName, setItemName] = useState('')
  const [itemIcon, setItemIcon] = useState('')
  const { addNewCounterItem } = useCounterContext()
  const { setErrorToast } = useToastContext()

  const onChangeTextInput = (text: string) => setItemName(text)

  const onSelectIcon = (iconName: string) => setItemIcon(iconName)

  const closeNewEntryForm = () => {
    if (!itemName || !itemIcon) {
      setErrorToast('You should select both Name and Icon')
      return
    }

    addNewCounterItem({ id: '1234', itemName, itemIcon })
    Keyboard.dismiss()
    snapTo(0)
    cleanForm()
  }
  
  const cleanForm = () => {
    setItemIcon('')
    setItemName('')
  }

  return (
    <View style={styles.container}>
      <Text>Name List</Text>
      <TextInput
        value={itemName}
        onChangeText={onChangeTextInput}
        placeholder="Item name"
      />

      <Text>Choose an icon for the item</Text>
      <View style={styles.iconsContainer}>
        <FlatList
          numColumns={7}
          columnWrapperStyle={styles.columnWrapper}
          horizontal={false}
          keyExtractor={(item, i) => `${item}${i}`}
          data={ioniconsList}
          renderItem={({ item }) =>
            <Icon
              name={item}
              onPress={() => onSelectIcon(item)}
              style={[styles.icon, item === itemIcon && styles.iconSelected]}
            />
          }
        />
      </View>
      <PrimaryButton style={styles.saveButton} onPress={closeNewEntryForm}>
        Save
      </PrimaryButton>
    </View>
  )
}

export default NewItemForm