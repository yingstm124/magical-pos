import { Button, DialogContent, Grid, Typography } from "@mui/material";
import Line from "../Line/Line";
import { PaymentType } from "../../Models/PaymentType";

interface IReceipt {
    paymentType: PaymentType;
    onClose?: () => void;
}

function Receipt({ paymentType, onClose }: IReceipt) {
    return (
        <DialogContent
            sx={{
                height: 600,
                backgroundColor: "common.black",
                color: "#D4AD72",
            }}
        >
            <Grid container direction="column" spacing={1}>
                <Grid item container justifyContent="end">
                    <Button sx={{ color: "white" }} onClick={onClose}>
                        X
                    </Button>
                </Grid>
                <Grid item>
                    <Typography align="center" variant="h4" fontFamily="Kalam">
                        Receipt
                    </Typography>
                </Grid>
                <Grid item>
                    <Line />
                </Grid>
                <Grid item container justifyContent="space-between">
                    <Grid item>Date</Grid>
                    <Grid item>12/01/2022 12:00PM</Grid>
                </Grid>
                <Grid item container justifyContent="space-between">
                    <Grid item>Cashier</Grid>
                    <Grid item>Sutimar</Grid>
                </Grid>
                <Grid item>
                    <Line borderStyle="solid" />
                </Grid>
                <Grid item container justifyContent="space-between">
                    <Grid item>Item A</Grid>
                    <Grid item>$5</Grid>
                </Grid>
                <Grid item container justifyContent="space-between">
                    <Grid item>Item B</Grid>
                    <Grid item>$5</Grid>
                </Grid>
                <Grid item>
                    <Line borderStyle="solid" />
                </Grid>
                <Grid item container justifyContent="space-between">
                    <Grid item>Total</Grid>
                    <Grid item>$10</Grid>
                </Grid>
                <Grid item>
                    <Line />
                </Grid>
                {paymentType === "cash" && (
                    <Grid item container justifyContent="space-between">
                        <Grid item>━☆・*。</Grid>
                        <Grid item>Cash</Grid>
                    </Grid>
                )}
                {paymentType === "card" && (
                    <Grid item container justifyContent="space-between">
                        <Grid item>━☆・*。</Grid>
                        <Grid item>Bank account : xxxxxxxxxxxxxxxx</Grid>
                    </Grid>
                )}
                {paymentType === "e-wallet" && (
                    <Grid item container justifyContent="space-between">
                        <Grid item>━☆・*。</Grid>
                        <Grid item>E-wallet : 123445</Grid>
                    </Grid>
                )}
                <Grid item>
                    <Line />
                </Grid>
                <Grid item>
                    <Typography variant="h6" fontFamily="Kalam" align="center">
                        Thank you for shopping
                    </Typography>
                </Grid>
            </Grid>
        </DialogContent>
    );
}
export default Receipt;
