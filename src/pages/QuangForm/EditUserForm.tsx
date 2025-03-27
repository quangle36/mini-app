import { IUser } from '.';

interface IEditUserFormProps {
	handleSave: () => void;
	editingUser: IUser;
	setEditingUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}
const EditUserForm = ({
	handleSave,
	editingUser,
	setEditingUser,
}: IEditUserFormProps) => {
	return (
		<div className="mt-4 p-4 bg-gray-100 rounded-lg">
			<h3 className="text-lg font-semibold">Edit User</h3>
			<input
				type="text"
				value={editingUser.fullName || ''}
				onChange={(e) =>
					setEditingUser({ ...editingUser, fullName: e.target.value })
				}
				className="border p-2 w-full mt-2"
				placeholder="Full name"
			/>
			<input
				type="text"
				value={editingUser.email || ''}
				onChange={(e) => {
					setEditingUser({ ...editingUser, email: e.target.value });
				}}
				className="border p-2 w-full mt-2"
				placeholder="Email"
			/>
			<input
				type="text"
				value={editingUser.country || ''}
				onChange={(e) =>
					setEditingUser({ ...editingUser, country: e.target.value })
				}
				className="border p-2 w-full mt-2"
				placeholder="Country"
			/>
			<input
				type="text"
				value={editingUser.address || ''}
				onChange={(e) =>
					setEditingUser({ ...editingUser, address: e.target.value })
				}
				className="border p-2 w-full mt-2"
				placeholder="Address"
			/>
			<input
				type="text"
				value={editingUser.city || ''}
				onChange={(e) =>
					setEditingUser({ ...editingUser, city: e.target.value })
				}
				className="border p-2 w-full mt-2"
				placeholder="City"
			/>
			<button
				onClick={handleSave}
				className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
			>
				Save
			</button>
		</div>
	);
};

export default EditUserForm;
