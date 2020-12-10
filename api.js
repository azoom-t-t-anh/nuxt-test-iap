const ky = process.server ? require('ky').default : require('ky-universal').default
// import 'whatwg-fetch'


class Api {
  createAPI(name, prefixUrl, headers) {
    this[name] = ky.create({
      prefixUrl,
      credentials: "include",
      timeout: 1 * 60 * 1000,
      hooks: {
        beforeRequest: [
          req => {
            req.headers.set("iap-jwt-assertion", headers["iapJwtAssertion"]);
          }
        ],
        afterResponse: [
          (_request, _options, response) => {
            if (response.status === 401) {
              window.alert("Your token has expired. Please login again.");
            }
          }
        ]
      }
    });
  }
}

export default new Api();
