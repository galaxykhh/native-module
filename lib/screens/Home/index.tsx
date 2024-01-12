import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, NativeModules, StyleSheet, View } from 'react-native';
import { HomeScreenProps } from '../../../App';

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
    
    return (
        <View style={styles.layout}>
            <Button title='Lagacy Native Counter' onPress={() => navigation.navigate('LagacyNativeCounter')} />
        </View>
    );
};

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    count: {
        fontSize: 60,
        marginBottom: 24,
    },
});

export default Home;
