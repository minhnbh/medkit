module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
				alias: {
					tests: ['./tests/'],
					'@assets': ['./src/assets'],
					'@assets/': ['./src/assets/'],
					'@components': ['./src/components'],
					'@components/': ['./src/components/'],
					'@configs': ['./src/configs'],
					'@services': ['./src/services'],
					'@services/': ['./src/services/'],
					'@helpers': ['./src/helpers'],
					'@helpers/': ['./src/helpers/'],
					'@values': ['./src/values'],
					'@values/': ['./src/values/'],
					'@containers': ['./src/containers'],
					'@containers/': ['./src/containers/'],
					'@navigator': ['./src/navigators'],
					'@navigator/': ['./src/navigators/'],
					'@hocs': ['./src/hocs'],
					'@hocs/': ['./src/hocs/'],
					'@hooks': ['./src/hooks'],
					'@hooks/': ['./src/hooks/'],
				},
			},
		],
	],
};
