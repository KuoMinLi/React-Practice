const { useState } = React;

function App() {
  const [value, setValue] = useState(0);
  const [numbers, setNumbers] = useState([{
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
  },]);
  let Input = 0;
  let name = "";
  let rate = 0;


  const numberList = numbers.map((item, i) => (
    <li key={i}>
      {item.name}：{ value/item.rate }
    </li>
  ));

  function change() {
    return setValue(Input);
  }

  function addnumbers() {
    return setNumbers([...numbers, { name, rate }]);
  }

  return (
  <>
    <h3>新增幣種</h3>
    <input
        type="text" 
        placeholder="幣種名稱" 
        id="name"
        onChange={(e) => (name = e.target.value)}
      />
    <input
        type="text" 
        placeholder="匯率"
        id="rate"
        onChange={(e) => (rate = e.target.value)}
      />
    <input
        type="button"
        value="新增幣種" 
        onClick={() => {
          addnumbers();
        }}
      />
    <hr></hr>

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
      <ul>{numberList}</ul>
  </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
