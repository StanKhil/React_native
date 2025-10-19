import { useContext} from 'react'
import {Text, View} from 'react-native-web'
import {StyleSheet} from 'react-native'
import AppContext from '../../features/context/AppContext';
import {ProjButton, ProjButtonTypes} from '../../features/ui/ProjeButton';
import ProductGroupsWidget from '../../widgets/product_groups/ProductGroupsWidgets';


export default function Home() {
  const {showModal} = useContext(AppContext);
  

  const onShowPress = () => {
    showModal({
        title: "Death",
        message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A omnis obcaecati eveniet minus expedita, dolores natus assumenda nisi nemo commodi nobis autem velit beatae mollitia, unde suscipit provident tenetur distinctio.",
        buttons: [
          {
            title: "close",
            type: ProjButtonTypes.primary,
            action: () => console.log("close CLick"),
          },
           {
            title: "accept",
            type: ProjButtonTypes.success,
            action: () => console.log("accept CLick"),
          },
          {
            title: "bye bye",
            type: ProjButtonTypes.secondary,
            action: () => console.log("bye CLick"),
          },
        ]
    });
  };
    
  return (
    <View style={styles.root}>
      <ProductGroupsWidget />
      <Text>Hello</Text>
      <ProjButton action={onShowPress} title='Show Modal' type={ProjButtonTypes.primary} style={{maxWidth: 150, paddingVertical: 10}}/>
      <ProjButton action={() => showModal({message:"lorem"})} title='Show Modal' type={ProjButtonTypes.secondary} style={{maxWidth: 150, paddingVertical: 10}}/>
      <ProjButton action={onShowPress} title='Show Modal' type={ProjButtonTypes.success} style={{maxWidth: 150, paddingVertical: 10}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  root:{
    backgroundColor: "inherit",
  }
});

