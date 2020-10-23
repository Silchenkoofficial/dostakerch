import React, { useState } from "react";
import {
    Text,
    View,
    TouchableWithoutFeedback,
    TextInput
} from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import styled from 'styled-components';
import Svg, { Path } from "react-native-svg";

const Product = () => {
    const products = ["Документы", "Подарок", "Горячая еда", "Продукты", "Цветы", "Торт", "Другое"];
    const [product, setProduct] = useState('');

    return (
        <ProductBlock>
            <InputBlock>
                <InputLabel>
                    <Svg width={20} height={13} viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path fill-rule="evenodd" clip-rule="evenodd" d="M13.6531 1.83354L15.1884 4.90415L17.5014 6.44619V9.33354H16.5259C16.1827 8.36254 15.2566 7.66687 14.1681 7.66687C13.0796 7.66687 12.1536 8.36254 11.8104 9.33354H8.19252C7.84933 8.36254 6.92329 7.66687 5.83478 7.66687C4.74626 7.66687 3.82023 8.36254 3.47703 9.33354H2.50144V1.83354H13.6531ZM17.5014 11.0002H16.5259C16.1827 11.9712 15.2566 12.6669 14.1681 12.6669C13.0796 12.6669 12.1536 11.9712 11.8104 11.0002H8.19252C7.84932 11.9712 6.92329 12.6669 5.83478 12.6669C4.74626 12.6669 3.82023 11.9712 3.47703 11.0002H2.50144C1.58097 11.0002 0.834778 10.254 0.834778 9.33354V1.83354C0.834778 0.913062 1.58097 0.16687 2.50144 0.16687H13.6531C14.2844 0.16687 14.8615 0.523541 15.1438 1.08818L16.4812 3.76292L19.1681 5.55422V9.33354C19.1681 10.254 18.4219 11.0002 17.5014 11.0002ZM6.66811 10.1669C6.66811 10.6271 6.29502 11.0002 5.83478 11.0002C5.37454 11.0002 5.00144 10.6271 5.00144 10.1669C5.00144 9.70663 5.37454 9.33354 5.83478 9.33354C6.29502 9.33354 6.66811 9.70663 6.66811 10.1669ZM15.0014 10.1669C15.0014 10.6271 14.6283 11.0002 14.1681 11.0002C13.7079 11.0002 13.3348 10.6271 13.3348 10.1669C13.3348 9.70663 13.7079 9.33354 14.1681 9.33354C14.6283 9.33354 15.0014 9.70663 15.0014 10.1669Z" fill="#FF5C00" />
                    </Svg>
                    <InputLabelText>Что везем?</InputLabelText>
                </InputLabel>
                <TextInput
                    onFocus={() => setProduct('')}
                    onChange={(e) => setProduct(e.target.value)}
                    style={{
                        width: '65%',
                        paddingVertical: 12,
                        paddingLeft: 5,
                        borderColor: '#ff5c00',
                        borderWidth: 1,
                        borderTopEndRadius: 10,
                        color: '#ff5c00',
                        fontWeight: '600'
                    }}
                    placeholder="Выберите товар или напишите"
                    value={product}
                />
            </InputBlock>
            <InputBlock>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        paddingVertical: 12,
                        paddingLeft: 5,
                        borderColor: '#ff5c00',
                        borderTopWidth: 0,
                        borderWidth: 1,
                        borderBottomEndRadius: 10,
                        borderBottomStartRadius: 10,
                        color: '#ff5c00'
                    }}
                    placeholder={product}
                >
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {
                            products.map((item, index) =>
                                <TouchableWithoutFeedback
                                    onPress={() => { setProduct(item) }}
                                >
                                    <View style={{
                                        marginHorizontal: 5,
                                        borderColor: '#ff5c00',
                                        borderWidth: 1,
                                        paddingHorizontal: 10,
                                        paddingVertical: 5,
                                        borderRadius: 50
                                    }}>
                                        <Text style={{ color: '#ff5c00', fontSize: 14 }}>{item}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        }
                    </ScrollView>
                </View>
            </InputBlock>
        </ProductBlock>
    );
}
export default Product;

// Компоненты-стили
const InputBlock = styled.View`
    display: flex;
    flex-direction: row;
`;
const InputLabel = styled.View`
    padding: 9px 0 9px 8px;
    width: 35%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid #ff5c00;
    border-right-width: 0px;
    borderTopStartRadius: 10px;
`;
const InputLabelText = styled.Text`
    margin-left: 5px;
    color: #ff5c00;
    font-size: 13px;
`;

const ProductBlock = styled.View`
    margin-top: 15px;
    padding: 10px 10px;
    background-color: #fff;
`;