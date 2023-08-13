function send(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            resolve(data.data);
          });
        } else {
          reject(`We have error, status code: ${res.status}`);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

const url = "https://api.first.org/data/v1/countries";

send(url)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
