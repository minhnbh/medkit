import { images } from 'assets/images';

export interface IDoctor {
	name: string;
	description: string;
	avatar: any;
}

export const doctors: IDoctor[] = [
	{
		name: 'Dr. Lucas',
		description: 'Dentist, dental hygiene',
		avatar: images.doctor1,
	},
	{
		name: 'Dr. Matthew',
		description: 'Dental hygiene',
		avatar: images.doctor2,
	},
	{
		name: 'Dr. Greg',
		description: 'Ortodontist',
		avatar: images.doctor3,
	},
	{
		name: 'Dr. Eva',
		description: 'Dentist, dental hygiene',
		avatar: images.doctor4,
	},
	{
		name: 'Dr. Anna',
		description: 'Dentist',
		avatar: images.doctor5,
	},
];
