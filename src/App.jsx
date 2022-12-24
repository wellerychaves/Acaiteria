import { useContext, useState, useEffect } from "react";

import AdditionalSelector from "./Components/AdditionalSelector";
import Cart from "./Components/Cart";
import CupSizeSelector from "./Components/CupSizeSelector";
import EmailModal from "./Components/EmailModal";
import FlavorSelector from "./Components/FlavorSelector";
import Header from "./Components/Header";

import api from "./services/api";
import { StoreItemsContext } from "./Providers/storeItems";

const App = () => {
	const { order, orderNumber, setOrderNumber } =
		useContext(StoreItemsContext);

	/* ativa e desativa o modal de e-mail */
	const [emailModalActive, setEmailModalActive] = useState(true);
	/* ativa e desativa o modal de carrinho */
	const [cartIsOpen, setCartIsOpen] = useState(false);
	/* atualiza o useEffect que verifica e chama função de atualizar pedido */
	const [finishOrder, setFinishOrder] = useState(0);

	useEffect(() => {
		Object.keys(order).length === 3 && sendToDatabase();
	}, [order]);

	useEffect(() => {
		Object.keys(order).length === 4 && updateOrder();
	}, [finishOrder]);

	/* Função que envia para a api o pedido e grava o id do pedido */
	async function sendToDatabase() {
		await api
			.post("", order)
			.then((response) => setOrderNumber(response.data.id))
			.catch((error) => console.error(error));
	}

	/* Função para atualizar o pedido caso algum adicional seja adicionado. */
	async function updateOrder() {
		api.put(`${orderNumber}`, order).catch((err) => console.error(err));
	}

	return (
		<>
			{emailModalActive ? (
				<EmailModal setEmailModalActive={setEmailModalActive} />
			) : null}
			<Header cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen} />
			<main id="main-content">
				<h1>Monte o seu açaí</h1>
				<FlavorSelector />
				<CupSizeSelector />
				<AdditionalSelector />
				{cartIsOpen ? (
					<Cart
						finishOrder={finishOrder}
						setFinishOrder={setFinishOrder}
						setCartIsOpen={setCartIsOpen}
					/>
				) : null}
			</main>
		</>
	);
};

export default App;
