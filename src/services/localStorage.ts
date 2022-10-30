import AsyncStorage from '@react-native-async-storage/async-storage';

export const setStoreData = async (storageKey: string, value: string) => {
  try {
    await AsyncStorage.setItem(storageKey, value)
  } catch (error) {
    console.error(error);
  }
}

export const getStoredData = async <T>(storageKey: string): Promise<T | {}> => {
  try {
    const item = await AsyncStorage.getItem(storageKey)
    if (item !== null) {
      return JSON.parse(item)
    }
  } catch (error) {
    console.error(error);
  }

  return {}
}