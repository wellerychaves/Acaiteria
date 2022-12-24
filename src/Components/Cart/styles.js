import styled from "styled-components";

export const CartModal = styled.div`
	width: 95%;
	max-width: 400px;
	height: 400px;
	border-radius: 5px;
	top: 85px;
	position: absolute;
	font-family: var(--imprima);
	background-color: var(--white);
	border: 1px solid var(--purple);

	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-evenly;

	span {
		font-size: 1.1rem;
	}

	#cartTitle {
		font-size: 1.5rem;
		font-weight: 600;
	}

	.orderInfo-div {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin-left: 5rem;
	}

	.orderInfo-div p {
		font-size: 1.2rem;
		font-weight: 600;
		margin-bottom: 3px;
	}

	.orderInfo-div span {
		margin-left: 30px;
		margin-bottom: 10px;
	}

	.status-div {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
	}
	.status-div_div {
		gap: 10px;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.status-div_div p {
		font-size: 1.2rem;
		font-weight: 600;
		margin-bottom: 3px;
	}
`;
