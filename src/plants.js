import snake from './images/snake.svg';
import spider from './images/spider.svg';
import lavender from './images/lavender.svg';
import mint from './images/mint.svg';
import aloe from './images/aloe.svg';
import jade from './images/jade.svg';

export const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
export const categories = [
  { title: "Air-purifying plants", plants: [
    {"id": "snake", "name": "Snake Plant", "price": 15, "description": "Allow the soil to dry between waterings.", image: snake},
    {"id": "spider", "name": "Spider Plant", "price": 12, "description": "Give it bright, indirect light.", image: spider}
  ] },
  { title: "Aromatic plants", plants: [
    {"id": "lavender", "name": "Lavender", "price": 18, "description": "Place by a sunny window with good airflow.", image: lavender},
    {"id": "mint", "name": "Mint", "price": 9, "description": "Keep the soil lightly moist and harvest often.", image: mint}
  ] },
  { title: "Succulents", plants: [
    {"id": "aloe", "name": "Aloe Vera", "price": 14, "description": "Use a fast-draining potting mix.", image: aloe},
    {"id": "jade", "name": "Jade Plant", "price": 17, "description": "Give it plenty of light and water sparingly.", image: jade}
  ] }
];
