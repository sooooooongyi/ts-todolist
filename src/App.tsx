import React from "react";
import styled from "@emotion/styled";
import TaskProvider from "./context/TaskProvider";
import Header from "./components/Header";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <TaskProvider>
      <Container>
        <Header>ToDo</Header>
        <NewTaskForm />
        <TaskList css={{ marginTop: 16 }} />
      </Container>
    </TaskProvider>
  );
}

export default App;

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;
