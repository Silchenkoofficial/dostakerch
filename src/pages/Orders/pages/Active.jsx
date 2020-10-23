import React, {useState} from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScrollView, TouchableHighlight } from "react-native-gesture-handler";
import Svg, { Path } from "react-native-svg";
import { createStackNavigator } from '@react-navigation/stack';
import { NewOrder } from '../../';

const Stack = createStackNavigator();

const SendButton = ({title, description, onClick}) => (
  <React.Fragment>
    <View style={styles.btnLogo}>
      <Svg
        width="26"
        height="24"
        viewBox="0 0 26 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23 20.75V8.25C24.3807 8.25 25.5 7.13071 25.5 5.75V3.25C25.5 1.86929 24.3807 0.75 23 0.75H3C1.61929 0.75 0.5 1.86929 0.5 3.25V5.75C0.5 7.13071 1.61929 8.25 3 8.25V20.75C3 22.1307 4.11929 23.25 5.5 23.25H20.5C21.8807 23.25 23 22.1307 23 20.75ZM5.50001 20.75V8.25H20.5V20.75H5.50001ZM9.25001 12V9.5H16.75V12H9.25001ZM2.99999 5.75V3.25H23V5.75H2.99999Z"
          fill="#FF5C00"
        />
      </Svg>
    </View>
    <View>
      <Text style={styles.btnTitle}>{title}</Text>
      <Text style={styles.btnSubtitle}>
        {description}
      </Text>
    </View>
  </React.Fragment>
);

function Active() {
  const [pressed, setPressed] = useState(false);

  const _onHideUnderlay = () => {
    setPressed(false);
  }
  const _onShowUnderlay = () => {
    setPressed(true);
  }

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
      }}
    >
      <View style={styles.container}>
        <Text style={{marginBottom: 10}}>Активных заказов нет</Text>
        <TouchableHighlight
          activeOpacity={0}
          underlayColor="#FFFFFF"
          style={
            pressed ? styles.btnActive : styles.btn
          }
          onHideUnderlay={_onHideUnderlay.bind(this)}
          onShowUnderlay={_onShowUnderlay.bind(this)}
          onPress={() => {
            
          }}
        >
          <SendButton
            title='Отправить посылку'
            description='Курьер отвезет документы, подарок и все, что пожелаете.'
          />
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
}

export default Active;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  btn: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: 25,
    marginBottom: 25,
    flexDirection: "row",
    borderColor: "#ff5c00",
    borderRadius: 20,
    borderWidth: 2,
    borderStyle: 'solid',
    backgroundColor: "white"
  },
  btnActive: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: 25,
    marginBottom: 25,
    flexDirection: "row",
    borderColor: "#ff5c00",
    borderRadius: 20,
    borderWidth: 2,
    borderStyle: 'solid',
    backgroundColor: "white",
    transform: [{scale: 0.99}]
  },
  btnLogo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 7,
    backgroundColor: "#f1f1f1"
  },
  btnTitle: {
      width: 173,
      fontSize: 16,
      fontWeight: '900',
      marginBottom: 5,
  },
  btnSubtitle: {
      width: 173,
      fontSize: 11,
      color: '#c4c4c4',
  }
});
