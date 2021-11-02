import React from 'react';
import { TabsProvider } from './use-tabs';
import TabsRaw from './tabs-raw';

const Tabs = ({ children }) => {
    return (
        <TabsProvider>
            <TabsRaw>
                { children }
            </TabsRaw>
        </TabsProvider>
    )
}

export default Tabs;
