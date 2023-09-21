import "../styles/globals.css";

export const metadata = {
    title: "Codify",
    description: "A blogging site to help you stay updated with the last trends in programming."
}

const RootLayout = ({children}) => {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
};

export default RootLayout;
