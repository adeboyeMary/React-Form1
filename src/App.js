import React from "react";
import Background from "./components/Background";
import LearnToCodeSection from "./components/LearnToCodeSection";
import TopSection from "./components/TopSection";

const App = () => {
  // const [confirm, setConfirm] = useState('');

  return (
    <div className="App">
      <Background className="container1">
        <LearnToCodeSection />
        <TopSection />
      </Background>
    </div>
  );
}

export default App;
