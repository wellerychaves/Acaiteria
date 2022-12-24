import { StoreItemsProvider } from "./storeItems/";

const Providers = ({ children }) => {
	return <StoreItemsProvider>{children}</StoreItemsProvider>;
};

export default Providers;
