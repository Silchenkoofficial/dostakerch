import React, {useState} from "react";
import { 
    View,
    ScrollView,
    KeyboardAvoidingView
} from "react-native";

import {
    TypeOfDelivery,
    WeightsOfDelivery,
    Product,
    InfoBlock
} from '../components/NewOrders';

import styled from 'styled-components';

function NewOrder() {
    return (
        <KeyboardAvoidingView
        behavior='padding'
        keyboardShouldPersistTaps={'always'}
        >
            <View style={{
                marginTop: 50,
                backgroundColor: '#f8f8f8'
            }}>
                <Container>
                    <TypeOfDelivery />
                    <WeightsOfDelivery />
                    <ScrollView>
                        <Product />
                        <InfoBlock title="Откуда" />
                    </ScrollView>
                </Container>
            </View>
        </KeyboardAvoidingView>
    );
}

export default NewOrder;

// Компоненты-стили
const Container = styled.View`
    width: 100%;
    height: 100%;
`;