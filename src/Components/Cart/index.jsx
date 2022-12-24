import { useContext } from "react";

import CustomButton from "../Button";
import { CartModal } from "./styles";

import { StoreItemsContext } from "../../Providers/storeItems";
import api from "../../services/api";

const Cart = ({ finishOrder, setFinishOrder }) => {
	const { order, setOrder, orderNumber, setOrderNumber } =
		useContext(StoreItemsContext);
	const noneSelected = "Nenhum selecionado";
	const submit = (evt) => {
		const selectedOption = evt.target.textContent;

		if (selectedOption === "Cancelar Pedido") {
			setOrder({});
			setOrderNumber("");
			orderNumber.length === 24 && api.delete(`${orderNumber}`);
		} else if (selectedOption === "Finalizar pedido") {
			setFinishOrder(finishOrder + 1);
		}
	};

	return (
		<>
			<CartModal>
				<p id="cartTitle">Seu açaí</p>
				{orderNumber ? (
					<span>{`Número do pedido: ${orderNumber.substring(
						17
					)}`}</span>
				) : null}
				<div className="orderInfo-div">
					<p>Sabor:</p>
					<span>{order.flavor ? order.flavor : noneSelected}</span>
					<p>Tamanho:</p>
					<span>{order.size ? order.size : noneSelected}</span>
					<p>Adicional:</p>
					<span>
						{order.optional ? order.optional : noneSelected}
					</span>
				</div>
				<div className="status-div">
					<div className="status-div_div">
						<p>Valor:</p>
						<span>{}</span>
					</div>
					<div className="status-div_div">
						<p>Tempo de preparo:</p>
						<span>{}</span>
					</div>
				</div>
				<div className="status-div">
					{
						<CustomButton onClick={submit}>
							Cancelar Pedido
						</CustomButton>
					}
					{
						<CustomButton onClick={submit}>
							Finalizar pedido
						</CustomButton>
					}
				</div>
			</CartModal>
		</>
	);
};

export default Cart;
