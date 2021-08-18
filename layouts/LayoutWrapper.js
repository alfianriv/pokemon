import DefaultLayout from "./DefaultLayout";
import DetailLayout from "./DetailLayout";

const layouts = {
	default: DefaultLayout,
	detail: DetailLayout,
};

const LayoutWrapper = (props) => {
	const Layout = layouts[props.children.type.layout];

	if(Layout) {
		return <Layout {...props}>{props.children}</Layout>;
	}
	return <DefaultLayout {...props}>{props.children}</DefaultLayout>;
};

export default LayoutWrapper;
