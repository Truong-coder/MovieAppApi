// import {
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   FlatList,
//   TouchableOpacity,
//   Button,
// } from 'react-native';
// import {SearchBar} from 'react-native-elements';
// import React, {useState, useEffect} from 'react';
// import axios from 'axios';

// export default function HomeScreen({navigation}) {
//   const [data, setData] = useState([]); //an array which contains the fetched API data.
//   const [query, setQuery] = useState(''); //the string value in the search bar.
//   const [movieTitles, setMovieTitles] = useState([]); // an array which contains the names to output to the list.

//   useEffect(() => {
//     GetData();
//   }, []);

//   const options = {
//     method: 'GET',
//     url: 'https://imdb-top-100-movies.p.rapidapi.com/',
//     headers: {
//       'X-RapidAPI-Key': 'e007e975a9msha727262977f0662p166352jsna44c1f4b836a',
//       'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
//     },
//   };

//   const GetData = async () => {
//     axios
//       .request(options)
//       .then(function (response) {
//         setData(response.data);
//         setMovieTitles(response.data);
//       })
//       .catch(function (error) {
//         console.error(error);
//       });
//   };

//   const filterNames = movie => {
//     let search = query;
//     if (movie.title.startsWith(search, 0)) {
//       return formatNames(movie);
//     } else {
//       movieTitles.splice(movieTitles.indexOf(movie), 1);
//       return null;
//     }
//   };

//   const formatNames = movie => {
//     let movieTitle = movie.title.slice();
//     // heroName = heroName.replace(, ' ');
//     return movieTitle;
//   };
//   // This function will take the user's input and set the query state to be equal to that value
//   const updateQuery = input => {
//     setMovieTitles(data.slice());
//     setQuery(input);
//     console.log(query);
//   };

//   /**
//    * <Search Bar
//    * onChangeText = {updateQuery} calls a function whenever the input text value changes.
//    * For this app, we will create a function called updateQuery to update our query state to the text value in the search bar.
//    * value={query}
//    * the text value on the search bar. We will set it to our query state.
//    * placeholder="Type Here...":  the string the user sees on the search bar before typing on it.
//    * />
//    */

//   return (
//     <View style={styles.container}>
//       <SearchBar
//         onChangeText={updateQuery}
//         value={query}
//         placeholder="Search movies here..."
//       />
//       <Text styles={styles.text}> Movies </Text>

//       <FlatList
//         data={movieTitles}
//         keyExtractor={item => item.id}
//         extraData={query}
//         renderItem={({item}) => (
//           <View>
//             <TouchableOpacity
//               onPress={() =>
//                 navigation.navigate('Detail', {
//                   movieTitles: item.id,
//                   item: item,
//                 })
//               }>
//               <Text style={styles.flatList}>{filterNames(item)}</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </View>
//   );
// }
// HomeScreen.navigationOptions = {
//   title: 'Movies',
//   headerTitleStyle: {
//     alignItem: 'center',
//     justifyContent: 'center',
//   },
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: 500,
//     backgroundColor: 'white',
//   },
//   heading: {
//     marginBottom: 10,
//     marginLeft: 15,
//     fontSize: 25,
//   },
//   buttonStyle: {
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     padding: 10,
//     width: '100%',
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
//     width: 250,
//     marginTop: 10,
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
//     marginTop: 7,
//   },
//   show: {
//     flexDirection: 'column',
//   },
//   row: {
//     flex: 1,
//     flexDirection: 'row',
//     paddingVertical: 30,
//     paddingHorizontal: 10,
//     borderTopWidth: 1,
//     borderBottomWidth: 1,
//     borderColor: 'gray',
//     backgroundColor: 'white',
//   },
//   modalHeader: {
//     fontSize: 20,
//     color: 'black',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginLeft: 120,
//     marginRight: 100,
//     fontWeight: 'bold',
//     width: 200,
//     bottom: 0,
//   },
//   ModalContainer: {
//     height: 170,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderColor: 'white',
//     backgroundColor: 'white',
//   },
//   BottomBorder: {
//     borderBottomWidth: 1,
//     width: 355,
//   },
//   button: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     width: 100,
//   },
//   appButtonText: {
//     fontSize: 18,
//     color: 'black',
//     fontWeight: 'bold',
//     alignSelf: 'center',
//     textTransform: 'uppercase',
//   },
//   flatList: {
//     paddingLeft: 15,
//     marginTop: 15,
//     paddingBottom: 15,
//     fontSize: 20,
//     borderBottomColor: '#26a69a',
//     borderBottomWidth: 1,
//     color: 'black',
//   },
// });
