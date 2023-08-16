import React from "react";
import styles from "./Title.module.scss";
import Container from "../UI/Container";

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
