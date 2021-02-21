import { ExpressServer } from './modules';
import { config } from './configs';

const server = new ExpressServer(config);

server.init();