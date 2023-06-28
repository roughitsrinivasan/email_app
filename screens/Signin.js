import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Image, Dimensions, TextInput } from 'react-native';
import Colors from "../assets/colors/Colors";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import { FontAwesome, AntDesign } from '@expo/vector-icons';

const {width, height} = Dimensions.get("window");

import { AuthContext } from "../src/components/Context";

export default function SignIn({ navigation }) {
    // const { setTokenUser } = React.useContext(AuthContext);
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
            <Text style={styles.sectionOne_title}>Sign In</Text>
            <Text style={styles.description}>If you don't have a account, please signup <Text style={{paddingHorizontal : 5, fontWeight : "bold"}} onPress={() => {navigation.navigate("SignUp")}}>HERE</Text></Text>
        </View>
        {/* section two */}
        <View>
            <View style={[styles.form_group, { marginTop : 50 }]}>
                <Text style={styles.form_group__label}>Email</Text>
                <TextInput placeholder="contact@foodies.com" placeholderTextColor={Colors.grey} style={styles.form_group__input} />
            </View>
            <View style={styles.form_group}>
                <Text style={styles.form_group__label}>Password</Text>
                <TextInput 
                    placeholder="Enter your password" 
                    secureTextEntry={true} 
                    placeholderTextColor={Colors.grey} 
                    style={styles.form_group__input} 
                />
            </View>
            <TouchableOpacity style={styles.forgot} onPress={() => { navigation.navigate("ForgotPassword") }}>
                <Text style={styles.forgot_text}>Forgot your password ?</Text>
            </TouchableOpacity>
        </View>
        {/* third section */}
        <View style={{justifyContent : "flex-end", marginTop : 100}}>
            {/* button SIGN IN */}
            <View style={styles.wrapper_button}>
                <TouchableOpacity style={styles.btn_next} onPress={() => {
                    setTokenUser({id : "user::test"})
                }}>
                    <Text style={styles.btn_next__text}>SIGN IN</Text>
                    <AntDesign name="arrowright" size={16} color="black"/>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{flexDirection : "row", justifyContent : "space-between", paddingHorizontal : 30}}>
            {/* buttons SOCIAL */}
            <TouchableOpacity style={[styles.socialButton, { borderColor : Colors.google}]}>
                <AntDesign name="google" size={24} color={Colors.google} />
                <Text style={styles.socialButton_google}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialButton, { borderColor : Colors.fb}]}>
                <FontAwesome name="facebook" size={24} color={Colors.fb} />
                <Text style={styles.socialButton_facebook}>Facebook</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionOne : {justifyContent : "flex-end", paddingLeft : 30, height : "30%"},
  description : {
    fontFamily : "Poppins_400Regular",
  },    
  sectionOne_title : {color : Colors.primary, fontSize : 35, fontFamily : "Poppins_600SemiBold", marginBottom : 30},
  form_group : {
      paddingBottom : 10,
      borderBottomWidth : 1,
      borderBottomColor : Colors.light_grey,
      alignSelf : "center", 
      width : width - 60,
      marginBottom : 20
  },
  form_group__label : {
      color : Colors.grey,
      fontFamily : "Poppins_400Regular",
      marginBottom : 8
  },
  form_group__input : {
      fontSize : 17,
      fontFamily : "Poppins_400Regular",
  },
  forgot : {
      alignItems : "flex-end",
      paddingRight : 30
  },
  forgot_text : {
      color : Colors.grey
  },
  wrapper_button : { alignItems : "flex-end", justifyContent : "flex-end", width, marginBottom : 60,},
  btn_next : {
      backgroundColor : Colors.secondary,
      borderTopLeftRadius : 50,
      borderBottomLeftRadius : 50,
      paddingVertical : 8,
      paddingHorizontal : 35,
      alignSelf : "flex-end", 
      flexDirection : "row",
      alignItems : "center", 
      justifyContent : "space-between",
      height : 50,
      width : width / 2
    },
    btn_next__text : {
      // fontWeight : "bold",
      marginRight : 10,
      fontFamily : "Poppins_700Bold"
    },
    socialButton : {
        borderWidth : 1,
        borderRadius : 100,
        width : width / 2.5,
        alignItems : "center", 
        justifyContent : "center",
        height : 60,
        flexDirection : "row",
    },
    socialButton_google : {
        color : Colors.google, 
        marginLeft : 15
    },
    socialButton_facebook : {
        color : Colors.fb, 
        marginLeft : 15
    },
    carre : {
        width : 100,
        height : 10,
        backgroundColor : Colors.secondary,
        position : 'absolute',
        bottom : 40,
        left : 30,
    }
});
