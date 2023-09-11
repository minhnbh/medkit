import { CommonActions, useNavigation } from '@react-navigation/native';
import { Icon } from 'components';
import { COLORS } from 'constants/colors';
import {
	Center,
	FormControl,
	HStack,
	Pressable,
	ScrollView,
	Text,
	View,
} from 'native-base';
import { ROUTES } from 'navigators/routes';
import React from 'react';
import { appointmentTimes, appointmentTypes } from './constants';
import { chunk } from 'lodash';
import Button from 'components/Button';

const BookAppointment = () => {
	const navigation = useNavigation();
	const goScreen = (route: string) => {
		navigation.dispatch(
			CommonActions.navigate({
				name: route,
			}),
		);
	};

	return (
		<View paddingX="24px" flex={1}>
			<FormControl marginTop="16px">
				<FormControl.Label>Field</FormControl.Label>
				<Pressable
					marginTop="8px"
					backgroundColor={COLORS.white}
					borderRadius="12px"
					height="48px"
					paddingX="16px"
					justifyContent="center"
				>
					<HStack alignItems="center">
						<Text color="rgb(115, 120, 133)">Dentist</Text>
						<View marginLeft="auto">
							<Icon name="angle-down" color="rgb(115, 120, 133)" size={14} />
						</View>
					</HStack>
				</Pressable>
			</FormControl>
			<FormControl marginTop="16px">
				<FormControl.Label>Doctor</FormControl.Label>
				<Pressable
					marginTop="8px"
					backgroundColor={COLORS.white}
					borderRadius="12px"
					height="48px"
					paddingX="16px"
					justifyContent="center"
					onPress={() => goScreen(ROUTES.doctorList)}
				>
					<HStack alignItems="center">
						<Text color="rgb(115, 120, 133)">Dr. Eva</Text>
						<View marginLeft="auto">
							<Icon name="angle-down" color="rgb(115, 120, 133)" size={14} />
						</View>
					</HStack>
				</Pressable>
			</FormControl>
			<FormControl marginTop="16px">
				<FormControl.Label>Appointment type</FormControl.Label>
				<ScrollView horizontal>
					{appointmentTypes.map(e => (
						<Pressable
							marginTop="8px"
							marginRight="8px"
							paddingY="12px"
							paddingX="32px"
							borderRadius="12px"
							backgroundColor={
								e === 'Chat' ? 'rgb(217, 219, 224)' : COLORS.white
							}
						>
							<Text fontSize="14px" fontWeight={e === 'Chat' ? 600 : 'normal'}>
								{e}
							</Text>
						</Pressable>
					))}
				</ScrollView>
			</FormControl>
			<FormControl marginTop="16px">
				<FormControl.Label>Select date</FormControl.Label>
				<ScrollView horizontal>
					<Pressable
						alignItems="center"
						marginTop="8px"
						marginRight="8px"
						paddingY="16px"
						paddingX="16px"
						borderRadius="12px"
						backgroundColor="rgb(217, 219, 224)"
					>
						<Text fontSize="14px" color={COLORS.mainColor}>
							Fri
						</Text>
						<Text fontSize="14px" fontWeight={600} color={COLORS.mainColor}>
							Aug 12
						</Text>
					</Pressable>
					<Pressable
						alignItems="center"
						marginTop="8px"
						marginRight="8px"
						paddingY="16px"
						paddingX="16px"
						borderRadius="12px"
						backgroundColor={COLORS.white}
					>
						<Text fontSize="14px" color="rgb(115, 120, 133)">
							Sat
						</Text>
						<Text fontSize="14px" fontWeight={600} color="rgb(115, 120, 133)">
							Aug 13
						</Text>
					</Pressable>
					<Pressable
						alignItems="center"
						marginTop="8px"
						marginRight="8px"
						paddingY="16px"
						paddingX="16px"
						borderRadius="12px"
						backgroundColor={COLORS.white}
					>
						<Text fontSize="14px" color="rgb(115, 120, 133)">
							Sun
						</Text>
						<Text fontSize="14px" fontWeight={600} color="rgb(115, 120, 133)">
							Aug 14
						</Text>
					</Pressable>
					<Pressable
						alignItems="center"
						marginTop="8px"
						marginRight="8px"
						paddingY="16px"
						paddingX="16px"
						borderRadius="12px"
						backgroundColor={COLORS.white}
					>
						<Text fontSize="14px" color="rgb(115, 120, 133)">
							Mon
						</Text>
						<Text fontSize="14px" fontWeight={600} color="rgb(115, 120, 133)">
							Aug 15
						</Text>
					</Pressable>
					<Center>
						<Pressable paddingX="8px">
							<Icon name="angle-right" size={20} color={COLORS.mainColor} />
						</Pressable>
					</Center>
				</ScrollView>
			</FormControl>
			<FormControl marginTop="16px">
				<FormControl.Label>Appointment type</FormControl.Label>
				{chunk(appointmentTimes, 4).map((row, i) => (
					<HStack key={`row-${i}`}>
						{row.map(e => (
							<Pressable
								marginTop="8px"
								marginRight="8px"
								paddingY="12px"
								flex={1}
								alignItems="center"
								borderRadius="12px"
								backgroundColor={
									e === '10:00' ? 'rgb(217, 219, 224)' : COLORS.white
								}
							>
								<Text
									fontSize="14px"
									fontWeight={e === '10:00' ? 600 : 'normal'}
								>
									{e}
								</Text>
							</Pressable>
						))}
					</HStack>
				))}
			</FormControl>
			<View paddingBottom="24px" marginTop="auto">
				<Button onPress={navigation.goBack}>Book now</Button>
			</View>
		</View>
	);
};

export default BookAppointment;
