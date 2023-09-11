import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { ROUTES, ROUTES_COMPONENT_MAPPING } from './routes';
import HomeHeader from 'components/HomeHeader';
import { COLORS } from 'constants/colors';
import AppHeader from 'components/AppHeader';

const RootStack = createNativeStackNavigator();

const RouteHeader = {
	[ROUTES.welcome]: false,
	[ROUTES.home]: HomeHeader,
	[ROUTES.myMedications]: 'My medications',
	[ROUTES.myAppointments]: 'Your appointments',
	[ROUTES.bookAppointment]: 'Book your appointment',
	[ROUTES.currentMedication]: '',
	[ROUTES.doctorDetail]: '',
};

export function Root() {
	return (
		<NavigationContainer>
			<RootStack.Navigator
				initialRouteName={ROUTES.welcome}
				screenOptions={{
					contentStyle: { backgroundColor: COLORS.backgroundColor },
					headerStyle: { backgroundColor: COLORS.backgroundColor },
				}}
			>
				{Object.keys(ROUTES_COMPONENT_MAPPING).map(key => {
					const HeaderComp = RouteHeader[key];
					return (
						<RootStack.Screen
							key={key}
							name={key}
							component={ROUTES_COMPONENT_MAPPING[key]}
							options={{
								headerShown: HeaderComp !== false,
								header: navigationProps =>
									typeof HeaderComp === 'function' ? (
										<HeaderComp />
									) : typeof HeaderComp === 'string' ? (
										<AppHeader
											{...navigationProps}
											title={HeaderComp.toString()}
											hiddenAvatar={[
												ROUTES.currentMedication,
												ROUTES.doctorDetail,
											].includes(navigationProps.route.name)}
										/>
									) : undefined,
							}}
						/>
					);
				})}
			</RootStack.Navigator>
		</NavigationContainer>
	);
}
