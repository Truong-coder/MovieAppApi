import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import MovieDetail from './src/screens/MovieDetail';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: MovieDetail,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Movies',
      headerTitleAlign: 'center',
    },
  },
);

const App = createAppContainer(navigator);

export default () => {
  return <App />;
};

// import React, { useCallback, useRef, useMemo } from "react";
// import { StyleSheet, View, Text, Button } from "react-native";
// import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

// const App = () => {
//   // hooks
//   const sheetRef = useRef<BottomSheet>(null);

//   // variables
//   const snapPoints = useMemo(() => ["25%"], []);

//   // callbacks
//   const handleSheetChange = useCallback((index) => {
//     console.log("handleSheetChange", index);
//   }, []);
//   const handleSnapPress = useCallback((index) => {
//     sheetRef.current?.snapToIndex(index);
//   }, []);
//   const handleClosePress = useCallback(() => {
//     sheetRef.current?.close();
//   }, []);

//   // render
//   return (
//     <View style={styles.container}>
//       <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
      
//       <BottomSheet
//         ref={sheetRef}
//         snapPoints={snapPoints}
//         onChange={handleSheetChange}
//       >
//         <BottomSheetView>
//           <Text>Awesome 🔥</Text>
//           <Button title="Close" onPress={() => handleClosePress()} />
//         </BottomSheetView>
//       </BottomSheet>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 200,
//   },
// });

// export default App;