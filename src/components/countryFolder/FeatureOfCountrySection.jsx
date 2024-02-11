const FeatureOfCountrySection = () => {
	return (
		<div className="bg-deep-orange-300 p-2">
			<h1 className="text-center">2nd page right section </h1>
			<h1 className="text-center">this is about the section of countries </h1>

			<h1 className="text-center">FeatureOfCountrySection</h1>
			<section className="p-4 lg:p-8 bg-gray-800 text-gray-100 rounded-md">
				{/*  */}
				<div className="container mx-auto space-y-12">
					{/* image and text */}
					<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
						<img
							src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt=""
							className="h-80 bg-gray-500 aspect-video"
						/>
						<div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
							<span className="text-xs uppercase text-gray-400">
								Make your thoughts valuable.
							</span>
							<h3 className="text-3xl font-bold">
								Share your thoughts and comments on the political ideology
								section.
							</h3>
							<p className="my-6 text-gray-400">her you can choose related</p>
							<button type="button" className="self-start">
								Action
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default FeatureOfCountrySection;
