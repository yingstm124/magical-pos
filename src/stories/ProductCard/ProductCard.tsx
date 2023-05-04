import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    Grid,
    Typography,
} from "@mui/material";

interface IProductCard {
    image: string;
    name: string;
    price: number;
    recommend?: boolean;
    sold?: boolean;
    canDelete?: boolean;
    canManage?: boolean;
}

function ProductCard({
    image,
    name,
    price,
    recommend = false,
    sold = false,
    canDelete = false,
}: IProductCard) {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Card
                variant="elevation"
                style={{ width: "100%", maxWidth: 240, position: "relative" }}
            >
                {recommend && (
                    <div>
                        <Box
                            sx={{
                                width: 30,
                                height: 30,
                                right: 20,
                                top: 20,
                                position: "absolute",
                                zIndex: 2,
                                backgroundColor: "common.highlight",
                                transform: "rotatez(45deg)",
                                "&:before, &:after": {
                                    content: '""',
                                    width: 30,
                                    height: 30,
                                    right: 0,
                                    top: 0,
                                    position: "absolute",
                                    zIndex: 3,
                                    backgroundColor: "common.highlight",
                                },
                                "&:before": {
                                    transform: "rotatez(60deg)",
                                },
                                "&:after": {
                                    transform: "rotatez(-60deg)",
                                },
                            }}
                        />
                        <Typography
                            variant="subtitle2"
                            position="absolute"
                            color="white"
                            zIndex={4}
                            top={23}
                            right={25}
                        >
                            Hot
                        </Typography>
                    </div>
                )}

                {sold && (
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            zIndex: 3,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: sold ? "no-drop" : "pointer",
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                transform: "rotate(-25deg)",
                                borderRadius: 2,
                                color: "common.white",
                                backgroundColor: "common.sold"
                            }}
                            p={1}
                        >
                            Sold out
                        </Typography>
                    </Box>
                )}

                <Grid item xs>
                    <CardActionArea
                        style={{
                            minWidth: 200,
                            minHeight: 250,
                        }}
                        disabled={sold ? true : false}
                    >
                        <CardContent>
                            <Grid item container justifyContent="center">
                                <img
                                    src={image}
                                    alt="aaa"
                                    style={{ maxWidth: 100 }}
                                />
                            </Grid>
                            <Grid item container justifyContent="center" mt={3}>
                                <Typography variant="body1">{name}</Typography>
                            </Grid>
                            <Grid item container justifyContent="center">
                                <Typography
                                    variant="h6"
                                    sx={{ color: "common.price" }}
                                >{`${price} $`}</Typography>
                            </Grid>

                            {canDelete && (
                                <Grid item xs>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        color="error"
                                    >
                                        Del
                                    </Button>
                                </Grid>
                            )}
                        </CardContent>
                    </CardActionArea>
                </Grid>
            </Card>
        </Grid>
    );
}
export default ProductCard;
