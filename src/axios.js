import axios from 'axios';

export const httpClient = axios.create({
  // baseURL: 'http://68.178.173.99:5001',
  // baseURL: "http://localhost:5000"
  baseURL: 'http://192.168.0.20:5000',

  // baseURL:
  //   'http://artnstock-env.eba-b2mpmnaf.us-east-2.elasticbeanstalk.com',
});
