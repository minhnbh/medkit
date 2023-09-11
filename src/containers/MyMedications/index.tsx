import { Center, HStack, Pressable, Text, View } from 'native-base';
import React from 'react';
import { IMenu, currentMedications } from 'containers/Home/constants';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { Icon } from 'components';
import { COLORS } from 'constants/colors';

const MyMedications = () => {
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
				key={e.id}
				backgroundColor={COLORS.white}
				borderRadius={16}
				flex={1}
				h={100}
				alignItems="center"
				paddingY="12px"
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
		<View paddingX="24px">
			<HStack space="8px" marginTop="16px">
				{currentMedications.map(renderMenuItem)}
			</HStack>
			<HStack space="8px" marginTop="16px">
				<Pressable
					borderColor="rgb(217, 219, 224)"
					borderWidth={1}
					borderRadius={16}
					flex={1}
					h={100}
					alignItems="center"
					justifyContent="center"
					paddingY="12px"
				>
					<Center>
						<Icon name="plus" size={18} />
					</Center>
				</Pressable>
				<View flex={1} />
				<View flex={1} />
			</HStack>
		</View>
	);
};

export default MyMedications;
