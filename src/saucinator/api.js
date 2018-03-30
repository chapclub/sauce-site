export const validateDrink = ({ name, type, pumps }) => {
  return name && type && pumps && validatePumps(pumps);
};

export const validatePumps = (pumps) => {
  return pumps.reduce((pump, acc) => {
    if (!pump) return false;
    const { id, volume, density, name } = pump;

    return acc && id && volume && density && name;
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
    body: JSON.stringify({ drink }),
    cache: 'no-cache',
    method: 'POST'
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
