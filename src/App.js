import React from "react";
import Logo from "./components/Logo";
import PaintingList from "./components/PaintingList";
import Panel from "./components/Panel";
import paintings from "./paintings.json";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const App = () => {
  return (
    <div>
      <Panel title="Последние новости">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
          obcaecati dolorum assumenda vitae aspernatur, aliquid numquam
          explicabo, facere tenetur unde dolorem quo! Sit iusto natus at,
          aliquam, repellendus repellat ipsa eligendi dolorem tempore atque
          reprehenderit nulla magnam reiciendis, aliquid minus tenetur ipsam
          fuga. Quas vel, sunt voluptatum debitis incidunt numquam?
        </p>
      </Panel>

      <Panel text="Популярные работы">
        <PaintingList paintings={paintings} />
      </Panel>

      <Logo text="Главный компонент-контейнер приложения" />
    </div>
  );
};

export default App;
