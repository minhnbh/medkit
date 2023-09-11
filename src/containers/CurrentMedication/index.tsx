import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Center, HStack, Switch, Text, View } from 'native-base';
import { IMenu } from 'containers/Home/constants';
import { Icon } from 'components';
import { COLORS } from 'constants/colors';
import Button from 'components/Button';

const CurrentMedication = () => {
	const { params: medication } = useRoute<RouteProp<{ params: IMenu }>>();

	return (
		<View flex={1}>
			<Center paddingY={8}>
				<Icon name={medication.icon} size={100} color={COLORS.iconColor} />
				<Text
					marginTop="24px"
					fontSize={24}
					fontWeight={500}
					color={COLORS.mainColor}
				>
					{medication.label}
				</Text>
			</Center>
			<View paddingX="24px">
				<View
					backgroundColor={COLORS.white}
					padding="18px"
					borderRadius="16px"
					flexDirection="row"
					marginTop="16px"
					position="relative"
				>
					<View width="40px">
						<Icon name="bell" color={COLORS.mainColor} size={18} solid />
					</View>
					<Text color={COLORS.mainColor}>Everyday at 9:00</Text>
					<Center
						position="absolute"
						right="24px"
						top="14px"
						bottom="14px"
						borderWidth={1}
						borderColor={COLORS.mainColor}
						borderRadius="full"
					>
						<Switch
							onThumbColor={COLORS.mainColor}
							offThumbColor={COLORS.mainColor}
							offTrackColor={COLORS.white}
							onTrackColor={COLORS.mainColor}
							borderWidth={1}
						/>
					</Center>
				</View>
				<View
					backgroundColor={COLORS.white}
					padding="18px"
					borderRadius="16px"
					flexDirection="row"
					marginTop="16px"
				>
					<View width="40px">
						<Icon name="circle" color="rgb(238, 87, 74)" size={18} solid />
					</View>
					<Text color={COLORS.mainColor}>Before meal</Text>
				</View>
				<View
					backgroundColor={COLORS.white}
					padding="18px"
					borderRadius="16px"
					flexDirection="row"
					marginTop="16px"
					position="relative"
				>
					<View width="40px">
						<Icon
							name="calendar-times"
							color={COLORS.mainColor}
							size={18}
							solid
						/>
					</View>
					<Text color={COLORS.mainColor} fontWeight={600}>
						Finish course
					</Text>
					<Center
						position="absolute"
						right="8px"
						top="8px"
						bottom="8px"
						backgroundColor="rgb(217, 219, 224)"
						borderRadius="12px"
						paddingX="16px"
					>
						<Text fontWeight={600}>Aug 23</Text>
					</Center>
				</View>
			</View>
			<View marginTop="auto" padding="24px">
				<Button>Request refill</Button>
			</View>
		</View>
	);
};

export default CurrentMedication;
