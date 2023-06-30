import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import Colors from "../assets/colors/Colors";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import {  AntDesign } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

import { AuthContext } from "../src/components/Context";

export default function SignIn({ navigation }) {
  // const { setTokenUser } = React.useContext(AuthContext);
  const { setName, setEmail } = React.useContext(AuthContext);
  const[username,setUserName]=useState('');
    const[useremail,setUserEmail]=useState('');
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading ...</Text>;
  }

  return (
    <View style={styles.container}>
      {/* section one */}
      <View style={styles.sectionOne}>
        <View style={styles.carre}></View>
        <Text style={styles.sectionOne_title}>EAS</Text>
        <Text style={styles.description}>
          Email Automation Software
        </Text>
      </View>
      {/* section two */}
      <View>
        <View style={[styles.form_group, { marginTop: 50 }]}>
          <Text style={styles.form_group__label}>Email</Text>
          <TextInput
            placeholder="contact@email.com"
            placeholderTextColor={Colors.grey}
            style={styles.form_group__input}
            value={useremail}
            onChangeText={(text) => setUserEmail(text)}
          />
        </View>
        <View style={styles.form_group}>
          <Text style={styles.form_group__label}>Name</Text>
          <TextInput
            placeholder="Enter your name"
            placeholderTextColor={Colors.grey}
            style={styles.form_group__input}
            value={username}
            onChangeText={(text) => setUserName(text)}
          />
        </View>
      </View>
      {/* third section */}
      <View style={{ justifyContent: "flex-end", marginTop: 100 }}>
        <View style={styles.wrapper_button}>
          <TouchableOpacity
            style={styles.btn_next}
            onPress={() => {
                setName(username);
                setEmail(useremail);
              navigation.navigate("Camera");
            }}
          >
            <Text style={styles.btn_next__text}>CONTINUE</Text>
            <AntDesign name="arrowright" size={16} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  sectionOne: { justifyContent: "flex-end", paddingLeft: 30, height: "30%" },
  description: {
    fontFamily: "Poppins_400Regular",
  },
  sectionOne_title: {
    color: Colors.primary,
    fontSize: 35,
    fontFamily: "Poppins_600SemiBold",
    marginBottom: 30,
  },
  form_group: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light_grey,
    alignSelf: "center",
    width: width - 60,
    marginBottom: 20,
  },
  form_group__label: {
    color: Colors.dark_grey,
    fontFamily: "Poppins_700Bold",
    marginBottom: 8,
    fontSize: 20
  },
  form_group__input: {
    fontSize: 17,
    fontFamily: "Poppins_400Regular",
  },
  forgot: {
    alignItems: "flex-end",
    paddingRight: 30,
  },
  forgot_text: {
    color: Colors.grey,
  },
  wrapper_button: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    width,
    marginBottom: 60,
  },
  btn_next: {
    backgroundColor: "transparent",
    borderColor: Colors.blue,
    borderWidth: 3,
    borderRadius:50,
    paddingVertical: 8,
    paddingHorizontal: 35,
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    width: width / 2,
  },
  btn_next__text: {
    marginRight: 10,
    fontFamily: "Poppins_700Bold",
    color: Colors.blue
  },
  socialButton: {
    borderWidth: 1,
    borderRadius: 100,
    width: width / 2.5,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    flexDirection: "row",
  },
  socialButton_google: {
    color: Colors.google,
    marginLeft: 15,
  },
  socialButton_facebook: {
    color: Colors.fb,
    marginLeft: 15,
  },
  carre: {
    width: 100,
    height: 10,
    backgroundColor: Colors.blue,
    position: "absolute",
    bottom: 40,
    left: 30,
  },
});
