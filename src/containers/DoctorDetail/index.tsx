import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Icon } from 'components';
import Button from 'components/Button';
import { COLORS } from 'constants/colors';
import { IDoctor } from 'containers/DoctorList/constants';
import { Center, HStack, Image, Text, View } from 'native-base';
import React from 'react';

const DoctorDetail = () => {
	const navigation = useNavigation();
	const { params } = useRoute<RouteProp<{ params: IDoctor }>>();

	const onSelect = () => {
		navigation.goBack();
		navigation.goBack();
	};

	return (
		<View flex={1}>
			<Center>
				<Image
					source={params.avatar}
					marginY="24px"
					width="100px"
					height="100px"
					resizeMode="cover"
					alt="avatar"
					borderRadius="32px"
				/>
				<Text fontSize="24px" fontWeight={500}>
					{params.name}
				</Text>
				<Text fontSize="14px">{params.description}</Text>
				<HStack marginTop="16px" space={4}>
					<HStack
						borderRadius="full"
						alignItems="center"
						paddingY="8px"
						paddingX="16px"
						background={COLORS.white}
					>
						<Icon name="star" color={COLORS.mainColor} size={14} />
						<Text
							marginLeft="4px"
							fontSize="14px"
							color={COLORS.mainColor}
							fontWeight={600}
						>
							4.7/5
						</Text>
					</HStack>
					<HStack
						borderRadius="full"
						alignItems="center"
						paddingY="8px"
						paddingX="16px"
						background={COLORS.white}
					>
						<Text fontSize="14px" color={COLORS.mainColor} fontWeight={600}>
							130+
						</Text>
						<Text marginLeft="4px" fontSize="14px" color={COLORS.mainColor}>
							patients
						</Text>
					</HStack>
				</HStack>
			</Center>
			<View padding="24px">
				<Text fontSize="16px" fontWeight={600} color={COLORS.mainColor}>
					About
				</Text>
				<Text fontSize="16px" color={COLORS.mainColor}>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum.
				</Text>
			</View>
			<View padding="24px" marginTop="auto">
				<Button onPress={onSelect}>Book appointment</Button>
			</View>
		</View>
	);
};

export default DoctorDetail;
