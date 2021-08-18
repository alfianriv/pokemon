import Link from "next/link";

const TabBottom = () => {
	return (
		<div style={{height: 50}} className="flex items-center justify-around fixed bottom-0 inset-x-0 z-10 bg-white text-2xl shadow-xl border-t">
			<Link href={"/"}>
				<a>
					<i className="las la-home"></i>
				</a>
			</Link>
			<Link href={"/pokedex/my"}>
				<a>
					<i className="las la-archive"></i>
				</a>
			</Link>
		</div>
	);
};

export default TabBottom;
