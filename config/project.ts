// service
const PROTOCOL = 'http';
const WS_PROTOCOL = 'ws';
const HOST = '192.168.0.105';
const PORT = '4000';

const PROJECT_CONFIG = {
  PROTOCOL,
  HOST,
  PORT,
  CLIENT_BASE_URL: `${ PROTOCOL ? PROTOCOL + '://' : '' }${ HOST }${ PORT ? ':' + PORT : '' }`,
  CLIENT_SOCKET_BASE_URL: `${ WS_PROTOCOL ? WS_PROTOCOL + '://' : '' }${ HOST }${ PORT ? ':' + PORT : '' }`,
};

export const REQUEST_DEFAULT_ERROR_MESSAGE = '未知异常'

export default PROJECT_CONFIG;
