import { useContext} from 'react'
import {Text, View} from 'react-native-web'
import {Pressable, StyleSheet} from 'react-native'
import AppContext from '../../features/context/AppContext';


export default function Home() {
  const {showModal} = useContext(AppContext);

  const onShowPress = () => {
    showModal({
        message: "Hello"
    });
  };
    
  return (
    <View style={styles.root}>
      <Text>Hello</Text>
      <Pressable onPress={onShowPress}>
        <Text>Show Modal</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  root:{
    backgroundColor: "inherit",
  }
});

