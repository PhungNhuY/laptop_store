export type category = "CUSTOM PCS" | "MSI ALL-IN-ONE PCS" | "HP/COMQAQ PCS" | null;
export interface IProduct {
    id: number;
    name: string;
    des: string;
    oldPrice: number;
    newPrice: number;
    image: string;
    category: category;
}

export interface IOptionCategory {
    type: 'category';
    text: string;
    value: string;
}

export interface IOptionPrice {
    type: 'price';
    text: string;
    min: number;
    max: number;
}

export interface IOption {
    id: number;
    value: IOptionCategory | IOptionPrice;
}

/*
0: CUSTOM PCS
1: MSI ALL-IN-ONE PCS
2: HP/COMQAQ PCS
3: $0.00 - $1,000.00
4: $1,000.00 - $2,000.00
5: $2,000.00 - $3,000.00
6: $3,000.00 - $4,000.00
7: $4,000.00 - $5,000.00
8: $5,000.00 - $6,000.00
9: $6,000.00 - $7,000.00
10: $7,000.00 And Above
*/