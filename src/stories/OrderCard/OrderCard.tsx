import { Button, Card, Grid, Typography } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PaymentIcon from "@mui/icons-material/Payment";
import { ReactNode, useState } from "react";
import { OrderModel } from "../../Models/Order.model";
import Order from "../Order/Order";
import { PaymentType } from "../../Models/PaymentType";
import InputField from "../InputField/InputField";

interface IOrderCard {
    orders: OrderModel[];
    selectedPayment?: (val: PaymentType) => void;
    onPrintBill?: () => void;
}

function OrderCard({ orders = [], selectedPayment, onPrintBill }: IOrderCard) {
    const [selectPayment, setSelectPayment] = useState<PaymentType>("cash");

    const paymentMethodOptions = [
        {
            iconPayment: <MonetizationOnIcon />,
            value: "cash",
        },
        {
            iconPayment: <PaymentIcon />,
            value: "card",
        },
        {
            iconPayment: <PaymentIcon />,
            value: "e-wallet",
        },
    ] as { iconPayment: ReactNode; value: PaymentType }[];

    return (
        <Card>
            <Grid item direction="column" container>
                <Grid item container xs justifyContent="space-between" p={4}>
                    <Grid item>
                        <Typography variant="h6">Current Order</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined">Clear all</Button>
                    </Grid>
                </Grid>
                <Grid item container direction="column" px={1}>
                    {orders.map((o) => (
                        <Order {...o} />
                    ))}

                    <Grid
                        item
                        container
                        direction="column"
                        mt={6}
                        p={2}
                        sx={{
                            border: 2,
                            borderColor: "primary.light",
                            color: "primary.main",
                            borderRadius: 3,
                        }}
                    >
                        <Grid item justifyContent="space-between" container>
                            <Grid item>Subtotal</Grid>
                            <Grid item>$100</Grid>
                        </Grid>
                        <Grid item justifyContent="space-between" container>
                            <Grid item>Discounts</Grid>
                            <Grid item>-$80</Grid>
                        </Grid>
                        <Grid item justifyContent="space-between" container>
                            <Grid item>Tax(12%)</Grid>
                            <Grid item>$11</Grid>
                        </Grid>
                        <Grid
                            item
                            justifyContent="space-between"
                            container
                            mt={4}
                        >
                            <Grid item>
                                <Typography variant="h4">Total</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h4">$93</Typography>
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid item mt={2} container direction="column" spacing={2}>
                        <Grid item>
                            <Typography variant="h6">Buyer Info</Typography>
                        </Grid>
                        <Grid item>
                            <InputField
                                type="text"
                                label="Name"
                                isRequired={true}
                            />
                        </Grid>
                        <Grid item>
                            <InputField
                                type="email"
                                isRequired={true}
                                label="email"
                            />
                        </Grid>
                    </Grid>

                    <Grid item container direction="column" mt={6}>
                        <Grid item py={2}>
                            <Typography variant="h6" align="center">
                                Payment Method
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            container
                            spacing={1}
                            justifyContent="center"
                        >
                            {paymentMethodOptions.map((i, index) => (
                                <Grid item>
                                    <Button
                                        key={`payment-method-option-${index}`}
                                        variant={
                                            i.value === selectPayment
                                                ? "contained"
                                                : "outlined"
                                        }
                                        sx={{ width: 110 }}
                                        onClick={() => {
                                            setSelectPayment(i.value);
                                            selectedPayment &&
                                                selectedPayment(i.value);
                                        }}
                                    >
                                        <Grid item container direction="column">
                                            <Grid item>{i.iconPayment}</Grid>
                                            <Grid item>{i.value}</Grid>
                                        </Grid>
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    {onPrintBill && (
                        <Grid item mt={4} mb={2}>
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    color: "primary.light",
                                    backgroundColor: "secondary.main",
                                }}
                                onClick={onPrintBill}
                            >
                                Print bills
                            </Button>
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </Card>
    );
}
export default OrderCard;
