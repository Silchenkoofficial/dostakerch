import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styled from 'styled-components';
import Svg, {Path} from 'react-native-svg';

function InfoBlock({ title }) {
    return (
        <Info>
            <InfoTitle>{title}</InfoTitle>
            <InfoForm>
                <InputBlock>
                    <InputLabel>
                        <Svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M4.8618 7.33366L9.8629 2.33255L14.864 7.33366H14.8629V15.667H4.86293V7.33366H4.8618ZM3.19626 8.99919L1.96557 10.2299L0.787903 9.05223L8.68539 1.15473C9.33571 0.504412 10.3901 0.504412 11.0404 1.15473L18.9379 9.05223L17.7602 10.2299L16.5296 8.99925V15.667C16.5296 16.5875 15.7834 17.3337 14.8629 17.3337H4.86293C3.94246 17.3337 3.19626 16.5875 3.19626 15.667V8.99919Z" fill="#FF5C00" />
                        </Svg>
                        <InputLabelText>Адрес</InputLabelText>
                    </InputLabel>
                    <TextInput
                        style={{
                            width: '65%',
                            paddingVertical: 12,
                            paddingLeft: 5,
                            borderColor: '#ff5c00',
                            borderWidth: 1,
                            borderTopEndRadius: 10,
                            borderBottomEndRadius: 10,
                            color: '#ff5c00',
                            fontWeight: '600'
                        }}
                        placeholder="ул. Ленина, 1"
                    />
                </InputBlock>
                <InputBlock>
                    <InputLabel>
                        <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M8.00034 5.94866C8.43209 5.36682 8.58692 4.75361 8.09861 4.21233C7.00282 2.67902 6.26587 1.73082 5.80362 1.27419C4.92482 0.406077 3.47918 0.523503 2.71807 1.27345C2.30928 1.67625 2.17088 1.81457 1.75114 2.24091C-0.586906 4.58021 0.838952 9.52541 4.6294 13.3196C8.419 17.1129 13.3637 18.5395 15.7067 16.1953C16.094 15.8219 16.4219 15.4938 16.6806 15.2204C17.4264 14.4321 17.5397 13.0502 16.6757 12.1524C16.2327 11.6922 15.3285 10.9908 13.7307 9.84785C13.2413 9.41026 12.6611 9.50511 12.1291 9.85411C11.8732 10.022 11.687 10.1918 11.3354 10.5438L10.6968 11.1827C10.6127 11.2668 9.47073 10.6949 8.36217 9.58527C7.25301 8.47502 6.68149 7.33296 6.7652 7.24925L7.40418 6.60993C7.51574 6.49825 7.56908 6.44419 7.63748 6.3723C7.77999 6.22253 7.89798 6.0866 8.00034 5.94866ZM11.8747 12.3612L12.5134 11.7222C12.7069 11.5285 12.8323 11.4094 12.9343 11.3272C14.334 12.3324 15.1447 12.9644 15.4758 13.3085C15.6746 13.515 15.6437 13.892 15.4709 14.0746C15.2317 14.3274 14.921 14.6383 14.5397 15.0061C13.0247 16.5217 9.03316 15.3701 5.80752 12.1413C2.58087 8.9115 1.42982 4.9194 2.93341 3.41498C3.35146 2.99039 3.48391 2.858 3.88688 2.46095C4.03796 2.31208 4.44951 2.27865 4.63331 2.46021C4.9892 2.81177 5.64936 3.65707 6.6205 5.00985C6.57023 5.07227 6.50744 5.1428 6.43102 5.22311C6.37494 5.28206 6.32821 5.32942 6.22606 5.43167L5.58771 6.07037C4.50176 7.15624 5.4266 9.00434 7.18406 10.7635C8.94031 12.5215 10.7891 13.4474 11.8747 12.3612Z" fill="#FF5C00" />
                        </Svg>
                        <InputLabelText>Телефон</InputLabelText>
                    </InputLabel>
                    <TextInput
                        style={{
                            width: '65%',
                            paddingVertical: 12,
                            paddingLeft: 5,
                            borderColor: '#ff5c00',
                            borderWidth: 1,
                            borderTopEndRadius: 10,
                            borderBottomEndRadius: 10,
                            color: '#ff5c00',
                            fontWeight: '600'
                        }}
                        placeholder="+7 (978) 123 45 67"
                    />
                </InputBlock>
                <InputBlock>
                    <InputLabel>
                        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M10.0014 19.1668C4.93883 19.1668 0.834778 15.0628 0.834778 10.0002C0.834778 4.93755 4.93883 0.833496 10.0014 0.833496C15.0641 0.833496 19.1681 4.93755 19.1681 10.0002C19.1681 15.0628 15.0641 19.1668 10.0014 19.1668ZM10.0014 17.5002C14.1436 17.5002 17.5014 14.1423 17.5014 10.0002C17.5014 5.85803 14.1436 2.50016 10.0014 2.50016C5.85931 2.50016 2.50144 5.85803 2.50144 10.0002C2.50144 14.1423 5.85931 17.5002 10.0014 17.5002ZM14.1681 9.16683H10.8348V5.00016H9.16811V10.8335H14.1681V9.16683Z" fill="#FF5C00" />
                        </Svg>
                        <InputLabelText>Время</InputLabelText>
                    </InputLabel>
                    <TextInput
                        style={{
                            width: '31%',
                            paddingVertical: 12,
                            paddingLeft: 5,
                            borderColor: '#ff5c00',
                            borderWidth: 1,
                            borderTopEndRadius: 10,
                            borderBottomEndRadius: 10,
                            textAlign: 'center',
                            color: '#ff5c00',
                            fontWeight: '600'
                        }}
                        placeholder="Сегодня"
                    />
                    <TextInput
                        style={{
                            marginLeft: 'auto',
                            width: '31%',
                            paddingVertical: 12,
                            paddingLeft: 5,
                            borderColor: '#ff5c00',
                            borderWidth: 1,
                            borderRadius: 10,
                            color: '#ff5c00',
                            fontWeight: '600'
                        }}
                        placeholder="В любое время"
                    />
                </InputBlock>
                <InputBlock>
                    <InputLabel>
                        <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M4.00149 17.1705L9.07382 14.0003H15.6682C16.5886 14.0003 17.3348 13.2541 17.3348 12.3337V2.33366C17.3348 1.41318 16.5886 0.666992 15.6682 0.666992H2.33482C1.41434 0.666992 0.668152 1.41318 0.668152 2.33366V12.3337C0.668152 13.2541 1.41434 14.0003 2.33482 14.0003H4.00149V17.1705ZM8.59582 12.3337L5.66815 14.1635V12.3337H2.33482V2.33366H15.6682V12.3337H8.59582Z" fill="#FF5C00" />
                        </Svg>
                        <InputLabelText>Комментарий</InputLabelText>
                    </InputLabel>
                    <TextInput
                        multiline={true}
                        style={{
                            width: '65%',
                            paddingVertical: 12,
                            paddingLeft: 5,
                            borderColor: '#ff5c00',
                            borderWidth: 1,
                            borderTopEndRadius: 10,
                            borderBottomEndRadius: 10,
                            color: '#ff5c00',
                            fontWeight: '600'
                        }}
                        placeholder="Комментарий: кв, офис и т. д."
                    />
                </InputBlock>
            </InfoForm>
        </Info>
    );
}

export default InfoBlock;

const Info = styled.View`
    margin-top: 15px;
    padding: 10px 20px;
    background-color: #fff;
`;
const InfoTitle = styled.Text`
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 500;
    color: #ff5c00;
`;
const InfoForm = styled.View`

`;
const InputBlock = styled.View`
    margin-bottom: 5px;
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
    borderBottomStartRadius: 10px;
`;
const InputLabelText = styled.Text`
    margin-left: 5px;
    color: #ff5c00;
    font-size: 13px;
`;