import React, {useState, useCallback} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const MovieDetail = ({navigation}) => {
  const item = navigation.getParam('item');
  // console.log("title: ", item.title)
  const movieGenre = Object.values(item.genre).join(', '); // add comma
  const movieDirector = Object.values(item.director).join(', '); // add comma
  const movieWriters = Object.values(item.writers).join(', '); // add comma
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback(e => {
    setLengthMore(e.nativeEvent.lines.length >= 4); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
  }, []);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
          // source={require('this.item.url')}
        />
        <View style={styles.show}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desTitle}>Rating: {item.rating}</Text>
          <Text style={styles.desTitle}>{item.year} | {movieGenre} </Text>
          {/* <Text style={styles.desTitle}>Description: {item.description} </Text> */}
          <Text
            onTextLayout={onTextLayout}
            numberOfLines={textShown ? undefined : 4}
            style={styles.desTitle}>
            {item.description}
          </Text>

          {lengthMore ? (
            <Text
              onPress={toggleNumberOfLines}
              style={{lineHeight: 21, marginTop: 10, color:'red', marginLeft: 260, paddingVertical: 0}}>
              {textShown ? 'Read less' : 'Read more'}
            </Text>
          ) : null}
          <Text style={styles.desTitle}>Director: {movieDirector} </Text>
          <Text style={styles.desTitle}>Writers: {movieWriters} </Text>
          {/* <Text style={styles.desTitle}>Genre: {str} </Text> */}
        </View>
      </View>
    </ScrollView>
  );
};

MovieDetail.navigationOptions = {
  title: 'Movie Details',
  headerTitleStyle: {
    alignItem: 'center',
    justifyContent: 'center',
  },
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    width: 500,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 20,
    width: 250,
    Top: 0,
    width: 350,
  },
  desTitle: {
    fontSize: 18,
    color: 'black',
    marginLeft: 20,
    width: 250,
    marginTop: 10,
    width: 350,
  },
  icon: {
    fontSize: 24,
  },
  image: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    height: 300,
    width: 200,
    marginTop: 0,
    marginRight: 100,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  show: {
    flexDirection: 'column',
    width: 350,
  },
  row: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 30,
    paddingHorizontal: 10,
    borderColor: 'gray',
    backgroundColor: 'white',
  },
});

export default MovieDetail;
