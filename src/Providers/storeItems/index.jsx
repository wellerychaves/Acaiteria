import { createContext, useState } from "react";

import strawberry from "../../assets/images/flavors/Strawberry.png";
import banana from "../../assets/images/flavors/Banana.png";
import kiwi from "../../assets/images/flavors/Kiwi.png";

import cup from "../../assets/images/cups/Large.svg";

import granola from "../../assets/images/optionals/Granola.png";
import peanut from "../../assets/images/optionals/Peanut candy.png";
import milk from "../../assets/images/optionals/Powdered Milk.png";

export const StoreItemsContext = createContext([]);

export const StoreItemsProvider = ({ children }) => {
	const flavors = [
		{ name: "Morango", photo: strawberry },
		{ name: "Banana", photo: banana },
		{ name: "Kiwi", photo: kiwi },
	];

	const cupSizes = [
		{ name: "Pequeno", photo: cup },
		{ name: "Médio", photo: cup },
		{ name: "Grande", photo: cup },
	];

	const optionals = [
		{ name: "Granola", photo: granola },
		{ name: "Paçoca", photo: peanut },
		{ name: "Leite Ninho", photo: milk },
	];

	const [order, setOrder] = useState({});
	const [orderNumber, setOrderNumber] = useState("");

	return (
		<StoreItemsContext.Provider
			value={{
				order,
				setOrder,
				orderNumber,
				setOrderNumber,
				flavors,
				cupSizes,
				optionals,
			}}
		>
			{children}
		</StoreItemsContext.Provider>
	);
};
