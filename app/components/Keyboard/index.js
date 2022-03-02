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
    const [state, setState] = useState({label:{color:appColors.black}});
  
    const x = props.value.length === 1 ? "w-7 sm:w-10 " : "p-2 sm:p-4 ";
    const returnKey = () => {
      props.getKey(props.value);
    };
    const getIcon  = ()=>{
      if(props.value === "DEL"){
       return  {name:"backspace",size:scale(20)}
      }
      if(props.value === "ENTER"){
        return  {name:"check",size:scale(20)}
      }
       return null
    }
  
    useEffect(() => {
      setTimeout(() => {
        if (props.state === "C") { 
          setState({label:{color:appColors.white} , bg: styles.correct});
        }
        if (props.state === "E") { 
          setState({label:{color:appColors.white} , bg: styles.exist});
        }
        if (props.state === "N") { 
          setState({label:{color:appColors.white} , bg: styles.inCorrect});
        }
      }, 350);
    }, [props.state]);
  
    return (
      <CustomButton 

        style={[{paddingHorizontal:scale( 10) },state?.bg]}
        onPress={returnKey} 
        label={props.value === "DEL" ? "Back" :props.value}
        iconProps={ getIcon()}
         labelStyle={state?.label }
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
      <View>
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
        <View  style={{paddingHorizontal:scale(10), marginVertical:scale( 5), justifyContent:'space-between', flexDirection:'row', alignItems:'center', alignContent:'center'}}>
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