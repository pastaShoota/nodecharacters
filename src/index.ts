import { logger } from './app/common/logger.util';

logger.info('TP-12');

import app from './app/app';
const PORT = 3000;

app.listen(PORT, () => logger.info('Server running on port ' + PORT));
