import './src/css/terminal.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import './src/css/style.scss';
import 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/plugins/command-line/prism-command-line.css';

import React from 'react';
import { ThemeProvider } from './src/js/hooks/use-theme';
import { NavProvider } from './src/js/components/generic/nav/use-nav';

export const wrapPageElement = ({ element }) => {
    return (
        <ThemeProvider>
        <NavProvider defaultItem={-1}>
            { element }
        </NavProvider>
        </ThemeProvider>
    )
}
