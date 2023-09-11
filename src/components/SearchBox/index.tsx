import React, { useState } from 'react';
import { View, Input, IconButton, StyledProps } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from 'constants/colors';

interface ISearchBox extends StyledProps {
	placeholder?: string;
}

const SearchBox = ({ placeholder, ...props }: ISearchBox) => {
	const [value, setValue] = useState('');

	const handleChange = (changeValue: string) => {
		setValue(changeValue);
	};

	return (
		<View height="40px" justifyContent="center" {...props}>
			<Input
				rightElement={
					<IconButton
						icon={<Icon name="search" color="rgb(115, 120, 133)" size={16} />}
					/>
				}
				backgroundColor={COLORS.white}
				placeholder={placeholder}
				borderRadius={12}
				fontSize={14}
				value={value}
				onChangeText={handleChange}
				borderWidth={0}
			/>
		</View>
	);
};

export default SearchBox;
