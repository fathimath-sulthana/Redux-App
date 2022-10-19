import { Button, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import { connect, Connect } from 'react-redux';
import { changeCount } from './src/actions/count';
export class App extends Component {
 

  decrementCount () {
    let {count} = this.props;
    count--;
    this.props.counterChange(count)
  }
  incrementCount() {
    let {count} = this.props;
    count++;
    this.props.counterChange(count)
  }
  render() {
    const {count} = this.props
    return (
      <View style={styles.container}>
        <Button
        title='Increment'
        onPress={()=> this.incrementCount()}
        />
        <Text>{count}</Text>
        <Button
        title='Decrement'
        onPress={()=> this.decrementCount()}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

const mapStateToProps =(state) =>{
   return {
    count: state.counter.count
   }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    counterChange:(count) => dispatch(changeCount(count))

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);