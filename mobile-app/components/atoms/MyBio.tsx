import { Text, View } from "react-native";

export default function MyBio({ birth,  gender }){
    return (
        <View>
            <Text
                style={{color:"#023047"}}
            >

<b>Birth :</b> {birth} <br />
<b>Gender :</b> {gender}

            </Text>
        </View>
    ) 

};