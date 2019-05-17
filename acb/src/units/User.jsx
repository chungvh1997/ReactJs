import axios from "axios";
const registerForm = {
  Login(data) {
    return axios({
      method: "POST",
      url: "http://acbtet2019.wejelly.com/api/login",
      data: {
        user_ad: data.user,
        password: data.password,
      
      },
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.data);
  },
//   voucherRegister(data) {
//     return axios({
//       method: "POST",
//       url: HOST + "/signup-giftcode",
//       data: {
//         name: data.name,
//         email: data.email,
//         phone: data.phone,
//         city: data.city,
//         google_id: data.google_id,
//         facebook_id: data.facebook_id
//       },
//       headers: {
//         "Content-Type": "application/json"
//       }
//     }).then(res => res.data);
//   },
//   eVoucher(data) {
//     return axios({
//       method: "POST",
//       url: HOST + "/signup-evoucher",
//       data: {
//         name: data.name,
//         email: data.email,
//         phone: data.phone,
//         city: data.city,
//         google_id: data.google_id,
//         facebook_id: data.facebook_id
//       },
//       headers: {
//         "Content-Type": "application/json"
//       }
//     }).then(res => res.data);
//   },

};

export default registerForm;
