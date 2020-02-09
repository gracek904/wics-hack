import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";
import React from "react";

import {AuthLoadingScreen, Dashboard, ForgotPasswordScreen, HomeScreen, LoginScreen, RegisterScreen,} from "../Auth";

import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";

const AuthNavigator = createSwitchNavigator(
    {
        AuthLoadingScreen,
        Dashboard,
        ForgotPasswordScreen,
        HomeScreen,
        LoginScreen,
        RegisterScreen,
    },
    {
        initialRouteName: "AuthLoadingScreen",
    }
);

// const Router = createStackNavigator(
// 	{
// 		Auth: AuthNavigator,
// 		MapScreen,
// 		Category,
// 		CategoryMap,
// 		DetailScreen,
// 	},
// 	{
// 		initialRouteName: "Auth",
// 		headerMode: "none",
// 	}
// );

const bottomTab = createBottomTabNavigator(
    {
        Default: {
            screen: AuthNavigator,
            navigationOptions: {
                tabBarLabel: "Auth",
                tabBarIcon: ({focused}) => (
                    <Ionicons name="ios-home" size={30} color={`${focused ? "#006699" : "#cbd7b5"}`}/>
                ),
                style: {
                    backgroundColor: "red",
                },
            },
        },
        Auth: {
            screen: AuthNavigator,
            navigationOptions: ({navigation}) => ({
                title: "Auth",
                tabBarIcon: ({focused}) => (
                    <Icon name="user-circle" size={30} color={`${focused ? "#006699" : "#cbd7b5"}`}/>
                ),
            }),
        },
    },
    {
        navigationOptions: {
            tabBarOptions: {
                activeTintColor: "#006699",
                inactiveTintColor: "#cbd7b5",
                style: {
                    backgroundColor: "#f2f2f2",
                    height: 60,
                },
            },
        },
    }
);

//Getting the tab header title
// bottomTab.navigationOptions = ({ navigation }) => {
//   const { routeName } = navigation.state.routes[navigation.state.index];
//   const headerTitle = routeName;
//   return {
//     headerTitle
//   };
// };

const bottomRouter = createStackNavigator(
    {
        Bottom: bottomTab,
    },
    {
        initialRouteName: "Bottom",
        headerMode: "none",
    }
);

export default createAppContainer(bottomRouter);
