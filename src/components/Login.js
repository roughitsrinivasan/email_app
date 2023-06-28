import React from "react";
import  { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Button, Alert
} from "react-native";
import { StatusBar } from "expo-status-bar";
import FacebookBannerImage from "../../assets/facebook-banner.jpg";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
          name: "",
          toAddress: "",
        };
      }
      state = {
        name: "",
        toAddress: "",
      };
      redirect(){
       
      }
  render(){
    
  return (
    <>
      <StatusBar style="light" />

      {/* https://reactnative.dev/docs/image */}
      <Image source={FacebookBannerImage} style={styles.banner} />

      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <TextInput
            style={[styles.input, styles.inputUsername]}
            placeholder="Name"
            placeholderTextColor="#cdcdcf"
            onChange={(text) => {
                this.setState({ name: text });
                }
            }
          />

          <TextInput
            style={[styles.input, styles.inputPassword]}
            // secureTextEntry={true}
            placeholder="To Address"
            placeholderTextColor="#cdcdcf"
            onChange={(text) => {
                this.setState({ toAddress: text });
                }
            }
          />

          <TouchableOpacity style={styles.button} onPress={this.redirect}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

       
        </View>
      </SafeAreaView>
    </>
  );
}
}


const styles = StyleSheet.create({
  banner: {
    resizeMode: "contain",
    width: "100%",
    height: null,
    aspectRatio: 750 / 460, // Image ratio
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  content: {
    padding: 22,
  },
  input: {
    borderWidth: 1,
    borderColor: "#cdcdcf",
    color: "#333333",
    fontSize: 16,
    height: 44,
    paddingHorizontal: 25,
  },
  inputUsername: {
    borderBottomWidth: 0,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  inputPassword: {
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  button: {
    height: 42,
    borderRadius: 6,
    backgroundColor: "#1977f3",
    justifyContent: "center",
    marginVertical: 15,
  },
  buttonText: {
    color: "#b4cafb",
    textAlign: "center",
    fontSize: 16,
  },
  link: {
    paddingVertical: 8,
  },
  linkText: {
    color: "#1c6ede",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  footer: {
    alignItems: "center",
    padding: 22,
    paddingBottom: 0,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
    marginBottom: 10,
  },
  dividerLine: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#cbccd0",
  },
  dividerText: {
    width: 50,
    textAlign: "center",
  },
  buttonRegister: {
    width: "100%",
    backgroundColor: "#e7f3ff",
  },
  buttonRegisterText: {
    color: "#1077f7",
  },
});