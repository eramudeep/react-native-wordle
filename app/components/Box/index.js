import { View, Text,StyleSheet } from 'react-native'
import React,{useEffect,useState} from 'react'
import { scale } from 'react-native-size-matters';
import Label from '../Label';
import { appColors } from '../../utils/appColors';

export default function index(props) {
    const [state, setState] = useState({}/* "text-black border-2 border-gray-300 dark:bg-zinc-800 dark:text-white rounded" */);

    useEffect(() => {
      setTimeout(() => {
        if (props.state === "C")
        setState(styles.correct)
         // setState("bg-correct text-white");
        if (props.state === "E")
          //setState("bg-exist text-white");
          setState(styles.exist)
        if (props.state === "N")
          setState(styles.inCorrect)
          //setState("bg-wrong text-white dark:bg-gray-600");
      }, 125 * props.pos);
    }, [props.state]);
  
    return (
      <View
        style={[{ justifyContent:'center', alignItems:'center', borderRadius:scale(4),borderColor:appColors.gray,  borderWidth:1, minHeight:scale(50), minWidth:scale(50) , margin:scale( 5)},state]}
        /* className={
          "h-12 w-12 sm:w-14 sm:h-14 grid place-items-center p-0 m-0 font-bold text-2xl rounded-sm " + state
        } */
      >
          <Label text= {props.value === "DEL" ?  "BackspaceIcon" : props.value } bold />
       
      </View>
    );
}

const styles= StyleSheet.create({
  correct:{
   backgroundColor:appColors.correct 
  },
  inCorrect:{
    backgroundColor:appColors.inCorrect 
   },

   exist:{
    backgroundColor:appColors.exist 
   },  
})