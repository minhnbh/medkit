import Section from 'components/Section';
import { HStack, Pressable, Text, View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import {
	IMenu,
	appointments,
	currentMedications,
	findYourDoctor,
} from './constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { ROUTES } from 'navigators/routes';
import SearchBox from 'components/SearchBox';
import { chunk } from 'lodash';
import { COLORS } from 'constants/colors';

const Home = () => {
	const navigation = useNavigation();

	const renderMenuItem = (e: IMenu) => {
		const onClick = () => {
			if (!e.route) return;
			navigation.dispatch(
				CommonActions.navigate({
					name: e.route,
					params: e,
				}),
			);
		};
		return (
			<Pressable
				h={100}
				style={styles.itemContainer}
				key={e.id}
				onPress={onClick}
			>
				<Icon name={e.icon} size={40} color={COLORS.iconColor} />
				<Text fontSize={12} marginTop="auto" color="rgb(115, 120, 133)">
					{e.label}
				</Text>
			</Pressable>
		);
	};

	return (
		<View>
			<SearchBox
				placeholder="Search doctors, appointments,..."
				marginTop={6}
				marginX="24px"
			/>
			<Section title="Upcoming appointments" viewAllRoute={ROUTES.myAppointments}>
				{appointments.map(e => (
					<View
						key={e.id}
						flexDirection="row"
						alignItems="center"
						backgroundColor={COLORS.white}
						padding="16px"
						borderRadius="16px"
						marginTop="16px"
					>
						<Icon size={16} name={e.icon} />
						<Text marginLeft={4} fontSize={14} fontWeight={600}>
							{e.label}
						</Text>
						<View
							marginLeft="auto"
							paddingX="16px"
							paddingY="8px"
							backgroundColor="rgb(178, 201, 251)"
							borderRadius="32px"
						>
							<Text fontSize={12} fontWeight={600}>
								{e.date}
							</Text>
						</View>
					</View>
				))}
			</Section>
			<Section title="Current medications" viewAllRoute={ROUTES.myMedications}>
				<HStack space="8px" marginTop="16px">
					{currentMedications.map(renderMenuItem)}
				</HStack>
			</Section>
			<Section title="Find your doctor">
				{chunk(findYourDoctor, 3).map((e, i) => (
					<HStack key={`findYourDoctor-${i}`} space="8px" marginTop="16px">
						{e.slice(0, 3).map(renderMenuItem)}
					</HStack>
				))}
			</Section>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	itemContainer: {
		backgroundColor: 'rgb(250, 250, 250)',
		borderRadius: 16,
		flex: 1,
		alignItems: 'center',
		paddingVertical: 12,
	},
});
