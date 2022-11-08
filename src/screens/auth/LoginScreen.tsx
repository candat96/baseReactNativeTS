import { View, Text , Pressable } from 'react-native'
import React from 'react'
import { useAppSelector } from '../../redux'
import { useSelector, useDispatch } from "react-redux"
import { authActions } from '../../redux/slices'

const LoginScreen = () => {
    // const loginstore = useAppSelector()
    // const auth = useS
    const dispatch = useDispatch()
    const auth = useAppSelector(state => state.auth);
    console.log("ddddd", auth)
  return (
    <View>
      <Text>LoginScreessssn</Text>
      <Pressable onPress={() => dispatch(authActions.login({username :"1", password : "2"}))} style= {{width : 200, height : 200, marginTop : 20, backgroundColor:"green"}}>
        <Text>hihi</Text>
      </Pressable>
    </View>
  )
}

export { LoginScreen }

