import React from 'react';
import { NavProvider } from './src/js/components/generic/nav/use-nav';
import { ThemeProvider } from './src/js/hooks/use-theme';

export const wrapPageElement = ({ element }) => {
    return (
        <ThemeProvider>
        <NavProvider defaultItem={-1}>
            { element }
        </NavProvider>
        </ThemeProvider>
    )
}
