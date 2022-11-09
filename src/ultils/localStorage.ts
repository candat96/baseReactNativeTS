import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, data: string): Promise<any> => {
    try {
        await AsyncStorage.setItem(key, data);
        return Promise.resolve()
    } catch (error) {
        return Promise.reject(error)
    }
}

export const getData = async (key: string): Promise<any> => {
    try {
        let jsonValue = await AsyncStorage.getItem(key);
        jsonValue != null ? JSON.parse(jsonValue) : null;
        return Promise.resolve(jsonValue)
    } catch (error) {
        return Promise.reject(error)
    }
}

export const removeData = async (key: string): Promise<any> => {
    try {
        await AsyncStorage.removeItem(key);
        return Promise.resolve()
    } catch (error) {
        return Promise.reject(error)
    }
}
