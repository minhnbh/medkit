import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
	DefaultTheme,
	LinkingOptions,
	NavigationContainer,
	PathConfigMap,
} from '@react-navigation/native';
import { ROUTES, ROUTES_COMPONENT_MAPPING } from './routes';

const RootStack = createNativeStackNavigator();

export function Root() {
	return (
		<NavigationContainer>
			<RootStack.Navigator initialRouteName={ROUTES.welcome}>
				{Object.keys(ROUTES_COMPONENT_MAPPING).map(key => (
					<RootStack.Screen
						key={key}
						name={key}
						component={ROUTES_COMPONENT_MAPPING[key]}
					/>
				))}
			</RootStack.Navigator>
		</NavigationContainer>
	);
}
