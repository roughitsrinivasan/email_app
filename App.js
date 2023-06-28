import React,{useMemo,useState} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// CONTEXT
import { AuthContext } from "./src/components/Context";

// SCREENS 

import SignIn from './screens/Signin';
import WebCam from './src/components/WebCam';

// loggedOut screens
const StackOnBoarding = createStackNavigator();
const StackOnBoardingScreen = () => {


	return (
		<StackOnBoarding.Navigator>
			<StackOnBoarding.Screen
				name="SignIn"
				component={SignIn}
				options={{
					headerShown: false,
				}}
			/>
			<StackOnBoarding.Screen
				name="Camera"
				component={WebCam}
				options={{
					headerShown: false,
				}}
			/>
			
		</StackOnBoarding.Navigator>
	);
};



export default function App() {

	const[username,setUserName]=useState('');
	const[useremail,setUserEmail]=useState('');
	const authContext = React.useMemo(() => {
		return {
			// logOut: async () => {
			// 	await SecureStore.deleteItemAsync("token");
			// 	// alert("amek dina ??");
			// 	setToken("");
			// 	// console.log("token", token);
			// },
			// setTokenUser: async (token) => {
			// 	// garder toute les infos du User.
			// 	console.log("Voici le TOKEN recu => ", token);
			// 	await SecureStore.setItemAsync("token", JSON.stringify(token));
			// 	setToken(JSON.stringify(token));
			// },
			// getTokenUser: () => {
			// 	return token;
			// },
			getUserName: () => {
				return username;
			},
			getUserEmail: () => {
				return useremail;
			},
			setName: async (name) => {
				setUserName(name);
			},
			setEmail: async (email) => {
				setUserEmail(email);
			}
		};
	}, [username,useremail]);

  return (
	<AuthContext.Provider value={authContext}> 
        <NavigationContainer>
        <StackOnBoardingScreen  />
        </NavigationContainer>
	</AuthContext.Provider>	
	
  );
}
