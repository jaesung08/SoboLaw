import axios from "axios";

const BASEURL = "jongbum.site/api/";
// withCredentials의 디폴트는 false
// true로 변경하면 1. CORS 요청을 허용 2. 쿠키값을 전달 할 수 있게 됨
const credential = true;

// 중앙 axios를 선언하고, 사이트명/경로에 따라 api 문서를 나눠서 사용
function mainAxios() {
  return axios.create({
    // baseURL: "https://" + BASEURL,
    baseURL: "http://" + BASEURL,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    withCredentials: credential,
  });
}

// http://jongbum.site/api/user-service/swagger-ui/index.html#/
// 재성이 파트
function userAxios() {
  return axios.create({
    // baseURL: "https://" + BASEURL,
    baseURL: "http://" + BASEURL + "user-service/",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    withCredentials: credential,
  });
}

export { mainAxios, userAxios };