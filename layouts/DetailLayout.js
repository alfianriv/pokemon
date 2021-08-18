import TabBottom from "../components/TabBottom";


const DetailLayout = ({ children }) => {
	return (
		<div className="flex flex-col overflow-x-hidden relative">
			
			{children}
			<TabBottom></TabBottom>
		</div>
	);
};

export default DetailLayout;
