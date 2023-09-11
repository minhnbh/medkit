import { CommonActions, useNavigation } from '@react-navigation/native';
import { Icon } from 'components';
import Button from 'components/Button';
import { COLORS } from 'constants/colors';
import { IAppointment, appointments } from 'containers/Home/constants';
import { FlatList, HStack, Pressable, Text, View } from 'native-base';
import { ROUTES } from 'navigators/routes';
import React from 'react';
import { ListRenderItem } from 'react-native';

const MyAppointments = () => {
	const navigation = useNavigation();

	const onClick = (item: IAppointment) => {
		if (!item.route) return;
		navigation.dispatch(
			CommonActions.navigate({
				name: item.route,
			}),
		);
	};

	const renderItem: ListRenderItem<IAppointment> = ({ item }) => {
		return (
			<Pressable
				onPress={_ => onClick(item)}
				padding="24px"
				backgroundColor={COLORS.white}
				borderRadius="16px"
				marginTop="16px"
				flexDirection="row"
			>
				<Icon name={item.icon} size={18} color={COLORS.mainColor} />
				<View marginLeft="16px">
					<Text fontWeight={600} color={COLORS.mainColor}>
						{item.label}
					</Text>
					<Text color="rgb(115, 120, 133)">{item.doctor}</Text>
					<HStack alignItems="center" marginTop="8px">
						<Icon name={item.typeIcon} solid color="rgb(115, 120, 133)" />
						<Text marginLeft="8px" color="rgb(115, 120, 133)">
							{item.type}
						</Text>
					</HStack>
				</View>
				<View marginLeft="auto">
					<View
						paddingX="16px"
						paddingY="8px"
						backgroundColor="rgb(178, 201, 251)"
						borderRadius="32px"
					>
						<Text fontSize={12} fontWeight={600}>
							{item.date}
						</Text>
					</View>
				</View>
			</Pressable>
		);
	};

	const onBookAppointment = () => {
		navigation.dispatch(
			CommonActions.navigate({
				name: ROUTES.bookAppointment,
			}),
		);
	};

	return (
		<View flex={1} paddingX="24px">
			<FlatList data={appointments} renderItem={renderItem} />
			<Button marginBottom="24px" onPress={onBookAppointment}>
				Book new appointment
			</Button>
		</View>
	);
};

export default MyAppointments;
