import React, { useState, createContext, useContext } from 'react';

export const TabsContext = createContext();

export const TabsProvider = ({ children }) => {
    const [content, setContent] = useState([]);
    const [activeItem, setActiveItem] = useState(0);
    
    const isItemActive = (index) => {
        return index === activeItem;
    }
    
    return (
        <TabsContext.Provider
            value={{
                content,
                setContent,
                activeItem,
                setActiveItem,
                isItemActive
            }}
        >
            { children }
        </TabsContext.Provider>
    )
}

const useTabs = () => useContext(TabsContext);

export default useTabs;
