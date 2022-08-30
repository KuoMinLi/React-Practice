const { useState } = React;

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  // const [todo, setTodo] = useState(changeData);
  const [value, setValue] = useState(0);
  let Input = 0;

  const changeData = [
    {
      name: "日幣",
      rate: 0.22,
    },
    {
      name: "美金",
      rate: 29.97,
    },
    {
      name: "澳幣",
      rate: 20.87,
    },
    {
      name: "韓幣",
      rate: 0.023,
    },
    {
      name: "印尼幣",
      rate: 0.002,
    },
  ];

  const numberList = numbers.map((item, i) => (
    <li key={i}>
      {item.name}：{item.rate * value}
    </li>
  ));

  function change() {
    return setValue(Input);
  }

  const changeList = changeData.map((item, i) => {
    return (
      <li key={i}>
        {item.name} : {Math.round(value / item.rate)} 元
      </li>
    );
  });

  function change() {
    if (Input < 0) return;
    return setValue(Input);
  }

  return (
    <>
      請輸入您要換的台幣
      <input
        type="number"
        min="1"
        placeholder="0"
        id="value"
        onChange={(e) => (Input = e.target.value)}
      />
      <input
        type="button"
        value="計算"
        onClick={() => {
          change();
        }}
      />
      <p>台幣{value}元 可以換算</p>
      <ul>{changeList}</ul>
    </>
  );
}

root.render(<App />);
