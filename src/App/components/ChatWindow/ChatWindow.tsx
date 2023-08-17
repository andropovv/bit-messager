import { observer } from "mobx-react-lite";
import { useEffect, useRef } from "react";
import { messages } from "../../store/messages";
import Container from "../UI/Container";
import styles from "./ChatWindow.module.scss";
import MessageItem from "./MessageItem/MessageItem";
const ChatWindow = observer(() => {
	const { msgs, isBotTyping } = messages;
	const ref = useRef<HTMLDivElement | null>(null);

	const scrollToBottom = () => {
		ref.current?.scrollTo({
			top: ref.current?.scrollHeight,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		scrollToBottom();
	});

	return (
		<Container style={styles.chatWindow}>
			<div className={styles.container} ref={ref}>
				{msgs.length ? (
					msgs.map(m => <MessageItem key={m.id} message={m} />)
				) : (
					<div className={styles.placeholder}>Write your first message...</div>
				)}
				{isBotTyping && (
					<div className={styles.botTyping}>Bot is typing...</div>
				)}
			</div>
			<div />
		</Container>
	);
});

export default ChatWindow;
