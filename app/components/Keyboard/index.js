import { View, Text ,StyleSheet} from 'react-native'
import React,{useState,useEffect} from 'react'
import CustomButton from '../CustomButton';
import Label from '../Label';
import { scale } from 'react-native-size-matters';
import { appColors } from '../../utils/appColors';
 
const keyboard = {
    line1: "QWERTYUIOP",
    line2: "ASDFGHJKL",
    line3: "ZXCVBNM",
  };
  
  let defaultLetters = [];
  
  "abcdefjhijklmnopqrstuvwxyz".split("").forEach((i) => {
    defaultLetters[i] = "";
  });



function Key(props) {
    const [state, setState] = useState({}/* "bg-gray-200 hover:bg-gray-300 dark:bg-zinc-400 dark:text-white dark:hover:bg-zinc-500" */);
  
    const x = props.value.length === 1 ? "w-7 sm:w-10 " : "p-2 sm:p-4 ";
    const returnKey = () => {
      props.getKey(props.value);
    };
  
    useEffect(() => {
      setTimeout(() => {
        if (props.state === "C") {
          //setState("bg-correct text-white");
          setState(styles.correct);
        }
        if (props.state === "E") {
          //setState("bg-exist text-white");
          setState(styles.exist);
        }
        if (props.state === "N") {
          //setState("bg-wrong text-white dark:bg-gray-600");
          setState(styles.inCorrect);
        }
      }, 350);
    }, [props.state]);
  
    return (
      <CustomButton
       /*  className={
          x +
          state +
          " h-14 300 grid items-center rounded font-semibold cursor-pointer"
        } */

        style={[{paddingHorizontal:scale( 10) },state]}
        onPress={returnKey}
        label={props.value === "DEL" ? "Back" :props.value}
      >
         
      </CustomButton>
    );
  }


function index(props) {
    const [letters, setletters] = useState(defaultLetters);
    useEffect(() => {
      setletters(props.letters);
    }, [props.changed]);
  
    const keyHandler = (value) => {
      props?.keyHandler(value);
    };
    return (
      <View className="flex flex-col items-center w-100 pb-5">
        <View  style={{ marginVertical:scale( 5), justifyContent:'space-between', flexDirection:'row', alignItems:'center', alignContent:'center'}} >
          {keyboard.line1.split("").map((value, key) => (
            <Key
              getKey={keyHandler}
              value={value}
              key={key}
              state={letters?.[value]}
            />
          ))}
        </View>
        <View  style={{paddingHorizontal:scale(20), marginVertical:scale( 5), justifyContent:'space-between', flexDirection:'row', alignItems:'center', alignContent:'center'}}>
          {keyboard.line2.split("").map((value, key) => (
            <Key
              getKey={keyHandler}
              value={value}
              key={key}
              state={letters?.[value]}
            />
          ))}
        </View>
        <View  style={{  marginVertical:scale( 5), justifyContent:'space-between', flexDirection:'row', alignItems:'center', alignContent:'center'}}>
          <Key value="ENTER" getKey={keyHandler} />
          {keyboard.line3.split("").map((value, key) => (
            <Key
              getKey={keyHandler}
              value={value}
              key={key}
              state={letters?.[value]}
            />
          ))}
          <Key value="DEL" getKey={keyHandler} />
        </View>
      </View>
      )
}

export default index


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