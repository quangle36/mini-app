import { SubmitHandler, useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { IUser } from '.';

interface IAddUserForm {
	users: IUser[];
	setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
	setEditingUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

const AddUserForm = ({ users, setUsers, setEditingUser }: IAddUserForm) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IUser>({
		reValidateMode: 'onChange',
		defaultValues: {
			id: '',
			fullName: '',
			email: '',
			address: '',
			city: '',
			country: '',
		},
	});
	const onSubmit: SubmitHandler<IUser> = (data) => {
		const newUser = { ...data, id: uuidv4() };
		const newUsersList = [...users, newUser];
		setUsers(newUsersList);
		reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
				<div className="container max-w-screen-lg mx-auto">
					<div>
						<h2 className="font-semibold text-xl text-gray-600">
							Responsive Form
						</h2>
						<p className="text-gray-500 mb-6">
							Form is mobile responsive. Give it a try.
						</p>

						<div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
							<div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
								<div className="text-gray-600">
									<p className="font-medium text-lg">Personal Details</p>
									<p>Please fill out all the fields.</p>
								</div>

								<div className="lg:col-span-2">
									<div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
										<div className="md:col-span-5">
											<label htmlFor="full_name">Full Name</label>
											<input
												type="text"
												// name="full_name"
												id="full_name"
												className="h-10   mt-1 rounded px-4 w-full bg-gray-50"
												{...register('fullName', {
													required: true,
												})}
												onChange={(e) =>
													setEditingUser((prev) =>
														prev
															? {
																	...prev,
																	fullName: e.target.value,
															  }
															: null
													)
												}
											/>
											{errors.fullName && (
												<div className="text-red-400">
													Full name is required!
												</div>
											)}
										</div>

										<div className="md:col-span-5">
											<label htmlFor="email">Email Address</label>
											<input
												type="text"
												id="email"
												className="h-10   mt-1 rounded px-4 w-full bg-gray-50"
												{...register('email', {
													required: true,
												})}
												placeholder="email@domain.com"
											/>
											{errors.email && (
												<div className="text-red-400">Email is required!</div>
											)}
										</div>

										<div className="md:col-span-3">
											<label htmlFor="address">Address / Street</label>
											<input
												type="text"
												id="address"
												className="h-10   mt-1 rounded px-4 w-full bg-gray-50"
												{...register('address', {
													required: true,
												})}
												placeholder=""
											/>
											{errors.address && (
												<div className="text-red-400">Address is required!</div>
											)}
										</div>

										<div className="md:col-span-2">
											<label htmlFor="city">City</label>
											<input
												type="text"
												id="city"
												className="h-10   mt-1 rounded px-4 w-full bg-gray-50"
												{...register('city', {
													required: true,
												})}
												placeholder=""
											/>
											{errors.city && (
												<div className="text-red-400">City is required!</div>
											)}
										</div>

										<div className="md:col-span-5">
											<label htmlFor="country">Country / region</label>
											<div className="h-10 bg-gray-50 flex    -gray-200 rounded items-center mt-1">
												<input
													id="country"
													placeholder="Country"
													className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
													{...register('country', {
														required: true,
													})}
												/>

												<button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
													<svg
														className="w-4 h-4 mx-2 fill-current"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														stroke="currentColor"
														stroke-width="2"
														stroke-linecap="round"
														stroke-linejoin="round"
													>
														<line x1="18" y1="6" x2="6" y2="18"></line>
														<line x1="6" y1="6" x2="18" y2="18"></line>
													</svg>
												</button>
												<button
													type="button"
													className="cursor-pointer outline-none focus:outline-none  -l  -gray-200 transition-all text-gray-300 hover:text-blue-600"
												>
													<svg
														className="w-4 h-4 mx-2 fill-current"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														stroke="currentColor"
														stroke-width="2"
														stroke-linecap="round"
														stroke-linejoin="round"
													>
														<polyline points="18 15 12 9 6 15"></polyline>
													</svg>
												</button>
											</div>
											{errors.country && (
												<div className="text-red-400">Country is required!</div>
											)}
										</div>

										<div className="md:col-span-5 text-right">
											<div className="inline-flex items-end">
												<button
													type="submit"
													className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
												>
													Submit
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<a
						href="https://www.buymeacoffee.com/dgauderman"
						target="_blank"
						className="md:absolute bottom-0 right-0 p-4 float-right"
					>
						<img
							src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg"
							alt="Buy Me A Coffee"
							className="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"
						/>
					</a>
				</div>
			</div>
		</form>
	);
};

export default AddUserForm;
