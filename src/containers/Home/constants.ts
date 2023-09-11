import { ROUTES } from 'navigators/routes';

export interface IMenu {
	id: string;
	label: string;
	icon: string;
	route?: string;
}

export const currentMedications: IMenu[] = [
	{
		id: 'Paracethamol',
		label: 'Paracethamol',
		icon: 'tablets',
		route: ROUTES.currentMedication,
	},
	{
		id: 'Vitamin C',
		label: 'Vitamin C',
		icon: 'pills',
		route: ROUTES.currentMedication,
	},
	{
		id: 'Vitamin D',
		label: 'Vitamin D',
		icon: 'prescription-bottle-alt',
		route: ROUTES.currentMedication,
	},
];

export const findYourDoctor: IMenu[] = [
	{
		id: 'General',
		label: 'General',
		icon: 'stethoscope',
	},
	{
		id: 'Dentist',
		label: 'Dentist',
		icon: 'tooth',
	},
	{
		id: 'Geneticist',
		label: 'Geneticist',
		icon: 'dna',
	},
	{
		id: 'Nurse',
		label: 'Nurse',
		icon: 'syringe',
	},
	{
		id: 'Virologist',
		label: 'Virologist',
		icon: 'virus',
	},
	{
		id: 'Cardiologist',
		label: 'Cardiologist',
		icon: 'heartbeat',
	},
];

export interface IAppointment extends IMenu {
	date: string;
	type: string;
	typeIcon: string;
	doctor: string;
}

export const appointments: IAppointment[] = [
	{
		id: 'GeneralCheckUp',
		label: 'General check-up',
		date: 'Aug 12',
		icon: 'stethoscope',
		doctor: 'Dr. Phil',
		type: 'Video Appointment',
		typeIcon: 'video',
		route: ROUTES.videoCall,
	},
	{
		id: 'CardiologistCheckUp',
		label: 'Cardiologist check-up',
		date: 'Aug 28',
		icon: 'heartbeat',
		doctor: 'Dr. Maria',
		type: 'Chat Appointment',
		typeIcon: 'comment-alt',
	},
];
