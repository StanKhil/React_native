import { useEffect, useState } from "react";
import { View } from "react-native-web";
import {StyleSheet} from 'react-native'
import type { Product } from "../../entities/product/model/Product";
import ProductCard from "../../entities/product/ui/ProductCart";
import ProductDao from "../../entities/product/api/ProductDao";

export default function ProductWidget({slug} : {slug: string | undefined}){
    const [products, setProducts] = useState<Array<Product>>([]);

    useEffect(() => {
        ProductDao.getProducts(slug).then(setProducts).catch(console.error);
    }, []);

    return <View style={styles.root}>
        {products.map(g => <ProductCard product={g} key={g.id} />)}
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
