import { StyleSheet, TouchableOpacity } from 'react-native';
import React, { ReactNode } from 'react';
import { View, Text, VStack } from 'native-base';
import { useNavigation, CommonActions } from '@react-navigation/native';

interface ISectionProps {
	title: string;
	viewAllRoute?: string;
	children?: ReactNode | ReactNode[];
}

const Section = ({ title, viewAllRoute, children }: ISectionProps) => {
	const navigation = useNavigation();
	const onViewAll = () => {
		if (!viewAllRoute) return;
		navigation.dispatch(
			CommonActions.navigate({
				name: viewAllRoute,
			}),
		);
	};

	return (
		<VStack>
			<View>
				<Text>{title}</Text>
				<TouchableOpacity onPress={onViewAll}>
					<Text>View All</Text>
				</TouchableOpacity>
			</View>
			{children}
		</VStack>
	);
};

export default Section;

const styles = StyleSheet.create({});
