import React from "react";
import { CustomHeader, StoreLogo } from "./style";
import CustomButton from "../Button";

import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = ({ cartIsOpen, setCartIsOpen }) => {
	const openAndCloseCart = () => {
		setCartIsOpen(!cartIsOpen);
	};

	return (
		<CustomHeader>
			<StoreLogo>Açaí</StoreLogo>
			<CustomButton onClick={openAndCloseCart}>
				{<AiOutlineShoppingCart />}
			</CustomButton>
		</CustomHeader>
	);
};

export default Header;
