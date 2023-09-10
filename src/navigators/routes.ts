import Welcome from '@containers/Welcome';
import { ComponentType } from 'react';

export const ROUTES = {
	welcome: 'welcome',
};

export const ROUTES_COMPONENT_MAPPING: Record<string, ComponentType<any>> = {
	welcome: Welcome,
};
