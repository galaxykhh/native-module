import React, { useEffect, useState } from 'react';
import { Button, NativeEventEmitter, NativeModules, StyleSheet, Text, View } from 'react-native';
const CounterModule = NativeModules.Counter;

const eventEmitter = new NativeEventEmitter(CounterModule);

const LagacyNativeCounter: React.FC = () => {
    const [ count, setCount ] = useState<number>(CounterModule.initialCount);

    useEffect(() => {
        CounterModule.getCount((value: number) => {
            value > 0 && setCount(value);
        });
    }, []);

    useEffect(() => {

        eventEmitter.addListener('onCountChanged', setCount);

        return () => {
            eventEmitter.removeAllListeners('onCountChanged');
        };
    }, []);

    return (
        <View style={styles.layout}>
            <Text style={styles.count}>{count}</Text>
            <Button title='INCREMENT' onPress={() => CounterModule.increment()} />
            <Button title='DECREMENT' onPress={() => CounterModule.decrement()} />
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

export default LagacyNativeCounter;
