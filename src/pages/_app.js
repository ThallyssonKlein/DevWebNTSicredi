import ErrorMessageProvider from '../contexts/ErrorMessageContext';
import TrProvider from '../contexts/TrContext';

function MyApp({ Component, pageProps }) {
  return <ErrorMessageProvider>
            <TrProvider>
              <Component {...pageProps} />
            </TrProvider>
        </ErrorMessageProvider>
}

export default MyApp
