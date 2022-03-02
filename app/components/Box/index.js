import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {scale} from 'react-native-size-matters';
import Label from '../Label';
import {appColors} from '../../utils/appColors';

export default function index(props) {
  const [state, setState] = useState(
    {label:{color:appColors.black}  }  ,
  );

  useEffect(() => {
    setTimeout(() => {
      if (props.state === 'C') setState({label:{color:appColors.white}, bg: styles.correct});

      if (props.state === 'E') setState({label:{color:appColors.white}, bg: styles.exist});
      if (props.state === 'N') setState({label:{color:appColors.white}, bg: styles.inCorrect});
    }, 125 * props.pos);
  }, [props.state]);

  return (
    <View
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: scale(4),
          borderColor: appColors.gray,
          borderWidth: 1,
          minHeight: scale(55),
          minWidth: scale(55),
           margin: scale(5),
           
        },
        state?.bg,
      ]}>
      <Label
        text={props.value === 'DEL' ? 'BackspaceIcon' : props.value}
        style={[{fontSize: scale(20)},state.label]}
        bold
      />
    </View>
  );
}

const styles = StyleSheet.create({
  correct: {
    backgroundColor: appColors.correct,
  },
  inCorrect: {
    backgroundColor: appColors.inCorrect,
  },

  exist: {
    backgroundColor: appColors.exist,
  },
});
