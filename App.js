// import "react-native-gesture-handler";
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Image, Dimensions } from 'react-native';
// import * as SecureStore from "expo-secure-store";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// CONTEXT
import { AuthContext } from "./src/components/Context";

// SCREENS LOGGEDOUT

import SignIn from './screens/Signin';
import SignUp from './screens/SignUp';

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import Colors from "./assets/colors/Colors";

// loggedOut screens
const StackOnBoarding = createStackNavigator();
const StackOnBoardingScreen = () => {
	return (
		<StackOnBoarding.Navigator>
			{/* <StackOnBoarding.Screen
				name="Splash"
				component={Splash}
				options={{
					headerShown: false,
				}}
			/>
			<StackOnBoarding.Screen
				name="OnBoarding"
				component={Onboarding}
				options={{
					headerShown: false,
				}}
			/> */}
			<StackOnBoarding.Screen
				name="SignIn"
				component={SignIn}
				options={{
					headerShown: false,
				}}
			/>
			<StackOnBoarding.Screen
				name="SignUp"
				component={SignUp}
				options={{
					headerShown: false,
				}}
			/>
			{/* <StackOnBoarding.Screen
				name="ForgotPassword"
				component={ForgotPassword}
				options={{
					headerShown: true,
					title : "Forgot password",
					headerTitleAlign : "center",
					headerStyle: {
						elevation:0,
					},
				}}
			/>
			<StackOnBoarding.Screen
					name="ForgotPassword_update"
					component={ForgotPassword_update}
					options={{
						headerShown: true,
						title : "Forgot password",
									headerTitleAlign : "center",
						headerStyle: {
							elevation:0,
						},
					}}
				/>
			<StackOnBoarding.Screen
					name="Explore"
					component={Explore}
					options={{
						headerShown: false,
					}}
				/> */}
		</StackOnBoarding.Navigator>
	);
};



export default function App() {

  return (
	<AuthContext.Provider>
        <NavigationContainer>
        <StackOnBoardingScreen />
			{/* {token ? <StackAuthScreen /> : <StackOnBoardingScreen />} */}
        </NavigationContainer>
	</AuthContext.Provider>	
  );
}