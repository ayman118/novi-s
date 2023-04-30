export const getStrapiImageUrl = (imageData) => {
    return 'http://localhost:1337' + imageData[0].attributes.url
}
