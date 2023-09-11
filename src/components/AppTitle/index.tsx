import React from 'react';
import { View, Text } from 'native-base';
import { COLORS } from 'constants/colors';

interface IAppTitle {
	fontSize?: number;
}

const AppTitle = ({ fontSize: fontSizeProp }: IAppTitle) => {
	const fontSize = fontSizeProp || 16;
	return (
		<View flexDirection="row">
			<Text color={COLORS.mainColor} fontWeight={500} fontSize={fontSize}>
				Med
			</Text>
			<Text color={COLORS.mainColor} fontWeight={300} fontSize={fontSize}>
				Kit
			</Text>
		</View>
	);
};

export default AppTitle;
