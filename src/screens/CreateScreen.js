import React from "react";
import firebase from "firebase";
import Header from "../reusable/Header";
import BackButton from "../reusable/BackButton";
import TextInput from "../reusable/TextInput";
import Background from "../reusable/Background";
import Button from "../reusable/Button";

import {StyleSheet} from "react-native";
import {theme} from "../core/theme";

export class CreateScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            text: ""
        };
    }

    onSubmitPressed = async () => {
        const userEmail = JSON.stringify(firebase.auth().currentUser.email);

        await db
            .collection("posts")
            .doc(userEmail)
            .set({
                userEmail,
                title: this.state.title,
                text: this.state.text
            })
            .then();
    };

    render() {
        return (
            <Background>
                <BackButton
                    goBack={() => this.props.navigation.navigate("Dashboard")}
                />
                <Header>Create Post</Header>
                <TextInput
                    label="Title"
                    returnKeyType="next"
                    onChangeText={title => this.setState({title})}
                />
                <TextInput
                    style={{height: 200}}
                    label="Text"
                    returnKeyType="next"
                    onChangeText={text => this.setState({text})}
                />
                <Button
                    mode="contained"
                    onPress={this.onSubmitPressed}
                    style={styles.button}
                >
                    Submit
                </Button>
            </Background>
        );
    }
}

const styles = StyleSheet.create({
    label: {
        color: theme.colors.secondary
    },
    button: {
        marginTop: 24
    },
    row: {
        flexDirection: "row",
        marginTop: 4
    },
    link: {
        fontWeight: "bold",
        color: theme.colors.primary
    }
});
