class Countries {
  constructor(url) {
    if (typeof url !== "string") {
      throw new Error(`url must be a string`);
    }
    this.url = url;
  }

  send(reg) {
    if (typeof reg !== "string") {
      throw new Error("region must be a string");
    }

    return fetch(`${this.url}?region=${reg}`)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(`We have error, status code: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => data.data);
  }
}

const url = "https://api.first.org/data/v1/countries";
const countries = new Countries(url);

(async () => {
  try {
    const data = await countries.send("africa");
    console.log(data); // Data.
  } catch (error) {
    console.log(error);
  }
})();
