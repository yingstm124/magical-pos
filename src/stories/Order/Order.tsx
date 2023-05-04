import { Grid, Typography } from "@mui/material";
import Line from "../Line/Line";

interface IOrder {
    image: string;
    name: string;
    price: number;
    amouth: number;
}

function Order({ image, name, price, amouth }: IOrder) {
    return (
        <>
            <Grid
                item
                container
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <Grid item xs={2}>
                    <img width="50" src={image} alt="pic" />
                </Grid>
                <Grid item xs>
                    <Typography variant="subtitle1">{name}</Typography>
                </Grid>
                <Grid item xs={1}>
                    <button style={{ border: 0, cursor: "pointer" }}>-</button>
                </Grid>
                <Grid item xs={1}>
                    <Typography variant="subtitle1">{amouth}</Typography>
                </Grid>
                <Grid item xs={1}>
                    <button style={{ border: 0, cursor: "pointer" }}>+</button>
                </Grid>
                <Grid item xs={2}>
                    <Typography
                        variant="subtitle1"
                        sx={{ color: "common.price" }}
                    >
                        {price * amouth} $
                    </Typography>
                </Grid>
            </Grid>
            <Line />
        </>
    );
}
export default Order;
