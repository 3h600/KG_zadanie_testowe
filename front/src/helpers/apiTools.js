function ResultModel(data, isError, errors) {
  this.data = data;
  this.isError = isError;
  this.errors = errors;
}

const fetchAPI = async () => {
  return await fetch('http://localhost:8081/products', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else throw Error('Nie mogłem odczytać danych');
    })
    .then((data) => {
      return new ResultModel(data, false, null);
    })
    .catch((err) => {
      return new ResultModel(null, true, err);
    });
};
export default fetchAPI;
