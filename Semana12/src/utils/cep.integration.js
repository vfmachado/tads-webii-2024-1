
// CACHE LOCAL (MEMORY)

const cache = {};

async function getAddress(cep) {
  if (cache[cep]) {
      return cache[cep];
  }
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data = await response.json();

  cache[cep] = data;
  return data;
}

export { getAddress }