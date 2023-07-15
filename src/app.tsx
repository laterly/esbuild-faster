import React, { useState } from "react";
const App: React.FC = () => {
  const [state, setState] = useState<number>(0);
  return (
    <div>
      <p>数字:{state}</p>
      <button onClick={() => setState((prev) => prev + 1)}>点击呀</button>
    </div>
  );
};
export default App;
