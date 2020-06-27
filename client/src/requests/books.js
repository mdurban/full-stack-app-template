export const getBooks = () => {
  return fetch('http://localhost:5000/books')
    .then(response => response.json())
}

export const newBook = (title, firstName, lastName) => {
  return fetch('http://localhost:5000/books', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, firstName, lastName })
  })
}