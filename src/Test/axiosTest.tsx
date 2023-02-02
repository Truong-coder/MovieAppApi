
// // // React Native Axios – To Make HTTP API call in React Native


// import React, {useState, useEffect} from 'react';
// //import React in our code.
// import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
// //import all the components we are going to use.
// import axios from 'axios';
// import { TextInput } from 'react-native-paper';

// const AxiosTest = () => {
//   useEffect(() => {
//     getData();
//   }, []);
//   const [data, setData] = useState([]);
//   const [masterData, setMasterData] = useState([]);
//   const [search, setsearch] = useState('');

//   console.log('data: ', data);
//     const ItemView = ({item}) => {
//     return (
//       <View style={styles.row}>
//         <Text style={styles.title}>id: {item.id}</Text>
//         <Text style={styles.title}>title: {item.title}</Text>
//         <Text style={styles.desTitle}>body: {item.body}</Text>
//       </View>
//     );
//   };

//   const searchFilter = (text) => {
//     if(text) {
//       const newData = masterData.filter((item) => {
//         const itemData = item.title ? item.title.toUpperCase()
//           : ''. toUpperCase();
//         const textData = text.toUpperCase();
//         return itemData.indexOf(textData) > -1;
//       });
//       setData(newData);
//       setsearch(text); 
//     } else {
//       setData(masterData);
//       setsearch(text);
//     }
//   }
//   const ItemSeparatorView = () => {
//     return (
//       <View style={{height: 0.5, width: '100%', backgroundColor: 'black'}} />
//     );
//   };
//   const getData = () => {
//     axios
//       .get('https://jsonplaceholder.typicode.com/posts')
//       .then(function (response) {
//         setData(response.data);
//         setMasterData(response.data);
//       })
//       .catch(function (error) {
//         // handle error
//         alert(error.message);
//       })
//       .finally(function () {
//         // always executed
//         alert('Finally called');
//       });
//   };
//   // console.log("Data: ", data)
//   return (
//     <View style={styles.container}>
//       <TextInput
//         style = {styles.textInputStyle}
//         value = {search}
//         placeholder = "search Here"
//         underlineColorAndroid= "transparent"
//         onChangeText={(text) => searchFilter(text)}
//       />
//       <FlatList
//         data={data}
//         keyExtractor={(item, index) => index.toString()}
//         ItemSeparatorComponent={ItemSeparatorView}
//         renderItem={ItemView}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: 'center',
//     width: 500,
//     backgroundColor: 'white',
//   },
//   buttonStyle: {
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     padding: 10,
//     width: '100%',
//     marginTop: 16,
//   },
//   title: {
//     fontSize: 18,
//     color: 'black',
//     width: 250,
//     Top: 0,
//   },
//   desTitle: {
//     fontSize: 18,
//     color: 'black',
//     width: 300,
//     marginTop: 40,
//   },
//   icon: {
//     fontSize: 24,
//   },
//   text: {
//     fontSize: 18,
//     color: 'black',
//     marginLeft: 10,
//   },
//   show: {
//     flexDirection: 'column',
//   },
//   image: {
//     borderColor: 'black',
//     borderWidth: 1,
//     height: 150,
//     width: 100,
//     // tintColor: 'white',
//   },
//   show: {
//     flexDirection: 'column',
//   },
//   row: {
//     flex: 1,
//     flexDirection: 'column',
//     paddingVertical: 30,
//     paddingHorizontal: 10,
//     borderTopWidth: 1,
//     borderBottomWidth: 1,
//     borderColor: 'gray',
//     backgroundColor: 'white',
//   },
//   textInputStyle:{
//     height: 40,
//     borderWidth: 1,
//     paddingLeft: 10,
//     margin: 15,
//     width: 370,
//     borderColor: 'black',
//     backgroundColor: 'white',
//   }

// });

// export default AxiosTest;
