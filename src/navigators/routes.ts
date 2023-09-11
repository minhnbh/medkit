import Welcome from '@containers/Welcome';
import Home from '@containers/Home';
import { ComponentType } from 'react';
import CurrentMedication from 'containers/CurrentMedication';
import MyMedications from 'containers/MyMedications';
import MyAppointments from 'containers/MyAppointments';
import BookAppointment from 'containers/BookAppointment';
import VideoCall from 'containers/VideoCall';
import DoctorList from 'containers/DoctorList';
import DoctorDetail from 'containers/DoctorDetail';

export const ROUTES = {
	welcome: 'welcome',
	home: 'home',
	myMedications: 'myMedications',
	currentMedication: 'currentMedication',
	myAppointments: 'myAppointments',
	bookAppointment: 'bookAppointment',
	videoCall: 'videoCall',
	doctorList: 'doctorList',
	doctorDetail: 'doctorDetail',
};

export const ROUTES_COMPONENT_MAPPING: Record<string, ComponentType<any>> = {
	welcome: Welcome,
	home: Home,
	myMedications: MyMedications,
	currentMedication: CurrentMedication,
	myAppointments: MyAppointments,
	bookAppointment: BookAppointment,
	videoCall: VideoCall,
	doctorList: DoctorList,
	doctorDetail: DoctorDetail,
};
