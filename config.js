require('dotenv').config();

const { PORT, OPENAI_ACCESS_TOKEN, API_REVERSE_PROXY_URL } = process.env

module.exports = { PORT, OPENAI_ACCESS_TOKEN, API_REVERSE_PROXY_URL };