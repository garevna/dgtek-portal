const readFile = function (file) {
  return new Promise((resolve) => {
    const reader = Object.assign(new FileReader(), {
      onload: (event) => resolve({ body: event.target.result, error: null }),
      onerror: () => resolve({ body: null, error: `Error reading the file ${file.name}` })
    })
    reader.readAsDataURL(file)
  })
}

export default async (file, route) => {
  if (file.type !== 'application/pdf') return { error: 'Invalid file type' }

  const fileResult = await readFile(file)
  return fileResult
}
