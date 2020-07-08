import { merge } from 'lodash';
import environment from '../../../environment/environment';
import prod from '../../../environment/environment.prod';

const config = merge({}, environment, process.env.ENVIRONMENT === 'prod' && prod);

export const getConfig = () => config;
