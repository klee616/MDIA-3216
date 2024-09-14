import { Button as NativeButton, View } from "react-native";
import Button from "@/components/atoms/Button";
import Label from "@/components/atoms/Label";

export default function LabelledButton({ labelText, buttonText }){
    return (
    <View>
        <Label labelText={labelText} />
        <Button buttonText={buttonText} />
    </View>
    )
};