import React, { useState } from "react";
import {
    Text,
    TouchableWithoutFeedback,
} from "react-native";

import styled from 'styled-components';

const WeightsOfDelivery = () => {
    const weights = [1, 5, 10, 15];
    const [activeWeight, setActiveWeight] = useState(0);

    const onSelectedWeight = (index) => setActiveWeight(index);

    return (
        <Weights>
            {
                weights.map((weight, index) => {
                    return (
                        <TouchableWithoutFeedback onPress={() => onSelectedWeight(index)}>
                            <WeightButton
                                style={{
                                    borderBottomWidth: 1,
                                    borderBottomColor: activeWeight === index ? '#ff5c00' : '#fff'
                                }}>
                                <Text style={{ color: activeWeight === index ? '#ff5c00' : '#bfbfbf', fontSize: 16 }}>До {weight} кг</Text>
                            </WeightButton>
                        </TouchableWithoutFeedback>
                    );
                })}
        </Weights>
    );
}

export default WeightsOfDelivery;

// Компоненты-стили
const Weights = styled.View`
    padding-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
`;
const WeightButton = styled.View`
    width: 70px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;