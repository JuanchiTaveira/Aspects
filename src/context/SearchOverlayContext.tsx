import React, { createContext, useContext, useState, ReactNode } from 'react';

const SearchOverlayContext = createContext({
	isActiveSearch: false,
	toggleSearchOverlay: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useSearchOverlay = () => useContext(SearchOverlayContext);

interface OverlayProviderProps {
	children: ReactNode;
}

export const OverlayProvider: React.FC<OverlayProviderProps> = ({ children }) => {
	const [isActive, setIsActive] = useState(false);

	const toggleSearchOverlay = () => {
		setIsActive(!isActive);
	};

	return (
		<SearchOverlayContext.Provider value={{ isActiveSearch: isActive, toggleSearchOverlay: toggleSearchOverlay }}>
			{children}
		</SearchOverlayContext.Provider>
	);
};