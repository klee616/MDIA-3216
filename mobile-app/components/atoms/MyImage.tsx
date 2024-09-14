import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    stretch: {
        width: 150,
        height: 188,
        resizeMode: 'stretch',
    },
});

export default function MyImage({ myImage }) {
    return (
        <View>
            <Image
                style={styles.stretch}
                source={myImage}
            />
        </View>
    )

};