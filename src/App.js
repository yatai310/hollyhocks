import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch("https://api.github.com/users/yatai310")
      .then((res) => res.json())
      .then((json) => setData(json));
  });

  return (
    <div className="App">
      <header className="App-header bg-pastel-purple">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/SCP_Foundation_%28emblem%29.svg/768px-SCP_Foundation_%28emblem%29.svg.png"
          className="App-logo"
          alt="logo"
        />
        <p className="text-pastel-blue text-3xl">
          <code>SCP</code> 財団にようこそ！
        </p>
        <a
          className="text-pastel-red underline"
          href="http://scp-jp.wikidot.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ⇒ article ⇐
        </a>
        <a href="/newpage" className="text-pastel-red underline">
          コミュニティページ
        </a>
        <button
          className="text-pastel-red"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          ☝
        </button>
        <p className="text-pastel-red">{count}</p>
        <button
          className="text-pastel-red"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          ☟
        </button>
        {data ? (
          <>
            <img
              className="w-32 rounded-full mt-10"
              alt="icon"
              src={data.avatar_url}
            />
            <p className="text-wed-dark">{data.login}</p>
          </>
        ) : (
          <p>no data</p>
        )}
      </header>
    </div>
  );
}

export default App;
