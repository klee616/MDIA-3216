import { View } from "react-native";
import personalImage = require("@/assets/images/personal-image.jpg")
import Message from "@/components/molecules/Message";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',
      }}
    >
      <Message
        myImage={personalImage}
        myName='Timothy Lee'
        birth='June 18'
        gender='M' />
    </View>
  );
}
