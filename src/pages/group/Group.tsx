import { useEffect, useState } from "react";
import { Text, View } from "react-native-web";
import { useParams } from "react-router-dom";
import type { ProductGroup } from "../../entities/product_group/model/ProductGroup";
import ProductGroupDao from "../../entities/product_group/api/ProductGroupDao";
import ProductWidget from "../../widgets/product/ProductWidgets";

export default function Group(){
    const {slug} = useParams();
    const [group, setGroup] = useState<ProductGroup|null>(null);

    useEffect(() => {
        if(typeof slug != 'undefined') {
            ProductGroupDao.getGroup(slug as string).then(setGroup).catch(console.error);
        }
    }, [slug]);

    return <View>
        <Text style={{fontSize:24, fontWeight:700, textAlign:"center"}}>Group {group?.name}</Text>
        <ProductWidget slug={slug}/> 
    </View>
}