import { ReactNode } from "react";
import Appbar from "../stories/Appbar/Appbar";

function PosLayout({ children }: {children: ReactNode}) {

    return (
        <Appbar title="🧙‍♂️ ~ Welcome to the magical world ~ 🔮">
            {children}
        </Appbar>
    );
}
export default PosLayout;
