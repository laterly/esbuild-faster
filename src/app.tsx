import React, { useState } from "react";
import './app.css';
const App: React.FC = () => {
  const [state, setState] = useState<number>(0);
  return (
    <div>
      <p className={'box'}>数字13  :{state}</p>
      <button onClick={() => setState((prev) => prev + 1)}>点击呀</button>
    </div>
  );
};
export default App;
