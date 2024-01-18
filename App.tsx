/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button';
import {EyeOffIcon} from './src/assets/icons/EyeOffIcon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge">Teste</Text>

          <Button title="Entrar" marginBottom="s12" />

          <Button title="Loading" loading />

          <EyeOffIcon />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
