import { onError } from 'apollo-link-error'
import { Dict } from '~/data/utils/dictionary'

const apolloClientConfig = (ctx) => {


    const errorLink = onError(({ networkError, graphQLErrors }) => {


        if (networkError) {
            if (process.client)
                ctx.$about.error({ title: Dict.net_err })
        }





        console.log({ networkError })
        console.log("graphQLErrors")
        console.log(graphQLErrors)
        if (Array.isArray(graphQLErrors) && graphQLErrors.some(error => error.debugMessage && error.debugMessage.search("invalid-jwt") !== -1)) {
            if (process.client)
                ctx.$about.info({ title: Dict.auth_kickout, body: error.debugMessage ? String(error.debugMessage) : '' })

        }

    })
    return {
        link: errorLink,

        httpEndpoint: 'https://nikan-alumni.org/graphql'

    }
}

export default apolloClientConfig