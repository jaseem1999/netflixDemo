import axios from 'axios'
import {baseUrl} from './Contents/Contants'
const instance = axios.create({
  baseURL: baseUrl,
  
});
export default instance