import { Text, View } from "react-native";

export default function MyName({ myName }){
    return (
        <View>
            <Text
                style={{color:"#023047",fontSize:"2rem",fontWeight:"bold"}}
            >
                {myName}
            </Text>
        </View>
    ) 

};