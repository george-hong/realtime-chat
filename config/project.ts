// service
const PROTOCOL = 'http';
const HOST = '192.168.0.106';
const PORT = '4000';

const PROJECT_CONFIG = {
  PROTOCOL,
  HOST,
  PORT,
  CLIENT_BASE_URL: `${ PROTOCOL ? PROTOCOL + '://' : '' }${ HOST }${ PORT ? ':' + PORT : '' }`,
};

export const REQUEST_DEFAULT_ERROR_MESSAGE = '未知异常'

export default PROJECT_CONFIG;
