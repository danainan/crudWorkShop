//UserListScreen 
import React, { Component,useState,useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {ListItem } from 'react-native-elements';



export default function UsersListScreen({ navigation, route }) {


    const [users, setUsers] = useState([]);




    useEffect(() => {
        const subscriber = firestore()
            .collection('users')
            .onSnapshot(querySnapshot => {
                const users = [];

                querySnapshot.forEach(documentSnapshot => {
                    users.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });

                setUsers(users);
            });

        return () => subscriber();

    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                renderItem={({ item }) => (
                    <ListItem
                        bottomDivider
                        onPress={() => {
                            navigation.navigate('UserDetailScreen', {
                                userId: item.key,
                            });
                        }}>
                        <ListItem.Content>
                            <ListItem.Title>{item.name}</ListItem.Title>
                            <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                )}
            />
        </View>
    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    listItem: {
        padding: 10,
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
    },
});







