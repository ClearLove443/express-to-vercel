const { API_REVERSE_PROXY_URL, OPENAI_ACCESS_TOKEN } = require("./config.js");

const api = async function () {
  const { ChatGPTUnofficialProxyAPI } = await import('chatgpt')
  return new ChatGPTUnofficialProxyAPI({
    accessToken: OPENAI_ACCESS_TOKEN,
    debug: true,
    apiReverseProxyUrl: API_REVERSE_PROXY_URL
  })
}

async function _call(prompt) {
  const res = (await api()).sendMessage(prompt)
  return res
}

module.exports = { _call }