import { useContext } from "react";
import { useForm } from "react-hook-form";
import { StoreItemsContext } from "../../Providers/storeItems";

import { Blackout, ModalForm, ModalInput } from "./style";

const EmailModal = ({ setEmailModalActive }) => {
	const { order, setOrder } = useContext(StoreItemsContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		data && setEmailModalActive(false);
		setOrder({
			...order,
			...data,
		});
	};

	return (
		<Blackout>
			<ModalForm onSubmit={handleSubmit(onSubmit)}>
				<p className="form-message">
					Por favor, insira o seu E-mail no campo abaixo para que
					possamos lhe enviar informações a respeito do seu pedido.
				</p>
				<div className="form-div">
					<ModalInput
						className={`${errors.email ? "error" : null}`}
						{...register("email", {
							required: true,
							pattern:
								/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
						})}
					/>
					{errors.email ? (
						<span className="errorSpan">
							O e-mail é obrigatório.
						</span>
					) : null}
					<input className="form-submit" type="submit" />
				</div>
			</ModalForm>
		</Blackout>
	);
};

export default EmailModal;
