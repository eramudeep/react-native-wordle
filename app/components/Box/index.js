import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {scale} from 'react-native-size-matters';
import Label from '../Label';
import {appColors} from '../../utils/appColors';
import ReduxWrapper from '../../redux/ReduxWrapper';
 
 function index(props) {
   const darkMode = props?.appState?.darkMode
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
          borderColor: darkMode  ? appColors.white : appColors.gray,
          borderWidth: 1,
          minHeight: scale(56),
          minWidth: scale(56),
          //margin: scale(5),
           
           
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

export default ReduxWrapper(index)