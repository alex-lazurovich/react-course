import { useEffect, useState } from "react";
import "./App.css";
import ItemsBlock from "./components/ItemsBlock/ItemsBlock";

function App() {
  const [firstBlockItems, setFirstBlockItems] = useState([]);
  const [secondBlockItems, setSecondBlockItems] = useState([]);
  const [thirdBlockItems, setThirdBlockItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      const items = await import("./constants/items.json");
      setFirstBlockItems(items.default);
    }
    getItems();
  }, []);

  const moveFirstToSecond = () => {
    const item = { ...firstBlockItems[0] };
    setFirstBlockItems((items) => items.toSpliced(0, 1));
    setSecondBlockItems((items) => [item, ...items]);
  };

  const moveSecondToFirst = () => {
    const item = { ...secondBlockItems[0] };
    setSecondBlockItems((items) => items.toSpliced(0, 1));
    setFirstBlockItems((items) => [item, ...items]);
  };

  const moveSecondToThird = () => {
    const item = { ...secondBlockItems[0] };
    setSecondBlockItems((items) => items.toSpliced(0, 1));
    setThirdBlockItems((items) => [item, ...items]);
  };

  const removeLastFromThird = () => {
    setThirdBlockItems((items) => items.toSpliced(items.length - 1, 1));
  };

  return (
    <>
      <ItemsBlock items={firstBlockItems}>
        {firstBlockItems && firstBlockItems.length ? (
          <button onClick={moveFirstToSecond}>Move first to the right</button>
        ) : null}
      </ItemsBlock>
      <ItemsBlock items={secondBlockItems}>
        {secondBlockItems && secondBlockItems.length ? (
          <div>
            <button onClick={moveSecondToFirst}>Left</button>
            <button onClick={moveSecondToThird}>Right</button>
          </div>
        ) : null}
      </ItemsBlock>
      <ItemsBlock items={thirdBlockItems}>
        {thirdBlockItems && thirdBlockItems.length ? (
          <button onClick={removeLastFromThird}>Remove last item</button>
        ) : null}
      </ItemsBlock>
    </>
  );
}

export default App;
