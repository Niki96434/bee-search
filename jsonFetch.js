export default async function getJSON() {
  const response = await fetch('./data.json')
  let articleList = await response.json()
  return (
    articleList
  )
}