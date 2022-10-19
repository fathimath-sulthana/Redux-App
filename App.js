import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux';

import {counterDecrement,counterIncrement} from './src/actions/count'
 function App () {
 
const count = useSelector(state => state.counter.count)
let dispatch = useDispatch();
  
  
    
    return (
      <View style={styles.container}>
        <Button
        title='Increment'
        onPress={()=> dispatch(counterIncrement())}
        />
        <Text>{count}</Text>
        <Button
        title='Decrement'
        onPress={()=> dispatch(counterDecrement())}
        />
      </View>
    )
  }

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})



export default (App);