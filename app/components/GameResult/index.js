import {View, Text} from 'react-native';
import React from 'react';
import Modal from '../Modal';
import CustomButton from '../CustomButton';
import {scale} from 'react-native-size-matters';
import {appColors, shadow} from '../../utils/appColors';
import Label from '../Label';

export default function index({
  resetGame,
  isVisible,
  toggleModal,
  result,
  word,
}) {
  //const [isVisible, setisVisible] = useState(false)
  return (
    <View>
      <Modal is30Pecent modalProps={{isVisible}} toggleModal={toggleModal}>
        <View
          style={{
            backgroundColor: 'lightgray',
            padding: scale(20),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Label text={`${result} !!`} />
        </View>

        <View
          style={{
            paddingVertical: scale(10),
            padding: scale(20),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{paddingVertical: scale(10)}}>{`The Answer :`}</Text>
          <View
            style={{
              backgroundColor: appColors.btn,
              borderRadius: scale(5),
              paddingHorizontal: scale(20),
              borderStyle: 'dashed',
              padding: scale(10),
              borderWidth: scale(0.57),
            }}>
            <Label text={word?.toUpperCase()} style={{letterSpacing: 13}} />
          </View>
          <CustomButton
            onPress={resetGame}
            label={'Re-start'}
            style={{
              marginVertical: scale(10),
              paddingHorizontal: scale(20),
              backgroundColor: appColors.primary,
            }}
          />
        </View>
      </Modal>
    </View>
  );
}
