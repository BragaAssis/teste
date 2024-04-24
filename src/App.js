import 'react-native-gesture-handler';
import React from "react";
import { SafeAreaView, Text } from "react-native";
import TelaA from "./views/TelaA";
import TelaB from "./views/TelaB";
import TelaC from "./views/TelaC";
import { Animated } from 'react-native-reanimated/lib/typescript/reanimated2/component/View';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default props => {
    return(
        <GestureHandlerRootView>
        <SafeAreaView style={{flex: 1}}>
            <TelaA />
            <TelaB />
            <TelaC />
        </SafeAreaView>
        </GestureHandlerRootView>
    )
}