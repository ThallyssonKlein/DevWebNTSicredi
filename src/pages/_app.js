import ErrorMessageProvider from '../contexts/ErrorMessageContext';

function MyApp({ Component, pageProps }) {
  return <ErrorMessageProvider>
          <Component {...pageProps} />
        </ErrorMessageProvider>
}

export default MyApp
