import {
    AppBar,
    Container,
    Grid,
    Toolbar,
    Typography,
} from "@mui/material";
import { ReactNode } from "react";
import Divider from "../assets/divider.svg";
import Dot from "../assets/dot.svg";

interface IAppbar {
    title: string;
    subTitle?: string;
    children: ReactNode;
}

function Appbar({ title, subTitle, children }: IAppbar) {
    return (
        <>
            <AppBar
                component="nav"
                position="sticky"
                style={{ zIndex: 98 }}
                sx={{
                    backgroundColor: "common.black",
                    borderBottom: "5px solid",
                    borderColor: "primary.light"
                }}
            >
                <Toolbar>
                    <Grid
                        item
                        container
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        my={6}
                    >
                        <Grid item>
                            <Typography variant="h4" fontFamily="Kalam">
                                {title}
                            </Typography>
                        </Grid>
                        {subTitle && (
                            <Grid item py={2}>
                                {subTitle}
                            </Grid>
                        )}
                    </Grid>
                </Toolbar>
            </AppBar>
            <Toolbar>
                <Grid container justifyContent="center" spacing={4} xs={12}>
                    <Grid item>
                        <img src={Divider} alt="divider" style={{ maxWidth: 100 }}/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" fontFamily={"Kalam"}>
                            Home
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" fontFamily={"Kalam"}>
                            <img src={Dot} alt="dot" /> Best Sellers
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" fontFamily={"Kalam"}>
                            <img src={Dot} alt="dot" /> Collections
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img
                            src={Divider}
                            alt="divider"
                            style={{ maxWidth: 100,transform: "scaleX(-1)" }}
                        />
                    </Grid>
                </Grid>
            </Toolbar>
            <Container>{children}</Container>
        </>
    );
}
export default Appbar;
