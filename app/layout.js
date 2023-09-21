import "../styles/globals.css";
import { ThemeProvider } from "./theme-provider";

export const metadata = {
    title: "Codify",
    description: "A blogging site to help you stay updated with the last trends in programming."
}

const RootLayout = ({children}) => {
    return (
        <html lang="en">
            <body>
                <ThemeProvider attribute="class">
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
};

export default RootLayout;
