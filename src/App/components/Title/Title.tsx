import Container from "../UI/Container";
import styles from "./Title.module.scss";

const Title = () => {
	return (
		<div className={styles.title}>
			<Container>
				<h1>Bot Chat</h1>
				<p>AI-based service</p>
			</Container>{" "}
		</div>
	);
};

export default Title;
