import { Image, Dimensions } from 'react-native';
import React from 'react';
import { Text, View } from 'native-base';
import Button from 'components/Button';
import { images } from 'assets/images';
import AppTitle from 'components/AppTitle';
import { CommonActions, useNavigation } from '@react-navigation/native';

const Welcome = () => {
	const navigation = useNavigation();

	const onStart = () => {
		navigation.dispatch(CommonActions.navigate({ name: 'home' }));
	};

	return (
		<View flex={1} padding="20px">
			<View w="100%" alignItems="center">
				<View h={Dimensions.get('screen').height * 0.4} justifyContent="center">
					<Image
						alt="welcome"
						source={images.welcome}
						style={{
							height: Dimensions.get('screen').width * 0.6,
							width: Dimensions.get('screen').width * 0.6,
							resizeMode: 'contain',
						}}
					/>
				</View>
				<AppTitle fontSize={48} />
			</View>
			<View marginTop="auto">
				<Button onPress={onStart}>Start</Button>
			</View>
		</View>
	);
};

export default Welcome;
