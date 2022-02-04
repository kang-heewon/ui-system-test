import { Button } from "./component/Button";

function App() {
  return (
    <div>
      <Button
        size="md"
        variation="primary"
        customStyle={{ variation: { primary: { backgroundColor: "black" } } }}
      >
        헬로우
      </Button>
    </div>
  );
}

export default App;
