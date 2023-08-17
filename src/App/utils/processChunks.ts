import uuid from "react-uuid";
import { messages } from "../store/messages";

export const processChunks = async (text: string) => {
	const curId = uuid();
	messages.setTyping(true);
	messages.addMessage({ content: "", isUser: false, id: curId });

	try {
		const responce = await fetch(
			"http://185.46.8.130/api/v1/chat/send-message",
			{
				method: "POST",
				body: JSON.stringify({ message: text }),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		const reader = responce.body?.getReader();
		const decoder = new TextDecoder();

		while (true) {
			//@ts-ignore
			const { value, done } = await reader?.read();
			if (done) break;
			const parsed = decoder
				.decode(value)
				.split("}")
				.filter(ch => ch.length)
				.map(ch => {
					return JSON.parse(ch + "}");
				});

			let gettedStr = "";

			for (const chunk of parsed) {
				if (chunk.status !== "done") gettedStr += chunk.value;
			}
			messages.addContentToMes(curId, gettedStr);
		}

		messages.setTyping(false);
	} catch (error) {
		alert(error);
	}
};
