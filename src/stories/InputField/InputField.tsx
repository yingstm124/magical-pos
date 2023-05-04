import { TextField } from "@mui/material";
import { useState } from "react";

interface IInputField {
    label: string;
    isRequired?: boolean;
    type: "text" | "email";
}
const emailExpression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

function InputField({ type = "text", isRequired = false, label }: IInputField) {
    const [errorMessage, setErrorMessage] = useState<string | undefined>();

    const handleChange = (event: any) => {
        const val = event.target.value;

        if (isRequired && val === "") {
            setErrorMessage("Required");
            return;
        }
        if (type === "email" && !emailExpression.test(val)) {
            setErrorMessage("Email invalid.");
            return;
        }

        setErrorMessage(undefined);
    };

    return (
        <TextField
            id="textField"
            sx={{ input: { color: "primary.light" } }}
            type={type}
            required={isRequired}
            label={label}
            variant="filled"
            helperText={errorMessage}
            onChange={handleChange}
            error={errorMessage !== undefined}
        />
    );
}
export default InputField;
