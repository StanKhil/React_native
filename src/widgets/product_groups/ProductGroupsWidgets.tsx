import { useEffect, useState } from "react";
import type { ProductGroup } from "../../entities/product_group/model/ProductGroup";
import ProductGroupDao from "../../entities/product_group/api/ProductGroupDao";
import { View } from "react-native-web";
import {StyleSheet} from 'react-native'
import ProductGroupCard from "../../entities/product_group/ui/ProductGroupCard";

export default function ProductGroupsWidget(){
    const [productGroups, setProductGroups] = useState<Array<ProductGroup>>([]);

    
    useEffect(() => {
        ProductGroupDao.getGroups().then(setProductGroups).catch(console.error);
    }, []);

    return <View style={styles.root}>
        {productGroups.map(g => <ProductGroupCard productGroup={g} key={g.id} />)}
    </View>
}

const styles = StyleSheet.create({
  root:{
    display: "flex",
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    alignItems: "stretch"
  }
});
