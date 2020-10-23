import React, { useState } from "react";
import {
    Text,
    TouchableWithoutFeedback,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from 'styled-components';

const TypeOfDelivery = () => {
    const [activeType, setActiveType] = useState(0);
    const types = ["Пешком", "На машине", "Грузовой"];

    const onSelectedType = (index) => {
        setActiveType(index);
    }

    return (
        <ScrollView style={{ maxHeight: 50, backgroundColor: '#fff' }} horizontal showsHorizontalScrollIndicator={false}>
            {
                types.map((type, index) => {
                    return (
                        <TouchableWithoutFeedback onPress={() => onSelectedType(index)}>
                            <TypeButton
                                style={{
                                    backgroundColor: activeType === index ? '#ff5c00' : '#fff',
                                    marginHorizontal: 10
                                }}>
                                <Text style={{ color: activeType === index ? '#fff' : '#ff5c00', fontSize: 16 }}>{type}</Text>
                            </TypeButton>
                        </TouchableWithoutFeedback>
                    );
                })
            }
        </ScrollView>
    );
}

export default TypeOfDelivery;

// Компоненты-стили
const TypeButton = styled.View`
    padding: 12px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid #ff5c00;
`;