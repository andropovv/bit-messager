import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import uuid from "react-uuid";
import SentIcon from "../../../assets/sentIcon.png";
import { messages } from "../../store/messages";
import { processChunks } from "../../utils/processChunks";
import Container from "../UI/Container";
import styles from "./InputAndSending.module.scss";

const InputAndSending = observer(() => {
	const [text, setText] = useState("");

	const handleChangeText = (e: React.FormEvent<HTMLInputElement>) => {
		setText(e.currentTarget.value);
	};

	const handleSentMes = async () => {
		messages.addMessage({ content: text, id: uuid(), isUser: true });
		processChunks(text);
		setText("");
	};
	return (
		<Container style={styles.inputAndSending}>
			<input
				type="text"
				placeholder="Start typing here..."
				value={text}
				onChange={handleChangeText}
			/>
			<div
				className={`${styles.sentBtn} ${!text && styles.disabled}`}
				onClick={handleSentMes}
			>
				<img src={SentIcon} alt="sent" />
			</div>
		</Container>
	);
});

export default InputAndSending;
