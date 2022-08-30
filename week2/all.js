const { useState } = React;

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [todo, setTodo] = useState([
    {
      name: "把冰箱發霉的檸檬拿去丟",
      state: true,
    },
    {
      name: "打電話叫媽媽匯款給我",
      state: false,
    },
    {
      name: "整理電腦資料夾",
      state: false,
    },
    {
      name: "繳電費水費瓦斯費",
      state: false,
    },
    {
      name: "約vicky禮拜三泡溫泉",
      state: false,
    },
    {
      name: "約ada禮拜四吃晚餐",
      state: false,
    },
  ]);

  const [tab, setTab] = useState([
    { name: "全部", active: true },
    { name: "待完成", active: false },
    { name: "已完成", active: false },
  ]);
  const [currentTab, setCurrentTab] = useState("全部");

  let Input = "";

  function addtodo() {
    if (Input === "") {
      alert("請輸入代辦事項");
    } else {
      setTodo([
        ...todo,
        {
          name: Input,
          state: false,
        },
      ]);
    }
  }

  function deletetodo(name) {
    const deleteIndex = todo.findIndex((item) => item.name === name);
    todo.splice(deleteIndex, 1);
    setTodo([...todo]);
  }

  function Item({ item }) {
    return (
      <li>
        <label class="todoList_label">
          <input
            className="todoList_input"
            type="checkbox"
            value="tre"
            checked={item.state}
            onClick={() => {
              item.state = !item.state;
              setTodo([...todo]);
            }}
          />
          <span>{item.name}</span>
        </label>
        <a
          onClick={() => {
            deletetodo(item.name);
          }}
        >
          <i class="fa fa-times"></i>
        </a>
      </li>
    );
  }

  function TotalItem() {
    if (todo.length === 0) {
      return <p>目前沒有任何待辦事項</p>;
    } else {
      const todolist = todo.filter((item) => item.state === false);
      return (
        <>
          <p>{todolist.length} 個待完成項目</p>
          <a
            onClick={() => {
              deletefinish();
            }}
          >
            清除已完成項目
          </a>
        </>
      );
    }
  }

  function deletefinish() {
    const finish = todo.filter((item) => item.state === false);
    setTodo([...finish]);
  }

  function handleTab(index) {
    tab.map((item, i) => {
      if (i === index) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
    setTab([...tab]);
    setCurrentTab(tab[index].name);
  }

  function Inputcomponent() {
    return (
      <>
        <input
          type="text"
          placeholder="請輸入待辦事項"
          id="todoInput"
          onChange={(e) => {
            Input = e.target.value.trim();
          }}
        />
        <a
          onClick={() => {
            addtodo();
          }}
        >
          <i class="fa fa-plus"></i>
        </a>
      </>
    );
  }

  return (
    <>
      <div id="todoListPage" class="bg-half">
        <nav>
          <h1>
            <a href="#">ONLINE TODO LIST</a>
          </h1>
        </nav>
        <div class="conatiner todoListPage vhContainer">
          <div class="todoList_Content">
            <div class="inputBox">
              <Inputcomponent />
            </div>
            <div class="todoList_list">
              <ul class="todoList_tab">
                {tab.map((item, index) => {
                  return (
                    <li key={index}>
                      <a
                        className={item.active ? "active" : ""}
                        onClick={() => {
                          handleTab(index);
                        }}
                      >
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <div class="todoList_items">
                <ul class="todoList_item">
                  {todo
                    .filter((item) => {
                      if (currentTab === "全部") return true;
                      if (currentTab === "待完成") return !item.state;
                      if (currentTab === "已完成") return item.state;
                    })
                    .map((data, index) => {
                      return <Item item={data} key={index} />;
                    })}
                </ul>
                <div class="todoList_statistics">
                  <TotalItem />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

root.render(<App />);
