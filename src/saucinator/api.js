export const validateDrink = (drink) => {
  const { name, type, pumps } = drink;
  return name && type && pumps && validatePumps(pumps);
};

export const validatePumps = (pumps) => {
  console.dir(pumps);
  return pumps.reduce((acc, pump) => {
    if (!pump) return false;
    const { id, volume, density, name } = pump;

    const val = acc && volume && density && name;
    return val;
  }, true);
};

export const getStatus = () => {
  return fetch('/status').then(res => {
    if (res.status === 204) return null;
    return res.json();
  });
};

export const setDrink = (drink) => {
  return fetch('/drink/set', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ drink: drink })
  }).then(res => {
    if (res.status === 400) return null;
    return getStatus();
  });
};

export const makeDrink = (drink) => {
  if (drink) {
    return fetch('/drink/make', {
      body: JSON.stringify({ drink }),
      cache: 'no-cache',
      method: 'POST'
    }).then(res => {
      if (res.status === 400) return null;
      else if (res.status === 204) return getStatus();
    });
  }

  else {
    return fetch('/drink/make', {
      cache: 'no-cache',
      method: 'POST'
    }).then(res => {
      if (res.status === 400) return null;
      else if (res.status === 204) return getStatus();
    });
  }
};
