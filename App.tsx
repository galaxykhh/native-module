import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './lib/screens/Home';
import LagacyNativeCounter from './lib/screens/LagacyNativeCounter';
import { RTNContacts } from './RTNContacts/spec';

type StackParams = {
    Home: undefined;
    LagacyNativeCounter: undefined;
};

const Stack = createNativeStackNavigator<StackParams>();

export type StackNavigationProps = NativeStackNavigationProp<StackParams>;
export type HomeScreenProps = NativeStackScreenProps<StackParams, 'Home'>;
export type LagacyNativeCounterScreenProps = NativeStackScreenProps<StackParams, 'LagacyNativeCounter'>;

const App: React.FC = () => {

    const hasContacts = () => {
        RTNContacts.hasContactsPermission();
    };
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{ headerLargeTitle: true }}
                />
                <Stack.Screen
                    name='LagacyNativeCounter'
                    component={LagacyNativeCounter}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
