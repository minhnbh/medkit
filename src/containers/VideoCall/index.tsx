import { useNavigation } from '@react-navigation/native';
import { images } from 'assets/images';
import { Icon } from 'components';
import CallingTime from 'components/CallingTime';
import { COLORS } from 'constants/colors';
import { Center, HStack, Image, Pressable, Text, View } from 'native-base';
import React from 'react';

const VideoCall = () => {
	const navigation = useNavigation();
	return (
		<View position="relative" flex={1}>
			<View position="absolute" top={0} left={0} right={0} bottom={0}>
				<Image source={images.callingBackground} w="full" h="full" alt="background" />
			</View>
			<View position="absolute" left="16px" top="16px">
				<Pressable onPress={navigation.goBack} padding={4}>
					<Icon name="angle-left" size={22} color={COLORS.mainColor} />
				</Pressable>
			</View>
			<View position="absolute" right="16px" top="48px">
				<Image
					source={images.defaultAvatar}
					alt="avatar"
					width="104px"
					height="128px"
					borderRadius="12px"
					resizeMode="cover"
				/>
			</View>
			<Center position="absolute" left={0} right={0} bottom={16}>
				<Center>
					<Text color={COLORS.white} fontSize="24px" fontWeight={500}>
						Dr. Phil
					</Text>
					<CallingTime fontSize="16px" color={COLORS.white} marginTop="8px" />
				</Center>
				<Center marginTop={12}>
					<HStack alignItems="center" space={8}>
						<Pressable
							w="56px"
							h="56px"
							backgroundColor="rgba(250, 250, 250, 0.4)"
							rounded="full"
						>
							<Center h="100%">
								<Icon name="microphone" size={16} color={COLORS.white} />
							</Center>
						</Pressable>
						<Pressable
							w="84px"
							h="84px"
							backgroundColor="rgb(238, 87, 74)"
							rounded="full"
							onPress={navigation.goBack}
						>
							<Center h="100%">
								<Icon name="phone-alt" size={32} color={COLORS.white} solid />
							</Center>
						</Pressable>
						<Pressable
							w="56px"
							h="56px"
							backgroundColor="rgba(250, 250, 250, 0.4)"
							rounded="full"
						>
							<Center h="100%">
								<Icon name="video" size={16} color={COLORS.white} />
							</Center>
						</Pressable>
					</HStack>
				</Center>
			</Center>
		</View>
	);
};

export default VideoCall;
