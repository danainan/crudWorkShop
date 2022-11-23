

import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import {Input, Button} from 'react-native-elements';

export default function UserDetailScreen({route, navigation}) {
    const {userId} = route.params;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    
    useEffect(() => {
        firestore()
        .collection('users')
        .doc(userId)
        .get()
        .then(documentSnapshot => {
            setName(documentSnapshot.data().name);
            setEmail(documentSnapshot.data().email);
        });
    }, []);
    
    const updateUser = async () => {
        await firestore()
        .collection('users')
        .doc(userId)
        .update({
            name: name,
            email: email,
        })
        .then(() => {
            console.log('User updated!');
            alert('User updated!');
            navigation.navigate('UsersListScreen');
        });
    };
    


    const deleteUser = async () => {
        const userRef = firestore().collection('users').doc(userId);
        Alert.alert(
            'Delete User',
            'Are you sure you want to delete this user?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Confirm',
                    onPress: () => {
                        userRef
                        .delete()
                        .then(() => {
                            console.log('User deleted!');
                            alert('Name : ' + name + ' has deleted!');
                            navigation.navigate('UsersListScreen');
                        })
                        .catch((error) => {
                            console.log('Something went wrong with delete operation', error);
                        });
                    },
                },
            ],
            {cancelable: false},
        );
    };



    
    return (
        <ScrollView style={style.container}>
        <View>
            <Input
            placeholder="Name"
            onChangeText={value => setName(value)}
            value={name}
            />
            <Input
            placeholder="Email"
            onChangeText={value => setEmail(value)}
            value={email}
            />
            <Button
            containerStyle={{marginTop: 10}}
            title="Update User"
            onPress={() => updateUser()}
            buttonStyle={{backgroundColor: 'blue'}}
            />
            <Button
            containerStyle={{marginTop: 10}}
            title="Delete User"
            onPress={() => deleteUser()}
            buttonStyle={{backgroundColor: 'red'}}
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

