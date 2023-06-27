// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { Camera, CameraType } from 'expo-camera';
// import { useState, useRef, useEffect } from 'react';
// import { Button, TouchableOpacity} from 'react-native';
// import { shareAsync } from 'expo-sharing';
// import * as MediaLibrary from 'expo-media-library';


// export default function App() {
//   let camerRef = useRef();
//   const [hasCameraPermission, setHasCameraPermission] = useState();
//   const [hasMediaLibraryPermission, serHasMediaLibraryPermission] = useState();
//   const [photo, setPhoto] = useState();

//   useEffect(()  => {
//     (async () => {
//       const cameraPermission = await Camera.requestCameraPermissionsAsync();
//       const mediaLibraryPermission = await MediaLibrary.requestCameraPermissionAsync();
//       setHasCameraPermission(cameraPermision.status === "granted");
//       setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");

//     })();
//   }, []);


//   if (hasCameraPermission === undefined) {
//     return <Text>Requesting permissions...</Text>
//   } else if (!hasCameraPermission) {
//     return <Text>Permissions for camera not grated. Please change this in settings</Text>
//   }

//   let takepic = async () => {
//     let options = {
//       quality: 1,
//       base64: true,
//       exif: false

//     };

//     let newPhoto = await cameraRef.current.takePictureAsync(options);
//     setPhoto(newPhoto);
//   };

//   if (photo) {
//     let sharePic = () => {
//       shareAsync(photo.uri).then(() => {
//         setPhoto(undefined);
//       });
//     };

//     let savePhoto = () => {
//       MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
//         setPhoto(undefined);
//       })
//     };

//     return (
//       <SafeAreaView style  = {styles.container}>
//         <Image style = {styles.preview} source={{uri: "data:image/jpg;base64," + photo.base64}} />
//         <Button title="Share" onPress={sharePic} />
//         {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} /> : undefined}
//         <Button title="Discard" onPress={() => setPhoto(undefined)} />
//       </SafeAreaView>
//     );
//   }

//   return (

//       <Camera style={styles.container} type={type}>
//         <View style={styles.buttonContainer}>
//           <Button title="Take Pic" onPress={takepic} />
//         </View>
//         <StatusBar style="auto" />
//       </Camera>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonContainer: {
//     backgroundColor: '#fff',
//     alignItems: 'center',
//   },
//   preview: {
//     alignItems: 'stretch',
//     flex: 1
//   }
// });


import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { MaterialIcons } from '@expo/vector-icons';
import Button from './src/components/Button';
// import Imagepicker from './src/components/Imagepicker';

export default function App() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const savePicture = async () => {
    if (image) {
      try {
        const asset = await MediaLibrary.createAssetAsync(image);
        alert('Picture saved! 🎉');
        let body = new FormData();
        let split = image.split('/');
        body.append('photo', { uri: image, name: split[split.length - 1], filename: split[split.length - 1], type: 'image/jpg' });
        body.append('Content-Type', 'image/jpg');

        fetch("http://110.224.86.245:5000/image", {
          method: 'POST', headers: {
            "Content-Type": "multipart/form-data",
            "otherHeader": "foo",
          }, "body": body
        })
          // .then((res) => checkStatus(res))
          .then((res) => res.json())
          .then((res) => { console.log("response" + JSON.stringify(res)); })
          .catch((e) => console.log("e"+e))
          .done()
        setImage(null);
        console.log('saved successfully');
      } catch (error) {
        console.log("error while fetching ",error);
      }
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const ref = useRef(null);



  useEffect(() => {
    setTimeout(() => {
      // ref.current.onPress();
    }, 5000); //miliseconds
  }, []);

  // let body = new FormData();
  // body.append('photo', {uri: imagePath,name: 'photo.png',filename :'imageName.png',type: 'image/png'});
  // body.append('Content-Type', 'image/png');

  // fetch(Url,{ method: 'POST',headers:{  
  //     "Content-Type": "multipart/form-data",
  //     "otherHeader": "foo",
  //     } , body :body} )
  //   .then((res) => checkStatus(res))
  //   .then((res) => res.json())
  //   .then((res) => { console.log("response" +JSON.stringify(res)); })
  //   .catch((e) => console.log(e))
  //   .done()
  return (
    <View style={styles.container}>
      {!image ? (
        <Camera
          style={styles.camera}
          type={type}
          ref={cameraRef}
          flashMode={flash}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 30,
            }}
          >
            <Button
              title=""
              icon="retweet"
              onPress={() => {
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back
                );
              }}
            />
            <Button
              onPress={() =>
                setFlash(
                  flash === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.on
                    : Camera.Constants.FlashMode.off
                )
              }
              icon="flash"
              color={flash === Camera.Constants.FlashMode.off ? 'gray' : '#fff'}
            />
          </View>
        </Camera>
      ) : (
        <Image source={{ uri: image }} style={styles.camera} />
      )}

      <View style={styles.controls}>
        {image ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 50,
            }}
          >
            <Button
              title="Re-take"
              onPress={() => setImage(null)}
              icon="retweet"
            />
            <Button title="Save" onPress={savePicture} icon="check" />
          </View>
        ) : (
          <Button title="Take a picture" onPress={takePicture} icon="camera" />
        )}
      </View>
    </View>
  );
  // return <Imagepicker/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000',
    padding: 8,
  },
  controls: {
    flex: 0.5,
  },
  button: {
    height: 40,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#E9730F',
    marginLeft: 10,
  },
  camera: {
    flex: 5,
    borderRadius: 20,
  },
  topControls: {
    flex: 1,
  },
});