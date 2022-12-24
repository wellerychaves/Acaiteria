import styled from "styled-components";

export const Box = styled.div`
	width: 300px;
	height: 900px;
	border-radius: 5px;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;

	.box-title {
		font-size: 1rem;
		margin: 0 auto;
	}

	@media screen and (min-width: 900px) {
		width: 900px;
		height: 300px;

		margin-bottom: 50px;
	}
`;

export const Form = styled.form`
	width: 100%;
	height: 800px;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;

	.map-div {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.checkbox-div {
		width: 220px;
		height: 220px;
		cursor: pointer;
		user-select: none;
		position: relative;
		border-radius: 5px;
		border: 1px solid var(--purple);

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.form-checkbox {
		width: 15px;
		height: 15px;
		position: absolute;
		right: 10px;
		top: 10px;
		cursor: pointer;
		user-select: none;
		border-radius: 10px;
	}

	.item-image {
		object-fit: contain;
		max-width: 100%;
		max-height: 80%;
		user-select: none;
	}

	.checkbox-label {
		margin-top: 2px;
		font-family: var(--imprima);
		font-size: 1.1rem;
	}

	.submitButton {
		cursor: pointer;
		margin-top: 15px;
		padding: 5px 10px;
		border-radius: 3px;
		border: 1px solid var(--purple);
		background-color: var(--white);
	}

	@media screen and (min-width: 900px) {
		width: 900px;
		height: 300px;
		flex-direction: row;
	}
`;
