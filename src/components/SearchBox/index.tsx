import React from 'react';
import { View, Input, IconButton } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface ISearchBox {
	placeholder?: string;
	value: string;
	onChange: (value: string) => void;
}

const SearchBox = ({ placeholder, value, onChange }: ISearchBox) => {
	const handleChange = (changeValue: string) => {
		onChange(changeValue);
	};

	return (
		<View height={40} justifyContent="center">
			<Input
				rightElement={
					<IconButton
						icon={<Icon name="search" color="rgb(115, 120, 133)" size={32} />}
					/>
				}
				backgroundColor="rgb(250, 250, 250)"
				placeholder={placeholder}
				borderRadius={12}
				fontSize={14}
				value={value}
				onChangeText={handleChange}
			/>
		</View>
	);
};

export default SearchBox;
