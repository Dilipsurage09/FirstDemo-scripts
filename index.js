exports.handler = async (event) => {
    const axios = require('axios');
    const moment = require('moment');
    const response = await axios.get('https://api.github.com');
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello from Lambda!',
            date: moment().format('YYYY-MM-DD'),
            data: response.data
        }),
    };
};