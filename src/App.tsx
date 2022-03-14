import React from "react";
import styled from "@emotion/styled";
import Header from "./components/Header";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <Container>
      <Header>ToDo</Header>
      <NewTaskForm />
      <TaskList css={{ marginTop: 16 }} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;
