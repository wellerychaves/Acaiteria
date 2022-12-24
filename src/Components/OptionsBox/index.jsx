import { useState } from "react";
import { useForm } from "react-hook-form";

import { useContext } from "react";
import { StoreItemsContext } from "../../Providers/storeItems";

const OptionsBox = ({ item }) => {
	const { flavors, cupSizes, optionals } = useContext(StoreItemsContext);

	const [isChecked, setIsChecked] = useState("");
	const [order, setOrder] = useState({});

	const text = "Selecione um de sua preferência";

	const { register, handleSubmit } = useForm();

	const onSubmit = () => {
		const selected = flavors[isChecked].name;
		if (flavors.name.include(selected)) {
		}
		setOrder(flavors[isChecked].name);
	};

	const selectors = () => {
		return item === "flavors"
			? flavors
			: item === "size"
			? cupSizes
			: optionals;
	};

	/* return (
		<Box>
			<h2 className="box-title">{text}</h2>
			<Form onSubmit={handleSubmit(onSubmit)}>
				{selectors().map((item, index) => {
					return (
						<div className="map-div" key={index}>
							<div
								onClick={() => setIsChecked(index)}
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
				<input type="submit" />
			</Form>
		</Box>
	); */
};

export default OptionsBox;
