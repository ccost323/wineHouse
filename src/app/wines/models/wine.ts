export interface Wine {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    foodPairing: Food[] ;
    isOnSale: boolean;
    quantityInCart: number;
  }
  
  export interface Food {
    name: string;
    glutten: boolean;
    kcal: number;
    vegan: boolean;
  }
  