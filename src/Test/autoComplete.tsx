// import {StyleSheet, Text, View, FlatList} from 'react-native';
// import {SearchBar} from 'react-native-elements';
// import React, {useState, useEffect} from 'react';

// export default function App() {
//   const [data, setData] = useState([]); //an array which contains the fetched API data.
//   const [query, setQuery] = useState(''); //the string value in the search bar.
//   const [heroes, setHeroes] = useState([]); // an array which contains the names to output to the list.
// console.log('data: ', data);
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'e007e975a9msha727262977f0662p166352jsna44c1f4b836a',
//       'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
//     },
//   };
//   const fetchData = async () => {
//     const res = await fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
//     const json = await res.json();  
//     setData(json);
//     setHeroes(json.slice());
//   };

//   const filterNames = hero => {
//     // console.log(heroes.length);
//     let search = query.toLowerCase().replace(/ /g, '_');
//     if (hero.name.startsWith(search, 14)) {
//       return formatNames(hero);
//     } else {
//       heroes.splice(heroes.indexOf(hero), 1);
//       return null;
//     }
//   };

//   const formatNames = hero => {
//     let heroName = hero.name.charAt(14).toUpperCase() + hero.name.slice(15);
//     heroName = heroName.replace(/_/g, ' ');
//     return heroName;
//   };
//   // This function will take the user's input and set the query state to be equal to that value
//   const updateQuery = input => {
//     setHeroes(data.slice());
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
//       <Text style={styles.heading}>Search Hero</Text>
//       <SearchBar
//         onChangeText={updateQuery}
//         value={query}
//         placeholder="Type Here..."
//       />
//       <FlatList
//         data={heroes}
//         keyExtractor={i => i.id.toString()}
//         extraData={query}
//         renderItem={({item}) => (
//           <Text style={styles.flatList}>{filterNames(item)}</Text>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 45,
//   },
//   heading: {
//     marginTop: 50,
//     marginBottom: 10,
//     marginLeft: 15,
//     fontSize: 25,
//   },
//   flatList: {
//     paddingLeft: 15,
//     marginTop: 15,
//     paddingBottom: 15,
//     fontSize: 20,
//     borderBottomColor: '#26a69a',
//     borderBottomWidth: 1,
//   },
// });
