import styled from "styled-components";

export const CustomHeader = styled.header`
	width: 100vw;
	height: 80px;
	padding: 0 30px;
	background-color: var(--purple);

	display: flex;
	align-items: center;
	justify-content: space-between;

	@media screen and (min-width: 700px) {
		justify-content: space-around;
	}
`;

export const StoreLogo = styled.p`
	font-size: 2rem;
	user-select: none;
	color: var(--white);
	font-family: var(--leckerli);
`;
