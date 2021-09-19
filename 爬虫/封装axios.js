<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.21.1/axios.js"></script>
const http = axios.create({
    baseURL:'http://localhost:9000'
})
http.interceptors.request.use(function (config) {
    console.log(config)
    if(localStorage.getItem('status') && localStorage.getItem('statusText')){
        config.headers.Authorization = 'server request content ' + localStorage.getItem('status')
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  http.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });
  export default http