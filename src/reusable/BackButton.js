import React, {memo} from "react";
import {Image, StyleSheet, TouchableOpacity} from "react-native";
import {getStatusBarHeight} from "react-native-status-bar-height";

const BackButton = ({goBack}) => (
    <TouchableOpacity onPress={goBack} style={styles.container}>
        <Image style={styles.image} source={require("../assets/arrow_back.png")}/>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 10 + getStatusBarHeight(),
        left: -20
    },
    image: {
        width: 49,
        height: 49
    }
});

export default memo(BackButton);