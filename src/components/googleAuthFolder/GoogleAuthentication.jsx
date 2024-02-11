import { Button } from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";
const GoogleAuthentication = () => {
	return (
		<div className="flex flex-wrap justify-center">
			<Button className="flex items-center gap-4  p-2 md:text-lg font-thin rounded ">
				<FcGoogle size={25} />
				join with google
			</Button>
		</div>
	);
};

export default GoogleAuthentication;
