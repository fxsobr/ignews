import * as prismic from '@prismicio/client'

const endpoint = prismic.getEndpoint('ignews-mc')

export function getPrismicClient(req?: unknown) {
    const client = prismic.createClient(
        endpoint,
        {
            accessToken: process.env.PRISMIC_ACCESS_TOKEN
        }
    )

    client.enableAutoPreviewsFromReq(req)

    return client;
}