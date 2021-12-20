import React, { useState, createContext } from "react";

export const showContext = createContext();
function ShowProvider(props) {
	const [showIn, setShowIn] = useState(false);
	const [showReg, setShowReg] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);
	const [showmodalaprove, setModalApprove] = useState(false);

	const toggleIn = () => setShowIn(!showIn);
	const toggleReg = () => setShowReg(!showReg);
	const toggleModal = () => setShowModal(!showModal);
	const toggleDropdown = () => setShowDropdown(!showDropdown);
	const toggleModalApprove = () => setModalApprove(!showmodalaprove);

	return (
		<>
			<showContext.Provider
				value={{
					showIn,
					toggleIn,
					showReg,
					toggleReg,
					showModal,
					toggleModal,
					showDropdown,
					toggleDropdown,
					showmodalaprove,
					toggleModalApprove,
				}}
			>
				{props.children}
			</showContext.Provider>
		</>
	);
}

export default ShowProvider;
