import { makeAutoObservable } from "mobx";
import { IMessage } from "../Models/Message";

class Messages {
	msgs: IMessage[] = [];
	isBotTyping: boolean = false;

	constructor() {
		makeAutoObservable(this);
	}

	addMessage(mes: IMessage) {
		this.msgs.push(mes);
	}

	addContentToMes(id: string, content: string) {
		this.msgs = this.msgs.map(mes => {
			return mes.id === id ? { ...mes, content: mes.content + content } : mes;
		});
	}

	setTyping(isTyping: boolean) {
		this.isBotTyping = isTyping;
	}
}

export const messages = new Messages();
