import { View, TextInput } from "react-native";
import MyImage from "@/components/atoms/MyImage";
import MyName from "@/components/atoms/MyName";
import Mybio from '@/components/atoms/MyBio';

export default function Message({ myImage, myName, birth, gender }){
    return (
    <View
        style={{
            flexDirection:"column",
            gap:10,
            alignItems:"center"
        }}
    >
       <MyImage myImage={myImage} />
       <MyName myName={myName} />
       <Mybio birth={birth} gender={gender} />

    </View>
    )
};