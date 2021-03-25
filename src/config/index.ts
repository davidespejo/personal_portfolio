const dotenv = require('dotenv');
// config() will read your .env file, parse the contents, assign it to process.env.
dotenv.config();

export default {
    name: 'personal_portfolio',
    env: process.env.NODE_ENV,
    endpoint_url: process.env.NODE_ENV == 'production' ? '' : 'http://localhost:3001/',
};
