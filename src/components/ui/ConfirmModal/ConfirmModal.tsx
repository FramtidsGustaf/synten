import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { Button } from "../Button";
import { VerticalSpace } from "../../layout/VerticalSpace";

import { useTheme } from "../../../hooks/useTheme";

import {
	isModalOpen,
	modalDescription,
	modalMessage,
	onConfirmCB,
	setIsModalOpen,
} from "../../../store/ConfirmModal.store";

import classes from "./ConfirmModal.module.css";

const createPortalRoot = () => {
	const drawerRoot = document.createElement("div");
	drawerRoot.id = "drawer-root";
	return drawerRoot;
};

const ConfirmModal = () => {
	const theme = useTheme();
	const bodyRef = useRef<HTMLBodyElement>(document.querySelector("body"));
	const portalRootRef = useRef(
		document.getElementById("modal-root") || createPortalRoot()
	);

	useEffect(() => {
		const updatePageScroll = () => {
			if (bodyRef.current === null) return;
			if (isModalOpen.value) {
				bodyRef.current.style.overflow = "hidden";
			} else {
				bodyRef.current.style.overflow = "";
			}
		};
		updatePageScroll();
	}, [isModalOpen.value]);

	useEffect(() => {
		if (!bodyRef.current) return;
		bodyRef.current.appendChild(portalRootRef.current);
		const portal = portalRootRef.current;
		const body = bodyRef.current;

		return () => {
			portal.remove();
			body.style.overflow = "";
		};
	}, []);
	return createPortal(
		<div
			className={classes.modalWrapper}
			aria-hidden={isModalOpen ? "false" : "true"}
		>
			<div
				className={`${classes.modal} ${
					isModalOpen.value ? classes.modalOpen : ""
				} `}
				role="dialog"
			>
				<h4 className={classes.modalMessage}>{modalMessage.value}</h4>
				{modalDescription.value ? (
					<>
						<VerticalSpace h={theme.xs} />
						<>
							{modalDescription.value.includes("\n") ? (
								modalDescription.value.split("\n").map((line, i) => (
									<p key={i} className={classes.modalDescription}>
										{line}
									</p>
								))
							) : (
								<p className={classes.modalDescription}>
									{modalDescription.value}
								</p>
							)}
						</>
					</>
				) : null}

				<VerticalSpace h={theme.sm} />
				<div className={classes.buttons}>
					<Button
						onClick={() => {
							setIsModalOpen(false);
						}}
					>
						NEJ
					</Button>
					<Button
						onClick={() => {
							onConfirmCB.value();
							setIsModalOpen(false);
						}}
					>
						JA
					</Button>
				</div>
			</div>
			<div
				className={`${classes.backdrop} ${
					isModalOpen.value ? classes.backdropOpen : ""
				}`}
				onClick={() => {
					setIsModalOpen(false);
				}}
			/>
		</div>,
		portalRootRef.current
	);
};

export default ConfirmModal;
