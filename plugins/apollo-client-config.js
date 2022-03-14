import { onError } from 'apollo-link-error'

export default function (ctx) {
    const errorLink = onError(({ networkError, graphQLErrors }) => {
        console.log({ networkError })
        console.log("graphQLErrors")
        console.log(graphQLErrors)
        if (Array.isArray(graphQLErrors) && graphQLErrors.some(error => error.debugMessage && error.debugMessage.search("invalid-jwt") !== -1)) {
            console.log("LOGGING OUT")
            // ctx.app.$notify.error({
            //     title: 'token expired',
            //     color: "#ef4444", theme: "dark", animateInside: false,
            // })
            window.alert("token exp ")
        }
        console.log({ ctx })
    })
    return {
        link: errorLink,

        httpEndpoint: 'https://nikan-alumni.org/graphql'

    }
}
