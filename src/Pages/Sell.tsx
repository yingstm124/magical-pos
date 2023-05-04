import {
    Breadcrumbs,
    Grid,
    Link,
    Dialog,
    DialogContent,
    Button,
    Typography,
} from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { MenuModel } from "../Models/Menu";
import MenuCard from "../stories/MenuCard/MenuCard";
import ProductCard from "../stories/ProductCard/ProductCard";
import OrderCard from "../stories/OrderCard/OrderCard";
import Line from "../stories/Line/Line";
import { orders } from "../Data/orders";
import { ProductType } from "../Models/ProductType";
import { products } from "../Data/products";
import ProductModel from "../Models/Product";
import Receipt from "../stories/Receipt/Receipt";
import { PaymentType } from "../Models/PaymentType";

const menus: MenuModel[] = [
    {
        productType: "book",
    },
    {
        productType: "clothing",
    },
    {
        productType: "potion",
    },
    {
        productType: "sweet-trolley",
    },
    {
        productType: "wand",
    },
];

function Sell() {
    const productMap = useMemo(() => {
        let temps = new Map<ProductType, ProductModel[]>();
        products.forEach((p) => {
            if (!temps.has(p.menuType)) {
                temps.set(p.menuType, [p]);
            } else {
                let existFoods = temps.get(p.menuType);
                existFoods?.push(p);
                temps.set(p.menuType, existFoods ?? []);
            }
        });
        return temps;
    }, []);

    const [selectedMenu, setSelectedMenu] = useState<ProductType>("book");
    const [selectedPayment, setSelectedPayment] = useState<PaymentType>("cash");

    const displayProducts = useMemo<ProductModel[]>(
        () => productMap.get(selectedMenu) ?? [],
        [selectedMenu, productMap]
    );

    const [openReceipt, setOpenReceipt] = useState<boolean>(false);

    const onPrintBill = useCallback(() => {
        setOpenReceipt(true);
    }, []);

    return (
        <>
            <Grid container my={4}>
                <Grid item container direction="column" xs>
                    <Grid item>
                        <Breadcrumbs
                            separator="-"
                            sx={{ color: "primary.light" }}
                        >
                            [<Link>Home</Link>,<Link>Main 🦉</Link>]
                        </Breadcrumbs>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs>
                    <Grid item container direction="column">
                        <Grid
                            item
                            xs
                            container
                            justifyContent="center"
                            spacing={2}
                        >
                            {menus.map((m, index) => (
                                <Grid item xs>
                                    <MenuCard
                                        key={`menu-${index}`}
                                        name={m.productType}
                                        isSelected={
                                            selectedMenu === m.productType
                                        }
                                        onClick={() =>
                                            setSelectedMenu(m.productType)
                                        }
                                    />
                                </Grid>
                            ))}
                        </Grid>
                        <Grid item container xs justifyContent="center" my={4}>
                            <Grid
                                item
                                xs
                                container
                                justifyContent="center"
                                spacing={2}
                            >
                                {displayProducts.map((p, index) => (
                                    <Grid item xs>
                                        <ProductCard
                                            key={`food-${index}`}
                                            image={p.imag}
                                            name={p.name}
                                            price={p.price}
                                            recommend={p.recommend}
                                            sold={p.sold}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={4}>
                    <OrderCard
                        orders={orders}
                        selectedPayment={(val) => setSelectedPayment(val)}
                        onPrintBill={onPrintBill}
                    />
                </Grid>

                {openReceipt && (
                    <Dialog open={true} fullWidth>
                        <Receipt
                            paymentType={selectedPayment}
                            onClose={() => setOpenReceipt(false)}
                        />
                    </Dialog>
                )}
            </Grid>
        </>
    );
}
export default Sell;
