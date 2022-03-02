import React, { useEffect,useState } from 'react'
import { StyleSheet, Text, View,ScrollView,SafeAreaView     } from 'react-native'
import { useSelector,useDispatch } from 'react-redux';
import { setError } from '../../redux/actions';
import {  } from 'react-native-gesture-handler';
import { features, starterIntro } from '../../utils/MockData';
import { AlertHelper } from '../../utils/AlertHelper';
import { appColors } from '../../utils/appColors';
import CustomInput from '../../components/CustomInput';
import Label from '../../components/Label';
import CustomButton from '../../components/CustomButton';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'; 
import Divider from '../../components/Divider';
import Modal from 'Components/Modal';
import { scale } from 'react-native-size-matters'; 
import ReduxWrapper from '../../redux/ReduxWrapper';
import Container from '../../components/Container';
import Game from '../../components/Game'

function Home({toggleDarkMode$}) {
      
    return (
        <Container style={styles.container}>
          <CustomButton  style={{backgroundColor:appColors.primary}}  onPress={toggleDarkMode$} label="Dark Mode" />
        <Game />
      </Container>
    )
}


export default ReduxWrapper(Home)
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    header: {
      backgroundColor: appColors.primary,
      alignItems: 'center',
      borderBottomWidth: 12,
      borderBottomColor: '#ddd',
    },
    headerText: {
      color: 'white',
      fontSize: 25,
      padding: 20,
      margin: 20,
      textAlign:'center'
    },
    TitleText: {
        fontSize: 25,
        // padding: 20,
        marginVertical: 20,
      },
    scrollContainer: {
      flex: 1,
      paddingHorizontal:20
    },
    
  });