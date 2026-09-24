import { useState } from "react";
import Welcome from "./pages/Welcome";
import Investigation from "./pages/Investigation";
import AluValu from "./pages/AluValu";
import HeartPocket from "./pages/HeartPocket";
import IndiaCanada from "./pages/IndiaCanada";
import MemoryVault from "./pages/MemoryVault";
import OpenWhen from "./pages/OpenWhen";
import RajeshRecovery from "./pages/RajeshRecovery";
import SecretCode from "./pages/SecretCode";
import Final from "./pages/Final";
import BlinkReset from "./pages/BlinkReset";

function App() {
  const [page, setPage] = useState(0);

  const nextPage = () => {
    setPage(page + 1);
  };

  if (page === 0) {
    return <Welcome nextPage={nextPage} />;
  }

  if (page === 1) {
    return <Investigation nextPage={nextPage} />;
  }

  if (page === 2) {
    return <AluValu nextPage={nextPage} />;
  }
  if (page === 3){
    return <HeartPocket nextPage={nextPage} />;
}
if(page === 4){
  return <IndiaCanada nextPage={nextPage} />;
}
if (page === 5){
  return <MemoryVault nextPage={nextPage} />;
}
if (page === 6){
  return <OpenWhen nextPage={nextPage} />;
}
if (page === 7){
  return <RajeshRecovery nextPage={nextPage} />;
}
if (page === 8){
  return <SecretCode nextPage={nextPage} />;
}
if (page === 9){
  return <Final nextPage={nextPage} />;
}
if (page === 10) {
  return <BlinkReset />;
}
  return (
    <div className="page">
      <div className="glass-card">
        <h1>Coming Soon... ❤️</h1>

        <p>
          The next secret is still being prepared, Sir. 😌
        </p>
      </div>
    </div>
  );
}

export default App;