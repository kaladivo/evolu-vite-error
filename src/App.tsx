import "./App.css";
import { useMutation, useQuery } from "./evolu";
import { NonEmptyString1000 } from "@evolu/react";

function App() {
  const data = useQuery((a) => a.selectFrom("todo").selectAll());
  const { create } = useMutation();

  return (
    <>
      <code>{JSON.stringify(data, null, 2)}</code>
      <button
        onClick={() => {
          create("todo", {
            title: NonEmptyString1000(`test todo ${Date.now()}`),
            isCompleted: false,
          });
        }}
      >
        add todo
      </button>
    </>
  );
}

export default App;
