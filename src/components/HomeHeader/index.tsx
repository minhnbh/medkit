import React from 'react';
import { Center, HStack, Image, Pressable, View } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AppTitle from 'components/AppTitle';
import { images } from 'assets/images';
import { COLORS } from 'constants/colors';

const HomeHeader = () => {
	return (
		<HStack paddingY="12px" paddingX="24px" justifyContent="center">
			<Center>
				<Pressable>
					<View width="32px">
						<Icon name="bars" size={20} color={COLORS.mainColor} />
					</View>
				</Pressable>
			</Center>
			<Center flex={1}>
				<AppTitle />
			</Center>
			<Center>
				<Image
					source={images.defaultAvatar}
					alt="avatar"
					width="32px"
					height="32px"
					borderRadius="12px"
				/>
			</Center>
		</HStack>
	);
};

export default HomeHeader;
