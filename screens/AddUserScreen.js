import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import { Input, Button } from 'react-native-elements';


export default function AddUserScreen({navigation}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const addUser = async () => {
        await firestore()
            .collection('users')
            .add({
                name: name,
                email: email,
            })
            .then(() => {
                console.log('User added!');
                alert('User : ' + name + 'has added!');
                navigation.navigate('UsersListScreen');
            });
    };

    return (
        <ScrollView style={style.container}>
            <View>
                <Input
                    placeholder="Name"
                    onChangeText={value => setName(value)}
                />
                <Input
                    placeholder="Email"
                    onChangeText={value => setEmail(value)}
                />
                <Button
                 
                    title="Add User"
                    onPress={() => addUser()}
                    buttonStyle={{backgroundColor: 'green'}}
                />
                <Button
                    containerStyle={{marginTop: 10,}}
                    title="Go to Users List"
                    onPress={() => navigation.navigate('UsersListScreen')}
                />
            </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
});

