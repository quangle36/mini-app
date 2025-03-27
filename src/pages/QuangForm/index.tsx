import { useState } from 'react';
import UsersList from './UsersList';
import EditUserForm from './EditUserForm';
import AddUserForm from './AddUserForm';

export interface IUser {
	id: string;
	fullName: string;
	email: string;
	address: string;
	city: string;
	country: string;
}

const Form = () => {
	const [users, setUsers] = useState<IUser[]>([]);
	const [editingUser, setEditingUser] = useState<IUser | null>(null);

	const handleSave = () => {
		if (!editingUser) return;

		setUsers((prevUsers) => {
			return prevUsers.map((user) =>
				user.id === editingUser.id ? editingUser : user
			);
		});

		setEditingUser(null);
	};
	const handleEditUser = (email: string) => {
		const userToEdit = users.find((user) => user.email === email);
		if (userToEdit) {
			setEditingUser(userToEdit);
		}
	};
	const handleDeleteUser = (email: string) => {
		const newUsersList = users.filter((user) => user.email !== email);
		setUsers(newUsersList);
	};
	return (
		<>
			<AddUserForm
				users={users}
				setEditingUser={setEditingUser}
				setUsers={setUsers}
			/>

			<UsersList
				handleDeleteUser={handleDeleteUser}
				handleEditUser={handleEditUser}
				users={users}
			/>

			{editingUser && (
				<EditUserForm
					handleSave={handleSave}
					editingUser={editingUser}
					setEditingUser={setEditingUser}
				/>
			)}
		</>
	);
};

export default Form;
