import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { setIsDrawerOpen, isDrawerOpen } from "../../../store/Drawer.store";

import classes from "./Drawer.module.css";

interface DrawerProps {
	children: ReactNode;
}

const createPortalRoot = () => {
	const drawerRoot = document.createElement("div");
	drawerRoot.id = "drawer-root";
	return drawerRoot;
};

const Drawer = ({ children }: DrawerProps) => {
	const bodyRef = useRef<HTMLBodyElement>(document.querySelector("body"));
	const portalRootRef = useRef(
		document.getElementById("drawer-root") || createPortalRoot()
	);

	useEffect(() => {
		const updatePageScroll = () => {
			if (bodyRef.current === null) return;
			if (isDrawerOpen.value) {
				bodyRef.current.style.overflow = "hidden";
			} else {
				bodyRef.current.style.overflow = "";
			}
		};
		updatePageScroll();
	}, [isDrawerOpen.value]);

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
			aria-hidden={isDrawerOpen.value ? "false" : "true"}
			className={`${classes.drawerContainer} ${
				isDrawerOpen.value ? classes.open : ""
			}`}
		>
			<div
				className={`${classes.drawer} ${
					isDrawerOpen.value ? classes.drawerOpen : ""
				}`}
				role="dialog"
			>
				{isDrawerOpen.value ? children : null}
			</div>
			<div
				className={`${classes.tab} ${
					isDrawerOpen.value ? classes.tabOpen : ""
				}`}
				onClick={() => {
					setIsDrawerOpen(!isDrawerOpen.value);
				}}
			>
				<img
					src="./synt-chevron.svg?url"
					alt="Stäng"
					className={`${classes.chevron} ${
						isDrawerOpen.value ? classes.chevronOpen : ""
					}`}
				/>
			</div>
			<div
				className={`${classes.overlay} ${
					isDrawerOpen.value ? classes.overlayOpen : ""
				}`}
				onClick={() => {
					setIsDrawerOpen(false);
				}}
			/>
		</div>,
		portalRootRef.current
	);
};

export default Drawer;
