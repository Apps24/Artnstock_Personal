import axios from 'axios';

export const httpClient = axios.create({
  // baseURL: 'http://192.168.0.26:5000',
  // baseURL: "http://localhost:5000"
  baseURL: 'http://192.168.0.26:5000',

  // baseURL:
  //   'http://artnstock-env.eba-b2mpmnaf.us-east-2.elasticbeanstalk.com',
});
