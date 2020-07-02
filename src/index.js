console.log('TP-6');

const env = require('./app/common/environment');

const app = require('./app/app');
const PORT = 3000;

app.listen(PORT, () => console.log('Server running on port ' + PORT + ' with conf ' + env.current.name));
