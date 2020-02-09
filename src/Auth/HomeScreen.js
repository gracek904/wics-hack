import React, {memo} from "react";
import Background from "../reusable/Background";
import Logo from "../reusable/Logo";
import Header from "../reusable/Header";
import Button from "../reusable/Button";
import TextInput from "../reusable/TextInput";
import BackButton from "../reusable/BackButton";
import {theme} from "../core/theme";
import {emailValidator, nameValidator, passwordValidator} from "../api/utils";
import {signInUser} from "../api/auth-api";
import Toast from "../reusable/BackButton";

const HomeScreen = ({navigation}) => (
    <Background>
        <Logo/>
        <Header>WiCS-Hack</Header>
        <Paragraph>HomeScreen</Paragraph>
        <Button mode="contained" onPress={() => navigation.navigate("LoginScreen")}>
            Login
        </Button>
        <Button mode="outlined" onPress={() => navigation.navigate("RegisterScreen")}>
            Sign Up
        </Button>
    </Background>
);

export default memo(HomeScreen);
