import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;  // テキストボックスの値を取得する。
  document.getElementById("add-text").value = "";  // 追加ボタンを押した後、入力欄を初期化する。
  
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  
  // liタグ作成
  const li = document.createElement("li");
  li.innerText = inputText;

  // divタグの子要素に各要素を設定
  div.appendChild(li);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);

};

document.getElementById("add-button").addEventListener("click", () => onClickAdd());
