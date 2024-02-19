import {
	setIsModalOpen,
	setModalDescription,
	setModalMessage,
	setOnConfirmCB,
} from "../store/ConfirmModal.store";

interface ConfirmConfig {
	message: string;
	onConfirm: () => void;
	description?: string;
}

export const useConfirm = () => {
	const confirm = ({ message, onConfirm, description }: ConfirmConfig) => {
		setModalMessage(message);
		setModalDescription(description || "");
		setOnConfirmCB(onConfirm);
		setIsModalOpen(true);
	};
	return confirm;
};
