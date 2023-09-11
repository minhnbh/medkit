import React, { PropsWithChildren, ReactNode } from 'react';
import { Button as BaseButton, Text, IIconButtonProps } from 'native-base';
import { COLORS } from 'constants/colors';

interface IButtonProps extends Omit<IIconButtonProps, 'children'> {
	backgroundColor?: string;
	fontSize?: number;
	textColor?: string;
	children?: Element | Element[] | string;
}

const Button = ({
	backgroundColor = COLORS.mainColor,
	fontSize = 16,
	textColor = COLORS.buttonText,
	children,
	...props
}: PropsWithChildren<IButtonProps>) => {
	return (
		<BaseButton
			backgroundColor={backgroundColor}
			paddingX="38px"
			borderRadius="12px"
			{...props}
		>
			<Text fontSize={fontSize} color={textColor} fontWeight={500}>
				{children}
			</Text>
		</BaseButton>
	);
};

export default Button;
