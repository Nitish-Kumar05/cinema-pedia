import { ThemeProvider } from "styled-components";

const theme = {
    fontFamily: 'Roboto, sans-serif',
    mainColors: {
        blue: '#2400ff',
        gray: '#c6c6c6',
        dark: '#353535',
    },
};

export const GlobalTheme = ({ children }) => {
    return <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
}