import React from "react";

import {Dimensions, FlatList, TouchableOpacity, View} from "react-native";
import {Container, Content} from "native-base";
import {ListItem, Text} from "react-native-elements";
import firebase from "firebase";

const {width} = Dimensions.get("screen");

export class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
        this.getLists();
    }

    getLists = async () => {
        const list = [];
        let snapshot = await global.db
            .collection("posts")
            .where(
                "userEmail",
                "==",
                JSON.stringify(firebase.auth().currentUser.email)
            )
            .get()
            .then(async function (querySnapshot) {
                querySnapshot.forEach(doc => {
                    const {title, text, userEmail} = doc.data();
                    list.push({title, text, userEmail});
                });
            });
        this.setState({list});
    };

    render() {
        const {list} = this.state;
        return (
            <Container>
                <Content>
                    {list && list.length > 0 && (
                        <FlatList
                            data={list}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item}) => (
                                <TouchableOpacity>
                                    {item.title && (
                                        <ListItem
                                            title={
                                                <View
                                                    style={{
                                                        flexDirection: "vertical",
                                                        justifyContent: "space-between"
                                                    }}
                                                >
                                                    <Text>{item.title}</Text>
                                                    <Text>{item.text}</Text>
                                                    <Text>{item.userEmail}</Text>
                                                </View>
                                            }
                                            bottomDivider
                                        />
                                    )}
                                </TouchableOpacity>
                            )}
                        />
                    )}
                </Content>
            </Container>
        );
    }
}
