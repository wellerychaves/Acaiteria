import styled from "styled-components";

export const Blackout = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: var(--black-transparent);

	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	left: 0;
	z-index: 1;
`;

export const ModalForm = styled.form`
	width: 90%;
	max-width: 500px;
	height: 250px;
	padding: 20px;
	border-radius: 5px;
	background-color: var(--white);
	display: flex;
	flex-direction: column;

	.form-message {
		margin: 0 auto;
		font-size: 0.8rem;
		text-align: justify;
		font-weight: 600;
		user-select: none;
	}

	.form-div {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		width: 100%;
		margin-top: 1rem;
	}

	.errorSpan {
		color: red;
		font-weight: 600;
		font-size: 0.8rem;
	}

	.form-submit {
		margin-top: 5px;
		width: fit-content;
		padding: 5px 10px;
		border: 1px solid var(--purple);
		border-radius: 3px;
	}

	.form-submit:active {
	}

	.error {
		border: 1px solid red;
	}
`;

export const ModalInput = styled.input`
	height: 40px;
	border-radius: 3px;
	padding-left: 10px;
	border: 1px solid var(--purple);
	margin: 5px 0;
`;
