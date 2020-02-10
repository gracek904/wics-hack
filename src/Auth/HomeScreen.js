import React, { memo } from "react";
import Background from "../reusable/Background";
import Logo from "../reusable/Logo";
import Header from "../reusable/Header";
import Button from "../reusable/Button";
import Paragraph from "../reusable/Paragraph";

const HomeScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>New Link</Header>
    <Paragraph>Social Network for Amputees</Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate("LoginScreen")}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate("RegisterScreen")}
    >
      Sign Up
    </Button>
  </Background>
);

export default memo(HomeScreen);
