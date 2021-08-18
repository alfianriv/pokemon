import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import client from '../graphql/apolloClient'
import LayoutWrapper from '../layouts/LayoutWrapper'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
       <LayoutWrapper {...pageProps}>
         <Component {...pageProps}/>
       </LayoutWrapper>
    </ApolloProvider>
  )
}

export default MyApp
