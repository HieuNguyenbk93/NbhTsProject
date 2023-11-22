import {Button, Text, View} from 'react-native';
import React from 'react';
import generalStyles from '../../utils/styles';
import {useGlobalState} from '../../state/GlobalStateContext';

const MapScreen = () => {
  const {state, dispatch} = useGlobalState();
  const increment = () => {
    dispatch({type: 'INCREMENT'});
  };
  const decrement = () => {
    dispatch({type: 'DECREMENT'});
  };
  return (
    <View style={generalStyles.containerCenter}>
      <Text>MapScreen</Text>
      <Text>Count: {state.count}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
    </View>
  );
};

export default MapScreen;

// const styles = StyleSheet.create({})
