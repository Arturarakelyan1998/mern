export default async function getPosts() {

    const data = await fetch("https://61ed959e634f2f00170cec81.mockapi.io/posts")

    return data.json()
}
