const { useState } = React;

function App() {
  const [value, setValue] = useState(1);
  const [numbers, setNumbers] = useState([
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
  ]);
  const [wallet, setWallet] = useState(5000);
  const [result, setResult] = useState([]);

  let Input = 0;
  let name = "";
  let rate = 0;

  function calc() {
    return setValue(Input);
  }

  function addnumbers() {
    return setNumbers([...numbers, { name, rate }]);
  }

  function change(value, name, rate) {
    if (wallet < value ){
      alert("餘額不足");
    }else{
      setWallet(wallet - value)
      setResult([...result, { value:value, name:name, rate:rate }]);
    }
  }

  // function addresult(value, name, rate) {
  //   if (wallet < value ){
  //     alert("餘額不足");
  //   }else{
  //   return setResult([...result, { value:value, name:name, rate:rate }]);
  // }

  const resultlist = result.map((item, index) => (
    <li key={index}>
      <h4>  </h4>
      您用{item.value}元台幣，兌換了{Math.round((item.value / item.rate) * 100) / 100 || 0}{item.name}
    </li>
  ));


  const numberList = numbers.map((item, i) => (
    <li key={i}>
      {item.name}： {Math.round((value / item.rate) * 100) / 100 || 0}
      <input
        type="button"
        value="兌換"
        onClick={() => {
          change(value, item.name, item.rate);

        }}
      />
    </li>
  ));

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
      <h3>您錢包還有 {wallet} 元</h3>
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
          calc();
        }}
      />
      <p>台幣{value}元 可以換算</p>
      <ul>{numberList}</ul>
      <hr></hr>
      <h3>您的兌換記錄</h3>
      <ul>{resultlist}</ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
