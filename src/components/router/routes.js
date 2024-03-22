import { ItemListContainer } from "../pages/ItemListContainer/ItemListContainer";
import { CartContainer } from "../pages/cart/CartContainer";
import { CheckoutContainer } from "../pages/checkout/CheckoutContainer";
import { ItemDetailContainer } from "../pages/itemDetailContainer/ItemDetailContainer";

export const routes = [
    {
        id: "home",
        path: "/",
        Element: ItemListContainer
    },
    {
        id: "category",
        path: "/category/:category",
        Element: ItemListContainer
    },
    {
        id: "detail",
        path: "/item/:id",
        Element: ItemDetailContainer
    },
    {
        id: "cart",
        path: "/cart",
        Element: CartContainer
    },
    {
        id: "checkout",
        path: "/checkout",
        Element: CheckoutContainer
    },
]