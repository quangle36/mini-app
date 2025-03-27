import { useState } from 'react';
import { IUser } from '.';

interface IUsersListProps {
	handleEditUser: (email: string) => void;
	handleDeleteUser: (email: string) => void;
	users: IUser[];
}
const PAGE_SIZE = 5;
const UsersList = ({
	handleEditUser,
	handleDeleteUser,
	users,
}: IUsersListProps) => {
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(users.length / PAGE_SIZE);
	const paginatedUsers = users.slice(
		(currentPage - 1) * PAGE_SIZE,
		currentPage * PAGE_SIZE
	);
	return (
		<div className="bg-gray-100 flex items-center justify-center">
			<div className="w-full max-w-4xl bg-white rounded-lg shadow">
				<h2 className="text-xl font-semibold text-gray-600 mb-4">User List</h2>
				<table className="w-full">
					<thead>
						<tr className="bg-gray-200 text-gray-600 text-start">
							<th className="p-2 text-start">Full Name</th>
							<th className="p-2 text-start">Email</th>
							<th className="p-2 text-start">Address</th>
							<th className="p-2 text-start">City</th>
							<th className="p-2 text-start">Country</th>
							<th className="p-2 text-start">Action</th>
						</tr>
					</thead>
					<tbody>
						{paginatedUsers.map((user, index) => (
							<tr key={index} className="text-start">
								<td className="p-2  ">{user.fullName}</td>
								<td className="p-2  ">{user.email}</td>
								<td className="p-2  ">{user.address}</td>
								<td className="p-2  ">{user.city}</td>
								<td className="p-2  ">{user.country}</td>
								<td className="p-2   text-blue-500 cursor-pointer space-x-2">
									<button onClick={() => handleEditUser(user.email)}>
										Edit
									</button>
									<button
										className="text-red-400"
										onClick={() => {
											handleDeleteUser(user.email);
										}}
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className="flex justify-end items-center mt-4 space-x-4">
					{paginatedUsers.length > 0 && (
						<span className="text-gray-600">
							Show {paginatedUsers.length} entries
						</span>
					)}
					{paginatedUsers.length > 0 && (
						<div className="space-x-1">
							<button
								className={`px-4 py-2 bg-blue-500 text-white rounded ${
									currentPage === 1
										? 'opacity-50 cursor-not-allowed'
										: 'hover:bg-blue-700'
								}`}
								onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
								disabled={currentPage === 1}
							>
								Prev
							</button>
							<button
								className={`px-4 py-2 bg-blue-500 text-white rounded ${
									currentPage === totalPages
										? 'opacity-50 cursor-not-allowed'
										: 'hover:bg-blue-700'
								}`}
								onClick={() =>
									setCurrentPage((prev) => Math.min(prev + 1, totalPages))
								}
								disabled={currentPage === totalPages}
							>
								Next
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default UsersList;
