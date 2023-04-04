import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '8db7ad13c3b448eda1af7f36d9e0f421',
  },
})
