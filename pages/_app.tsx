import '../styles/globals.css';
import { AppProps, AppContext } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { wrapper } from '../src/store';
import PageTags from './_pageTags';

function MyApp({ Component, pageProps, err }: AppProps & { err: Error }) {
  const pageTitle = '';
  const pageDescription = '';
  const pageUrl = '';

  return (
    <>
      <PageTags
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageUrl={pageUrl}
      />
      <CssBaseline />
      <Component {...pageProps} err={err} />
    </>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  return {
    pageProps: {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
      pathname: ctx.pathname
    }
  };
};

export default wrapper.withRedux(MyApp);
