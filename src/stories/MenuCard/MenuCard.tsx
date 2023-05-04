import {
    Card,
    CardActionArea,
    CardContent,
    Grid,
    Typography,
} from "@mui/material";
import { useMemo } from "react";
import { ProductType } from "../../Models/ProductType";

import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ScienceIcon from '@mui/icons-material/Science';
import CakeIcon from '@mui/icons-material/Cake';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

interface IMenuCard {
    name: ProductType;
    isSelected?: boolean;
    onClick: () => void
}

function MenuCard({ onClick, isSelected = false, name }: IMenuCard) {
    const menuIcon = useMemo(() => {
        switch(name){
            case 'book':
                return <AutoStoriesIcon color="primary" fontSize="large"/>
            case 'clothing':
                return <CheckroomIcon color="primary" fontSize="large"/>
            case 'potion':
                return <ScienceIcon color="primary" fontSize="large"/>
            case 'sweet-trolley':
                return <CakeIcon color="primary" fontSize="large"/>
            case 'wand':
                return <AutoFixHighIcon color="primary" fontSize="large"/>
            default:
                return <AutoStoriesIcon color="primary" fontSize="large"/>
        }
    },[name])
    
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Card
                style={{ width: "100%", maxWidth: 250 }}
                sx={{
                    border: isSelected ? "3px solid" : "0px",
                    borderColor: "primary.main",
                }}
            >
                <Grid item xs>
                    <CardActionArea onClick={onClick}>
                        <CardContent>
                            <Grid item container justifyContent="center">
                                {menuIcon}
                            </Grid>
                            <Grid item container justifyContent="center" mb={2}>
                                <Typography variant="body1">{name}</Typography>
                            </Grid>
                        </CardContent>
                    </CardActionArea>
                </Grid>
            </Card>
        </Grid>
    );
}
export default MenuCard;
