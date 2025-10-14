import { Pressable, Text } from "react-native-web";
import { StyleSheet, type StyleProp, type ViewStyle } from "react-native";

export {ProjButtonTypes, ProjButton}

enum ProjButtonTypes {
    primary,
    secondary,
    success
}

export default function ProjButton({type, action, title, style} :
     {type: ProjButtonTypes, action:()=>void, title: string, style?: StyleProp<ViewStyle>}){
    let btnStyle;
    switch(type){
        case ProjButtonTypes.secondary: btnStyle = styles.secondary; break;
        case ProjButtonTypes.success: btnStyle = styles.success; break;
        default: btnStyle = styles.primary;
    }
    
    return <Pressable onPress={action} style={style}>
        <Text  style={[styles.button, btnStyle]}>{title}</Text>
    </Pressable>
}

const styles = StyleSheet.create({
    "button" : {
        borderWidth: 2,
        borderRadius: 5,
        fontWeight: 700,
        paddingHorizontal: 15,
        paddingVertical: 8,
        textAlign: "center",
    },
    "primary" : {   
        backgroundColor: "#6c41d3ff",
        borderColor: "#3c2473ff",
        color: "#cbd0b9ff"
    },
    "secondary" : {
        backgroundColor: "#c1c0c0ff",
        borderColor: "#a9a9acff",
        color: "#4b4b4aff"
    },
    "success" : {
        backgroundColor: "#46d43fff",
        borderColor: "#4ea03eff",
        color: "#f2f1f4ff"
    }
});