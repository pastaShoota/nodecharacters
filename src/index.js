const { logger } = require('./app/common/logger.util');

logger.info('TP-12');

const app = require('./app/app');
const PORT = 3000;

app.listen(PORT, () => logger.info('Server running on port ' + PORT));
