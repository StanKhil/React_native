import { View, Text } from "react-native-web";
import { useParams } from "react-router-dom";

export default function Product() {
    const {slug} = useParams();
    return (
        <View>
            <Text>Product: {slug}</Text>
        </View>
    )
}