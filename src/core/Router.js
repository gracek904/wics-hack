import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";
import React from "react";

import {CreateScreen} from "../screens/CreateScreen";
import {RecentScreen} from "../screens/RecentScreen";
import {ProfileScreen} from "../screens/ProfileScreen";

import {AuthLoadingScreen, Dashboard, ForgotPasswordScreen, HomeScreen, LoginScreen, RegisterScreen} from "../Auth";

import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";

const AuthNavigator = createSwitchNavigator(
    {
        AuthLoadingScreen,
        Dashboard,
        ForgotPasswordScreen,
        HomeScreen,
        LoginScreen,
        RegisterScreen
    },
    {
        initialRouteName: "AuthLoadingScreen"
    }
);

const Router = createStackNavigator(
    {
        Auth: AuthNavigator,
        CreateScreen,
        RecentScreen,
        ProfileScreen
    },
    {
        initialRouteName: "Auth",
        headerMode: "none"
    }
);

const bottomTab = createBottomTabNavigator(
    {
        Home: {
            screen: AuthNavigator,
            navigationOptions: {
                tabBarLabel: "Home",
                tabBarIcon: ({focused}) => (
                    <Ionicons
                        name="ios-home"
                        size={30}
                        color={`${focused ? "#B22234" : "#3C3B6E"}`}
                    />
                )
            }
        },
        Profile: {
            screen: Router,
            navigationOptions: {
                tabBarLabel: "Profile",
                tabBarIcon: ({focused}) => (
                    <Icon
                        name="user-circle"
                        size={30}
                        color={`${focused ? "#B22234" : "#3C3B6E"}`}
                    />
                )
            }
        }
    },
    {
        navigationOptions: {
            tabBarOptions: {
                activeTintColor: "#B22234",
                inactiveTintColor: "#3C3B6E",
                style: {
                    backgroundColor: "#FFFFFF",
                    height: 60
                }
            }
        }
    }
);

const bottomRouter = createStackNavigator(
    {
        Bottom: bottomTab
    },
    {
        initialRouteName: "Bottom",
        headerMode: "none"
    }
);

export default createAppContainer(bottomRouter);
