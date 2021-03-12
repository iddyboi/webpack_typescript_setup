import { data } from './forms';
import './main.scss';

console.log(data.name);
console.log('Hello webpack!');

const fancyFunc = () => {
  return [1, 2];
};

const [a, b] = fancyFunc();
