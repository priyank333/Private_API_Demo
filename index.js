const axios = require('axios');

exports.handler = async (event) => {
    // TODO implement
	const response = axios.post('https://kpk8ioi53e.execute-api.ap-south-1.amazonaws.com/dev/test');
    console.log("Event :: " + JSON.stringify(event))
    const response = {
        statusCode: 200,
        body: response.data
    };
    return response;
};
