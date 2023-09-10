import React, { PropsWithChildren } from 'react';
import { Button as BaseButton, Text } from 'native-base';
import { COLORS } from '@constants/colors';

interface IButtonProps {
	backgroundColor?: string;
	fontSize?: number;
	textColor?: string;
}

const Button = ({
	backgroundColor = COLORS.mainColor,
	fontSize = 16,
	textColor = COLORS.buttonText,
	children,
}: PropsWithChildren<IButtonProps>) => {
	return (
		<BaseButton
			backgroundColor={backgroundColor}
			paddingX={38}
			borderRadius={12}
		>
			<Text fontSize={fontSize} color={textColor}>
				{children}
			</Text>
		</BaseButton>
	);
};

export default Button;
