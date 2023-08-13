const HEADERS = {
  "Content-Type": "application/json",
};

const getBankData = async (iban) => {
  try {
    const API_KEY = process.env.API_KEY;
    const DOMAIN = process.env.IBAN_DOMAIN;
    const url = `${DOMAIN}/validate/${iban}?api_key=${API_KEY}`;

    const data = await fetch(url, {
      headers: HEADERS,
    }).then((res) => res.json());

    return data;
  } catch (e) {
    return null;
  }
};

export const IbanApiService = {
  getBankData,
};
