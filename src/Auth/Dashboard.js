import React, { memo } from "react";
import Background from "../reusable/Background";
import Logo from "../reusable/Logo";
import Header from "../reusable/Header";
import Button from "../reusable/Button";
import Paragraph from "../reusable/Paragraph";
import { logoutUser } from "../api/auth-api";

const Dashboard = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>New Link</Header>
    <Paragraph>Social Network for Amputees</Paragraph>
    <Button mode="outlined" onPress={() => logoutUser()}>
      Logout
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate("ProfileScreen")}
    >
      My Posts
    </Button>
    <Button mode="outlined" onPress={() => navigation.navigate("RecentScreen")}>
      All Posts
    </Button>
    <Button mode="outlined" onPress={() => navigation.navigate("CreateScreen")}>
      Create Post
    </Button>
  </Background>
);

export default memo(Dashboard);
