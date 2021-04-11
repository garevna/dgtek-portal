const promise = function (file) {
  return new Promise((resolve) => {
    const reader = Object.assign(new FileReader(), {
      onload: (event) => resolve({ status: 200, result: event.target.result }),
      onerror: () => resolve({ status: 404, result: `Error reading the file ${file.name}` })
    })
    reader.readAsDataURL(file)
  })
}

export async function readFile (file) {
  if (file.type !== 'application/pdf') return { status: 422, result: 'Invalid file type' }
  return await promise(file)
}
