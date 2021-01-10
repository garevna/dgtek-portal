export default async () => {
  const response = await (await fetch(process.env.VUE_APP_BUILDINGS_API, {
    method: 'GET',
    headers: {
      Authorization: process.env.VUE_APP_AUTHORIZATION_KEY,
      'Content-Location': process.env.VUE_APP_BUILDINGS_API_ACCESS
    }
  })).json()

  return response
}
