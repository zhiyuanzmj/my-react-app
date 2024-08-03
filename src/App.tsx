import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import VSlots from "./v-slots.tsx";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <VSlots>
        <div>default Slot</div>
        <template v-slot:title={{ name }}>{name} Slot</template>
      </VSlots>
    </>
  );
}

export default App;
