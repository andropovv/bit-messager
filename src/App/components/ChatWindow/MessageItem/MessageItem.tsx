import { FC } from "react";
import RobotIcon from "../../../../assets/robot.png";
import { IMessage } from "../../../Models/Message";
import styles from "./MessageItem.module.scss";

interface IMessageItem {
	message: IMessage;
}

const MessageItem: FC<IMessageItem> = ({ message }) => {
	const textBlockStyle = message.isUser ? styles.userMes : styles.botMes;
	const containerStyle = message.isUser
		? styles.userContainer
		: styles.botContainer;
	return (
		<div className={containerStyle}>
			{!message.isUser && (
				<div className={styles.botAvatar}>
					<img src={RobotIcon} alt="bot" />
				</div>
			)}
			<div className={textBlockStyle}>{message.content}</div>
			{message.isUser && <div className={styles.userAvatar}>A</div>}
		</div>
	);
};

export default MessageItem;
