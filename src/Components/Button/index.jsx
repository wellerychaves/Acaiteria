import { Button } from "./styled";

const CustomButton = ({ onClick, type = "button", children }) => {
	return (
		<Button onClick={onClick} type={type}>
			{children}
		</Button>
	);
};

export default CustomButton;
