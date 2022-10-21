import React, { FC, useEffect, useState } from 'react'
import { TextInput, View, Keyboard } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'

import { PrimaryButton } from '@/components/Buttons'
import { NewItemFromProps } from '@/pages/NewCounter/interfaces'
import { useCounterContext } from '@/pages/NewCounter/hooks'
import ioniconsList from './listIcons'
import styles from './styles'
import { useToastContext } from '@/context/toastContext'
import { CountItem } from '@/interfaces'
import { SimpleText } from '@/components/Texts'

const NewItemForm: FC<NewItemFromProps> = ({ snapTo }) => {
  const [itemName, setItemName] = useState('')
  const [itemIcon, setItemIcon] = useState('')
  const {
    addNewCounterItem,
    editCounterItem,
    counterState,
    setCounterItemId
  } = useCounterContext()
  const { setErrorToast } = useToastContext()
  const { itemsCounter, itemToEditId } = counterState

  const onChangeTextInput = (text: string) => setItemName(text)

  const onSelectIcon = (iconName: string) => setItemIcon(iconName)

  const closeNewEntryForm = () => {
    if (!itemName || !itemIcon) {
      setErrorToast('You should select both Name and Icon')
      return
    }

    if (itemToEditId) {
      const updatedItem: CountItem = { id: itemToEditId, itemName, itemIcon }
      editCounterItem(updatedItem)
    } else {
      const id = new Date().getTime().toString()
      addNewCounterItem({ id, itemName, itemIcon })
    }

    Keyboard.dismiss()
    snapTo(0)
    cleanForm()
  }

  const cleanForm = () => {
    setItemIcon('')
    setItemName('')
    setCounterItemId(undefined)
  }

  useEffect(() => {
    const itemToEdit = itemsCounter
      .find(({ id }) => id === itemToEditId)

    if (typeof itemToEditId !== 'undefined' && itemToEdit) {
      setItemIcon(itemToEdit.itemIcon)
      setItemName(itemToEdit.itemName)
    }
  }, [itemToEditId, itemsCounter])

  return (
    <View style={styles.container}>
      <SimpleText style={styles.nameLabel}>Name List</SimpleText>
      <TextInput
        value={itemName}
        style={styles.inputName}
        onChangeText={onChangeTextInput}
        placeholder="Item name"
      />
      <SimpleText style={styles.itemLabel}>Choose an icon for the item</SimpleText>
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