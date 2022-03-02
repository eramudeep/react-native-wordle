import {View, FlatList} from 'react-native';
import React from 'react';
import Box from './index' 

export default function BoxGroup({row}) {

  const renderItem = ({item,index})=>{
      return  <Box key={index} value={item[0]} state={item[1]} pos={index} />
  }  
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
         

      }}
       
      className="flex gap-1 w-fit">
          <FlatList
          horizontal
                renderItem={renderItem}     
                data={row}
          /> 
    </View>
  );
}
