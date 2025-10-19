import { Text, View } from "react-native-web";
import {StyleSheet} from 'react-native'
import type { ProductGroup } from "../model/ProductGroup";
import {useWindowDimensions} from 'react-native';
import { Link } from "react-router-dom";
 

export default function ProductGroupCard({productGroup} : {productGroup : ProductGroup}){
    const {width} = useWindowDimensions();

    return <View style={[styles.card, {width: 
        width >= 1400 ? "14.66%" :
         width >= 1200 ? "18%" :
         width >= 992 ? "23%" :
         width >= 768 ? "31.33%" :
         width >= 576 ? "48%" : "98%"}]}>
        <Link style={styles.link} to={"group/" + productGroup.slug }>
            <img src={productGroup.imageUrl} alt={productGroup.name} style={styles.img} />
            <Text style={styles.title}>{productGroup.name}</Text>
            <Text style={styles.content}>{productGroup.description}</Text>
        </Link>
    </View>
}


const styles = StyleSheet.create({
  card:{
    borderWidth: 1,
    borderColor: "#B0B0B0",
    margin: "1%"
  },
  img :{
    width: "100%"
  },
  title: {
    marginHorizontal: 10,
    marginVertical: 7,
    fontWeight: 700,
    fontSize: 16,
  },
  link: {
    width: "100%", 
    height: "100%", 
    display: "flex", 
    flexDirection: "column",
    textDecorationLine: "none"
  },
  content: {
    marginHorizontal: 10,
    marginBottom: 10
  }
});
