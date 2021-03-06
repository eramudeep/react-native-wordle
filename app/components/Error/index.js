import {View, Text} from 'react-native';
import React from 'react';
import Label from '../Label';

export default function index({error}) {
  if (!error) return null;
  return (
    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
      <Label text={error} />
    </View>
  );
}
