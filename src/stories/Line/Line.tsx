import { Box } from "@mui/material";

type BoderStyleType = 'dashed' | 'solid'

interface ILine {
    borderStyle? : BoderStyleType
}

function Line({ borderStyle = 'dashed' } : ILine) {
    return <Box my={2} sx={{ border: `2px ${borderStyle}`, borderColor: "#D4AD72" }} />;
}
export default Line