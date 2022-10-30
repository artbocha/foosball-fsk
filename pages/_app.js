import Layout from "@layout/Layout";

import "../styles/global.css";

const MyApp = ({Component, pageProps}) => {
  if (Component.getContextProvider) {
    return Component.getContextProvider(
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
