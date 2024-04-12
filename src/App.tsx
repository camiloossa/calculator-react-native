import React from 'react';
import {
  StatusBar,
  Text,
  View,
} from 'react-native';
import { CalculatorScreen } from './presentation/screens';
import { styles } from './config/theme/appTheme';


function App(): React.JSX.Element {
 

  return (
    <View style={ styles.background }>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'black'}
      />
      <CalculatorScreen />
    </View>
  );
}



export default App;
