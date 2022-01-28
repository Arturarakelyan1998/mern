export default async function getPosts() {

    const data = await fetch("api/post")

    return data.json()
}
