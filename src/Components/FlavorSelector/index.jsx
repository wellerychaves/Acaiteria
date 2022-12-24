import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { StoreItemsContext } from "../../Providers/storeItems";
import { Box, Form } from "../../styles/selectorsStyle";

const FlavorSelector = () => {
	const { order, setOrder, flavors } = useContext(StoreItemsContext);
	const { register, handleSubmit } = useForm();

	const [isChecked, setIsChecked] = useState("");
	const text = "Selecione o sabor de sua preferência";

	const autoSubmit = (index) => {
		setIsChecked(index);

		if (order.flavors !== undefined) {
			order.flavor = flavors[index].name;
		} else {
			const selected = { flavor: flavors[index].name };
			setOrder({
				...order,
				...selected,
			});
		}
	};

	return (
		<Box>
			<h2 className="box-title">{text}</h2>
			<Form onSubmit={handleSubmit(autoSubmit)}>
				{flavors.map((item, index) => {
					return (
						<div className="map-div" key={index}>
							<div
								onClick={() => autoSubmit(index)}
								className="checkbox-div"
							>
								<input
									type="checkbox"
									className="form-checkbox"
									{...register(item.name, {})}
									checked={isChecked === index}
									onChange={() => setIsChecked(index)}
								/>
								<img
									src={item.photo}
									alt={item.name}
									className="item-image"
								/>
							</div>
							<label className="checkbox-label">
								{item.name}
							</label>
						</div>
					);
				})}
			</Form>
		</Box>
	);
};

export default FlavorSelector;
