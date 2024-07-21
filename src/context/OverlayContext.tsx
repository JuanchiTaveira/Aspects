import React, { createContext, useContext, useState, ReactNode } from 'react';

const OverlayContext = createContext({
	isActive: false,
	toggleOverlay: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useOverlay = () => useContext(OverlayContext);

interface OverlayProviderProps {
	children: ReactNode;
}

export const OverlayProvider: React.FC<OverlayProviderProps> = ({ children }) => {
	const [isActive, setIsActive] = useState(false);

	const toggleOverlay = () => {
		setIsActive(!isActive);
	};

	return (
		<OverlayContext.Provider value={{ isActive, toggleOverlay }}>
			{children}
		</OverlayContext.Provider>
	);
};