import React, { useState, createContext, useContext } from 'react';

export const NavContext = createContext();

export const NavProvider = ({ children, defaultItem }) => {
    const [activeItem, setActiveItem] = useState(defaultItem);

    const isItemActive = (index) => {
        return index === activeItem;
    }

    return (
        <NavContext.Provider
            value={{
                isItemActive,
                setActiveItem,
                activeItem,
            }}
        >
            { children }
        </NavContext.Provider>
    )
}

NavProvider.defaultProps = {
    defaultItem: 0
}

const useNav = () => useContext(NavContext);

export default useNav;
