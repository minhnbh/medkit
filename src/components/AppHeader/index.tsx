import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { images } from 'assets/images';
import { COLORS } from 'constants/colors';
import { sizes } from 'constants/dimentions';
import {
	StyledProps,
	Text,
	View,
	ITextProps,
	HStack,
	IconButton,
	Pressable,
	Center,
	Image,
} from 'native-base';
import React, { ReactNode } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface IAppHeaderProps extends Partial<NativeStackHeaderProps> {
	styles?: StyledProps;
	title?: string | ReactNode;
	titleStyles?: ITextProps;
	headerRight?: ReactNode;
	hiddenAvatar?: boolean;
}

const AppHeader = ({
	styles,
	title = '',
	titleStyles,
	headerRight,
	navigation,
	hiddenAvatar,
}: IAppHeaderProps) => {
	const onBack = () => {
		navigation?.goBack();
	};

	return (
		<HStack
			height={sizes.headerHeight}
			backgroundColor={COLORS.backgroundColor}
			paddingX="24px"
			paddingY="12px"
			{...styles}
		>
			<View justifyContent="center" w="40px">
				<Pressable
					onPress={onBack}
					height="100%"
					width="100%"
					justifyContent="center"
				>
					<Icon name="angle-left" size={22} color={COLORS.mainColor} />
				</Pressable>
			</View>
			{title && (
				<View flex={1} justifyContent="center">
					{typeof title === 'string' ? (
						<Text
							color={COLORS.mainColor}
							fontSize="16px"
							fontWeight={500}
							{...titleStyles}
						>
							{title}
						</Text>
					) : (
						title
					)}
				</View>
			)}
			{headerRight ? (
				<View w="40px" justifyContent="center">
					{headerRight}
				</View>
			) : (
				!hiddenAvatar && (
					<Center paddingLeft="24px">
						<Image
							source={images.defaultAvatar}
							alt="avatar"
							width="32px"
							height="32px"
							borderRadius="12px"
						/>
					</Center>
				)
			)}
		</HStack>
	);
};

export default AppHeader;
