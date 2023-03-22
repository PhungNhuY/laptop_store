import { defineStore } from 'pinia';
import type { IOption, IProduct, IOptionCategory, IOptionPrice } from '../interfaces';
import { ref } from 'vue';

// import { productStore } from './product.store';

export const productAndFilterStore = defineStore('filter', () => {
    // root data
    const products: IProduct[] = [
        {
            id: 0,
            name: 'SKU D5515AI',
            des: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
            oldPrice: 999.00,
            newPrice: 449.00,
            image: '/src/assets/images/product/laptop1.png',
            category: 'CUSTOM PCS'
        },
        {
            id: 1,
            name: 'SKU D5515AI',
            des: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
            oldPrice: 1200.00,
            newPrice: 1099.00,
            image: '/src/assets/images/product/laptop2.png',
            category: 'MSI ALL-IN-ONE PCS'
        },
        {
            id: 2,
            name: 'SKU D5515AI',
            des: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
            oldPrice: 2999.00,
            newPrice: 2499.00,
            image: '/src/assets/images/product/laptop3.png',
            category: 'HP/COMQAQ PCS'
        },
        {
            id: 3,
            name: 'SKU D5515AI',
            des: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
            oldPrice: 3999.00,
            newPrice: 3499.00,
            image: '/src/assets/images/product/laptop4.png',
            category: 'CUSTOM PCS'
        },
        {
            id: 4,
            name: 'SKU D5515AI',
            des: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
            oldPrice: 19999.00,
            newPrice: 10000.00,
            image: '/src/assets/images/product/laptop4.png',
            category: 'HP/COMQAQ PCS'
        },
        {
            id: 5,
            name: 'SKU D5515AI',
            des: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
            oldPrice: 4999.00,
            newPrice: 4500.00,
            image: '/src/assets/images/product/laptop2.png',
            category: 'MSI ALL-IN-ONE PCS'
        },
        {
            id: 6,
            name: 'SKU D5515AI',
            des: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
            oldPrice: 5999.00,
            newPrice: 5500.00,
            image: '/src/assets/images/product/laptop3.png',
            category: 'HP/COMQAQ PCS'
        },
        {
            id: 7,
            name: 'SKU D5515AI',
            des: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
            oldPrice: 6999.00,
            newPrice: 6666.00,
            image: '/src/assets/images/product/laptop1.png',
            category: 'MSI ALL-IN-ONE PCS'
        }
    ];
    const options: IOption[] = [
        {
            id: 0,
            value: {
                type: 'category',
                text: 'CUSTOM PCS',
                value: 'CUSTOM PCS'
            }
        },
        {
            id: 1,
            value: {
                type: 'category',
                text: 'MSI ALL-IN-ONE PCS',
                value: 'MSI ALL-IN-ONE PCS'
            }
        },
        {
            id: 2,
            value: {
                type: 'category',
                text: 'HP/COMQAQ PCS',
                value: 'HP/COMQAQ PCS'
            }
        },
        {
            id: 3,
            value: {
                type: 'price',
                text: '$0.00 - $1,000.00',
                min: 0,
                max: 1000
            }
        },
        {
            id: 4,
            value: {
                type: 'price',
                text: '$1,000.00 - $2,000.00',
                min: 1000,
                max: 2000
            }
        },
        {
            id: 5,
            value: {
                type: 'price',
                text: '$2,000.00 - $3,000.00',
                min: 2000,
                max: 3000
            }
        },
        {
            id: 6,
            value: {
                type: 'price',
                text: '$3,000.00 - $4,000.00',
                min: 3000,
                max: 4000
            }
        },
        {
            id: 7,
            value: {
                type: 'price',
                text: '$4,000.00 - $5,000.00',
                min: 4000,
                max: 5000
            }
        },
        {
            id: 8,
            value: {
                type: 'price',
                text: '$5,000.00 - $6,000.00',
                min: 5000,
                max: 6000
            }
        },
        {
            id: 9,
            value: {
                type: 'price',
                text: '$6,000.00 - $7,000.00',
                min: 6000,
                max: 7000
            }
        },
        {
            id: 10,
            value: {
                type: 'price',
                text: '$7,000.00 And Above',
                min: 7000,
                max: Number.MAX_SAFE_INTEGER
            }
        },
    ];

    // filter
    const filter = ref<IOption[]>([]);
    // products after filter
    const productsAfterFilter = ref<IProduct[]>([]);
    productsAfterFilter.value = products;

    // sort
    const sortOption = ref<string>('price');

    // paging
    const currentPage = ref(1);
    const perPage = ref(35);
    const numberOfPage = ref(Math.ceil(productsAfterFilter.value.length / perPage.value));
    const from = ref(Math.min(perPage.value * (currentPage.value - 1) + 1, productsAfterFilter.value.length));
    const to = ref(Math.min(perPage.value * currentPage.value, productsAfterFilter.value.length));

    // products after filter, sort and paging
    const tempProduct = ref<IProduct[]>(productsAfterFilter.value.slice(from.value - 1, to.value));

    /*
    * add an option to filter
    */
    function addOption(option: IOption) {
        if (filter.value.filter(i => i.id == option.id).length == 0) {
            filter.value.push(option);
        }
    }

    /*
    * remove an option from filter
    */
    function removeOption(option: IOption) {
        const index = filter.value.findIndex(i => i.id == option.id);
        if (index !== -1) {
            filter.value.splice(index, 1);
        }
        if (filter.value.length == 0) productsAfterFilter.value = products;
    }

    /*
    * remove all options from filter
    */
    function clearFilter() {
        filter.value.length = 0;
        productsAfterFilter.value = products;
        sortProduct();
        // paging();
    }

    /*
    * return number of products with each option
    */
    function countProductEachOption(option: IOption): number {
        if (option.value.type == 'category') {
            const productsInCurrentCategory = products.filter(pro => {
                const optionCategory = option.value as IOptionCategory;
                return pro.category == optionCategory.value;
            });
            return productsInCurrentCategory.length;
        } else if (option.value.type == 'price') {
            const productsInCurrentPrice = products.filter(pro => {
                const optionPrice = option.value as IOptionPrice;
                return (optionPrice.min <= pro.newPrice && pro.newPrice <= optionPrice.max)
            });
            return productsInCurrentPrice.length;
        } else {
            return 0;
        }
    }

    /*
    * apply filter
    * this action also sort and paging list product
    */
    function applyFilter() {
        productsAfterFilter.value = products;

        // length of category option in filter
        const numOfCategoryOption = filter.value.filter(option => (option.id <= 2)).length;
        if (numOfCategoryOption > 0) {
            // get products which match width category options
            productsAfterFilter.value = productsAfterFilter.value.filter(pro => {
                for (let i = 0; i < filter.value.length; i++) {
                    if (filter.value[i].id < 3) {
                        const optionCategory = filter.value[i].value as IOptionCategory;
                        if (pro.category == optionCategory.value) return true;
                    }
                }
                return false;
            });
        }

        // length of price option in filter
        const numOfPriceOption = filter.value.filter(option => (option.id > 2)).length;
        if (numOfPriceOption > 0) {
            // get products which match width price options
            productsAfterFilter.value = productsAfterFilter.value.filter(pro => {
                for (let i = 0; i < filter.value.length; i++) {
                    if (filter.value[i].id > 2) {
                        const optionPrice = filter.value[i].value as IOptionPrice;
                        if (optionPrice.min <= pro.newPrice && pro.newPrice <= optionPrice.max) return true;
                    }
                }
                return false;
            });
        }

        sortProduct();
    }

    /*
    * sort function must be called after filter
    */
    function sortProduct() {
        if (sortOption.value === 'price')
            productsAfterFilter.value.sort((a, b) => a.newPrice - b.newPrice);
        if (sortOption.value === 'price revert')
            productsAfterFilter.value.sort((a, b) => b.newPrice - a.newPrice);
        paging(true);
    }

    /*
    * paging(backToFirstPage=true) function must be called after filter
    * backToFirstPage = true when sort, apply filter, change perPage
    */
    function paging(backToFirstPage?: boolean) {
        if (backToFirstPage == true) {
            currentPage.value = 1;
        }
        numberOfPage.value = Math.ceil(productsAfterFilter.value.length / perPage.value);
        currentPage.value = Math.min(currentPage.value, numberOfPage.value);
        from.value = Math.min(perPage.value * (currentPage.value - 1) + 1, productsAfterFilter.value.length);
        to.value = Math.min(perPage.value * currentPage.value, productsAfterFilter.value.length);
        tempProduct.value = productsAfterFilter.value.slice(from.value - 1, to.value);
    }

    return {
        // root data
        products,
        options,

        // filter
        filter,
        addOption,
        removeOption,
        clearFilter,
        countProductEachOption,
        applyFilter,
        productsAfterFilter,

        // sort
        sortProduct,
        sortOption,

        // pagination
        paging,
        numberOfPage,
        perPage,
        currentPage,
        from,
        to,

        // answer after filter, sort, paging
        tempProduct,
    };
});