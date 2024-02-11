import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Tooltip,
} from "@material-tailwind/react";

const SelectCountry = () => {
	return (
		<div className="bg-teal-200 flex flex-col gap-4">
			<div>
				<h1 className="text-center">SelectCountry</h1>
			</div>
			<div className="flex justify-around">
				<Card className="w-96 bg-deep-orange-100">
					<CardHeader floated={false} className="h-80 ">
						<img
							src="https://images.news18.com/ibnlive/uploads/2023/05/new-parliament-building.jpg"
							alt="profile-picture"
						/>
					</CardHeader>
					<CardBody className="text-center ">
						<Typography variant="h4" color="blue-gray" className="mb-2">
							INDIA
						</Typography>
					</CardBody>
					<CardFooter className="flex justify-center gap-7 pt-2">
						<Tooltip content="Like">
							<Typography
								as="a"
								href="#facebook"
								variant="lead"
								color="blue"
								textGradient
							>
								<i className="fab fa-facebook" />
							</Typography>
						</Tooltip>
						<Tooltip content="Follow">
							<Typography
								as="a"
								href="#twitter"
								variant="lead"
								color="light-blue"
								textGradient
							>
								<i className="fab fa-twitter" />
							</Typography>
						</Tooltip>
						<Tooltip content="Follow">
							<Typography
								as="a"
								href="#instagram"
								variant="lead"
								color="purple"
								textGradient
							>
								<i className="fab fa-instagram" />
							</Typography>
						</Tooltip>
					</CardFooter>
				</Card>
				{/* 2nd */}

				<Card className="w-96  bg-deep-orange-100">
					<CardHeader floated={false} className="h-80">
						<img
							src="https://images.unsplash.com/photo-1548946061-4af3de8b577c?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="profile-picture"
						/>
					</CardHeader>
					<CardBody className="text-center">
						<Typography variant="h4" color="blue-gray" className="mb-2">
							USA
						</Typography>
					</CardBody>
					<CardFooter className="flex justify-center gap-7 pt-2">
						<Tooltip content="Like">
							<Typography
								as="a"
								href="#facebook"
								variant="lead"
								color="blue"
								textGradient
							>
								<i className="fab fa-facebook" />
							</Typography>
						</Tooltip>
						<Tooltip content="Follow">
							<Typography
								as="a"
								href="#twitter"
								variant="lead"
								color="light-blue"
								textGradient
							>
								<i className="fab fa-twitter" />
							</Typography>
						</Tooltip>
						<Tooltip content="Follow">
							<Typography
								as="a"
								href="#instagram"
								variant="lead"
								color="purple"
								textGradient
							>
								<i className="fab fa-instagram" />
							</Typography>
						</Tooltip>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
};

export default SelectCountry;
