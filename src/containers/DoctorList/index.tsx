import React from 'react';
import AppHeader from 'components/AppHeader';
import SearchBox from 'components/SearchBox';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { FlatList, Image, Pressable, Text, View } from 'native-base';
import { IDoctor, doctors } from './constants';
import { COLORS } from 'constants/colors';
import { Icon } from 'components';
import { ROUTES } from 'navigators/routes';

const DoctorList = () => {
	const navigation = useNavigation();
	const onClick = (e: IDoctor) => {
		navigation.dispatch(
			CommonActions.navigate({
				name: ROUTES.doctorDetail,
				params: e,
			}),
		);
	};

	return (
		<View paddingTop="16px">
			<AppHeader
				title={<SearchBox placeholder="Dentists" />}
				navigation={navigation as any}
			/>
			<FlatList
				data={doctors}
				paddingX="24px"
				renderItem={({ item }) => (
					<Pressable
						backgroundColor={COLORS.white}
						padding="16px"
						borderRadius="16px"
						marginTop="16px"
						alignItems="center"
						flexDirection="row"
                        onPress={() => onClick(item)}
					>
						<Image
							source={item.avatar}
							width="48px"
							height="48px"
							resizeMode="cover"
							borderRadius="12px"
							alt="avatar"
						/>
						<View marginLeft="16px">
							<Text fontSize="14px" fontWeight={600} color={COLORS.mainColor}>
								{item.name}
							</Text>
							<Text fontSize="12px" color="rgb(115, 120, 133)">
								{item.description}
							</Text>
						</View>
						<View marginLeft="auto">
							<Icon name="angle-right" size={22} color="rgb(115, 120, 133)" />
						</View>
					</Pressable>
				)}
			/>
		</View>
	);
};

export default DoctorList;
