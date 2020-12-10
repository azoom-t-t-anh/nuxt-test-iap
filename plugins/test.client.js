import api from "~/api";

export default async function({ store }) {
  const { iapJwtAssertion } = store.state;

  iapJwtAssertion &&
    api.createAPI("testApi", "https://api-test-iap-bqtjhsqzlq-an.a.run.app/", {
      iapJwtAssertion
    });
}
