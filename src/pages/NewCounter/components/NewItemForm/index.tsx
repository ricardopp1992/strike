import React, { FC, useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'

import { PrimaryButton } from '@/components/Buttons'
import { NewItemFromProps } from '@/pages/NewCounter/interfaces'
import { useCounterContext } from '@/pages/NewCounter/hooks'
import ioniconsList from './listIcons'
import styles from './styles'

const NewItemForm: FC<NewItemFromProps> = ({ snapTo }) => {
  const [itemName, setItemName] = useState('')
  const [itemIcon, setItemIcon] = useState('')
  const { addNewCounterItem } = useCounterContext()

  const onChangeTextInput = (text: string) => setItemName(text)

  const closeNewEntryForm = () => {
    addNewCounterItem({ id: '1234', itemName, itemIcon })
    snapTo(0)
  }

  return (
    <View style={styles.container}>
      <Text>Name List</Text>
      <TextInput onChangeText={onChangeTextInput} placeholder="Item name" />

      <Text>Choose an icon for the item</Text>
      <View style={styles.iconsContainer}>
        <FlatList
          numColumns={7}
          columnWrapperStyle={styles.columnWrapper}
          horizontal={false}
          keyExtractor={(item, i) => `${item}${i}`}
          data={ioniconsList}
          renderItem={({ item }) => <Icon style={styles.icon} name={item} />} />
      </View>
      <PrimaryButton style={styles.saveButton} onPress={closeNewEntryForm}>
        Save
      </PrimaryButton>
    </View>
  )
}

export default NewItemForm