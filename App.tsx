/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { COLORS } from 'constants/colors';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { Root } from 'navigators/RootStack';
import React from 'react';

function App(): JSX.Element {
	const theme = extendTheme({
		colors: {
			primary: COLORS.mainColor,
		},
	});
	return (
		<NativeBaseProvider theme={theme}>
			<Root />
		</NativeBaseProvider>
	);
}

export default App;
