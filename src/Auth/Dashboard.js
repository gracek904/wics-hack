import React, {memo} from "react";
import Background from "../reusable/Background";
import Logo from "../reusable/Logo";
import Header from "../reusable/Header";
import Button from "../reusable/Button";

const Dashboard = ({navigation}) => (
    <Background>
        <Logo/>
        <Header>WiCS-Hack</Header>
        <Paragraph>Demo App</Paragraph>
        <Button mode="outlined" onPress={() => logoutUser()}>
            Logout
        </Button>
        <Button mode="outlined" onPress={() => navigation.navigate("RecentScreen")}>
            Recent
        </Button>
        <Button mode="outlined" onPress={() => navigation.navigate("ProfileScreen")}>
            Profile
        </Button>
    </Background>
);

export default memo(Dashboard);
