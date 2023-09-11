import { StyleSheet } from 'react-native';
import React, { ReactNode } from 'react';
import { View, Text, VStack, Pressable } from 'native-base';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { COLORS } from 'constants/colors';

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
		<VStack padding="24px">
			<View flexDirection="row" justifyContent="center">
				<Text color={COLORS.mainColor} fontSize={16} fontWeight={600}>
					{title}
				</Text>
				<Pressable onPress={onViewAll} marginLeft="auto">
					<Text>View All</Text>
				</Pressable>
			</View>
			{children}
		</VStack>
	);
};

export default Section;

const styles = StyleSheet.create({});
