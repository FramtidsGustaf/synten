import {
	isNotificationOpen,
	notificationMessage,
} from "../../../store/Notification.store";
import classes from "./Notification.module.css";

const Notification = () => {
	return (
		<div
			className={`${classes.notification} ${
				isNotificationOpen.value ? classes.notificationOpen : ""
			}`}
		>
			<div className={classes.side} />
			<p className={classes.message}>{notificationMessage.value}</p>
		</div>
	);
};

export default Notification;
