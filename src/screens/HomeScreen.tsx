import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';

import Modal from 'react-native-modal';
import React, {useState, useEffect, useRef, useMemo, useCallback} from 'react';
import axios from 'axios';
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import LogRocket from '@logrocket/react-native';

export default function HomeScreen({navigation}) {
  const [data, setData] = useState([]); //an array which contains the fetched API data.
  const [query, setQuery] = useState([]); //the string value in the search bar.
  const [movieTitles, setMovieTitles] = useState([]); // an array which contains the names to output to the list.
  const [movieYear, setMovieYear] = useState([]);
  const [movieDes, setMovieDes] = useState([]);
  const [movieImg, setMovieImg] = useState([]);
  const [movieId, setMovieId] = useState([]);
  // const [movieStar, setMovieStar] = useState([]);
  const [movieDir, setMovieDir] = useState([]);
  const [movieWriter, setMovieWriter] = useState([]);
  const [movieRating, setMovieRating] = useState([]);
  const [movieGenre, setMovieGenre] = useState([]);

  console.log('data: ', data);
  console.log('Titles: ', movieTitles);
  console.log('Query: ', query);
  // console.log('year: ', movieYear);
  // console.log('Des: ', movieDes);
  // console.log('img: ', movieImg);
  // console.log('Star: ', movieStar);
  // console.log('Director: ', movieDir);
  // Modal
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const handleModal = (): void => setIsModalVisible(() => !isModalVisible);

  // Bottom Sheet Modal

  // hooks
  const sheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['100%'], []);

  // callbacks
  const handleSheetChange = useCallback(index => {
    console.log('handleSheetChange', index);
  }, []);
  const handleSnapPress = useCallback(index => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  useEffect(() => {
    GetData();
    LogRocket.init('z8zwnf/movie-app');
    // findItem();
  }, []);

  // const options = {
  //   method: 'GET',
  //   url: 'https://imdb-top-100-movies.p.rapidapi.com/',
  //   headers: {
  //     'X-RapidAPI-Key': 'e007e975a9msha727262977f0662p166352jsna44c1f4b836a',
  //     'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  //   }
  // };
  const options = {
    method: 'GET',
    url: 'https://imdb-top-100-movies.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': '226eeda2camshd96bdc831632189p1145e8jsnbd92e64c88d2',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
    },
  };
  const GetData = async () => {
    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
        // setMovieTitles(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const filterNames = movie => {
    let search = query;
    if (movie.title.startsWith(search, 0)) {
      return formatNames(movie);
    } else {
      movieTitles.splice(movieTitles.indexOf(movie), 1);
    }
    // console.log('');
  };

  const formatNames = movie => {
    let movieTitle = movie.title.slice();
    return movieTitle;
  };
  // This function will take the user's input and set the query state to be equal to that value
  const updateQuery = input => {
    setMovieTitles(data.slice());
    setQuery(input);
    // console.log(query);
  };

  /**
   * <Search Bar
   * onChangeText = {updateQuery} calls a function whenever the input text value changes.
   * For this app, we will create a function called updateQuery to update our query state to the text value in the search bar.
   * value={query}
   * the text value on the search bar. We will set it to our query state.
   * placeholder="Type Here...":  the string the user sees on the search bar before typing on it.
   * />
   */
  // split the string
  // const findItem = movie => {
  //   const genre1 = movie.genre;
  //   const drama = genre1.filter(word => word == 'Drama');
  //   // console.log('horror:', horror);
  //   return drama;
  //   // console.log('splitgenre: ', drama);
  // };
  const getInfo = ({item}) => {
    // setMovieStar(Object.values(item.starring).join(', ')); // add comma
    setMovieTitles(item.title);
    setMovieYear(item.year);
    setMovieDes(item.description);
    setMovieImg(item.image);
    setMovieId(item.id);
    setMovieGenre(Object.values(item.genre).join(', '));
    setMovieRating(item.rating);
    // setMovieDir(Object.values(item.director).join(', '));
    // setMovieWriter(Object.values(item.writers).join(', '));
  };
  const MovieDetails = ({item}) => {
    navigation.navigate('Detail', {
      movieTitles: item.id,
      item: item,
    });
  };
  return (
    <View style={styles.container}>
      <SearchBar
        onChangeText={updateQuery}
        value={query}
        placeholder="Search movies here..."
      />
      <FlatList
        data={movieTitles}
        keyExtractor={item => item.id.toString()}
        extraData={query}
        renderItem={({item}) => {
          return (
            <View style={styles.container}>
              <View style={styles.row}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Detail', {
                      movieTitles: item.id,
                      item: item,
                    })
                  }>
                  <Image
                    style={styles.image}
                    source={{
                      uri: item.image,
                    }}
                  />
                </TouchableOpacity>

                <View style={styles.show}>
                  {/* <Text style={styles.title}>{item.title}</Text> */}
                  <Text style={styles.title}>{filterNames(item)}</Text>
                  <Text style={styles.desTitle}>{item.year} | {Object.values(item.genre).join(', ')}</Text>
                  {/* <Text style={styles.desTitle}></Text> */}
                  <Text style={styles.rating1}>{item.rating}</Text>
                </View>
              </View>
            </View>
          );
        }}
        // numColumns="3"
      />
      {/* <View style={styles.bottomSheetContainer}>
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          onChange={handleSheetChange}>
          <BottomSheetView style={{flexDirection: 'row'}}>
            {/* <Image
              style={styles.modalImage}
              source={{
                uri: movieImg,
              }}
            />

            <View style={styles.show}>
              <Text style={styles.modalTitle}> {movieTitles}</Text>
              <Text style={styles.modalDesTitle}>{movieYear} </Text>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={styles.modalDesTitle}>
                {movieDes}{' '}
              </Text>
              {/* <Text style={styles.modalDesTitle}>Director: {movieDir} </Text>
              {/* <TouchableOpacity onPress={MovieDetails}>
              <Text style={styles.desTitle}> Detail</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleClosePress} style={styles.icon}>
              <Icon name="x-circle" size={30} color="black" />
            </TouchableOpacity>
          </BottomSheetView>
        </BottomSheet>
      </View> */}

      {/* <Modal
        isVisible={isModalVisible}
        transparent={true}
        animationIn="slideInUp"
        animationOut="slideOutDown">
        <View style={styles.ModalContainer}>
          <Image
            style={styles.image}
            source={{
              uri: movieImg,
            }}
          />

          <View style={styles.show}>
            <Text style={styles.modalTitle}> {movieTitles}</Text>
            <Text style={styles.modalDesTitle}>{movieYear} </Text>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={styles.modalDesTitle}>
              Description: {movieDes}{' '}
            </Text>
            <Text style={styles.modalDesTitle}>Director: {movieDir} </Text>
          </View>
          <TouchableOpacity onPress={handleModal} style={styles.icon}>
            <Icon name="x-circle" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </Modal> */}
    </View>
  );
}
HomeScreen.navigationOptions = {
  title: 'Movies',
  headerTitleStyle: {
    alignItem: 'center',
    justifyContent: 'center',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 500,
    backgroundColor: 'white',
    // justifyContent: 'space-between',
  },
  bottomSheetContainer: {
    paddingTop: 200,
  },

  heading: {
    marginBottom: 0,
    marginLeft: 15,
    fontSize: 25,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
  },
  listTitle: {
    fontSize: 18,
    color: 'black',
    width: 250,
    Top: 0,
  },
  title: {
    fontSize: 18,
    color: 'black',
    width: 250,
    Top: 0,
    fontWeight: 'bold',
  },
  desTitle: {
    fontSize: 18,
    color: 'black',
    width: 250,
    marginTop: 10,
  },
  rating1: {
    fontSize: 18,
    color: 'white',
    marginTop: 10,
    borderRadius: 10,
    backgroundColor:'green',
    width: 35,
  },
  modalTitle: {
    fontSize: 16,
    color: 'black',
    width: 250,
    Top: 0,
    fontWeight: 'bold',
  },
  modalDesTitle: {
    fontSize: 16,
    color: 'black',
    width: 150,
    marginTop: 10,
  },
  icon: {
    marginLeft: 10,
    // justifyContent: 'flex-end',
  },
  text: {
    fontSize: 18,
    color: 'black',
    marginLeft: 10,
  },
  text2: {
    fontSize: 18,
    color: 'white',
    marginLeft: 10,
  },
  text3: {
    fontSize: 28,
    color: 'black',
    marginLeft: 10,
  },
  show: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 0,
  },
  image: {
    borderColor: 'black',
    borderWidth: 1,
    height: 150,
    width: 100,
    marginTop: 7,
    marginLeft: 10,
    borderRadius: 10,
  },
  modalImage: {
    borderColor: 'black',
    borderWidth: 1,
    height: 130,
    width: 80,
    marginTop: 7,
    // justifyContent: 'space-between',
    marginLeft: 10,
  },
  BottomBorder: {
    borderBottomWidth: 1,
    width: 355,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 100,
  },
  appButtonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  flatList: {
    paddingLeft: 15,
    marginTop: 5,
    paddingBottom: 5,
    fontSize: 20,
    color: 'black',
  },
  ModalContainer: {
    marginTop: 500,
    marginRight: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    width: 350,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
