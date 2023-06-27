import * as ImagePicker from 'expo-image-picker';


import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Button from './Button';


export default function Imagepicker({ title, onPress, icon, color }) {
    const [image, setImage] = React.useState(null);
    const [Type,setType]=React.useState('')

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
      
        console.log(result);
      
        if (!result.cancelled) {
            // extract the filetype
         setType(result.uri.substring(result.uri.lastIndexOf(".") + 1));
       setImage(result.uri);
       
        }
      };

       var validatinoApi ='https://seusite.com/OOP/';
        var headers={
        'Accept':'application/json',
        "Content-Type": "multipart/form-data",
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Origin':'*',
        'crossDomain': 'true',
        'Host': 'https://seusite.com/OOP/',
        'Origin': 'https://origem.com',
        
        };
        /*'crossDomain': 'true',*/
        var Data={
        image:image,
        // namefoto: `photo.${namefoto}`,
        type: `image/${Type}`

        };
        console.log(Data);
        // fetch(validatinoApi,
        // {
        // method:'POST',
        // headers:headers,
        // body:JSON.stringify(Data)
        // }).then((response)=>response.json())
        // .then((response)=>{
        //     if(response.statusCode==200){}
        // //Do something
        // })

      

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Ecolher Foto" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 150, height: 150 }} />}
    </View>
    );

}