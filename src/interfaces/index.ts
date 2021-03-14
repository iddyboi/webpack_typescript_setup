interface Bill {
  vat: string;
}

interface Shopping<T> extends Bill {
  name: string;
  price: T;
}

const cart: Shopping<string> = {
  name: 'deluxe',
  price: '50',
  vat: 'n',
};
