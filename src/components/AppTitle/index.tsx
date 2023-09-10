import React from 'react';
import { View, Text } from 'native-base';
import { COLORS } from '@constants/colors';

interface IAppTitle {
	fontSize?: number;
}

const AppTitle = ({ fontSize: fontSizeProp }: IAppTitle) => {
	const fornSize = fontSizeProp || 16;
	return (
		<View>
			<Text color={COLORS.mainColor} fontWeight={500} fontSize={fornSize}>
				Med
			</Text>
			<Text color={COLORS.mainColor} fontWeight={300} fontSize={fornSize}>
				Kit
			</Text>
		</View>
	);
};

export default AppTitle;
