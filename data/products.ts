export interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}


export const products: Product[] = [

    {
        id: 1,
        image: "#",
        title: "Глубокая тарелка",
        description: "Тарелка глубокая — 30 см с высокими бортиками",
        price: 2500
    },

    {
        id: 2,
        image: "#",
        title: "Кружка",
        description: "Кружка — 350 мл для самого вкусного кофе",
        price: 2000
    },

    {
        id: 3,
        image: "#",
        title: "Ваза",
        description: "Ваза — 2 литра для ваших ярких букетов",
        price: 4000
    },

    {
        id: 4,
        image: "#",
        title: "Объемная тарелка",
        description: "Тарелка объемная — блюдце 20 см под разные вкусности",
        price: 3500
    }
    
]