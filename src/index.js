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

  // ボタン（完了）タグ作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 完了ボタンが押されたら、その親タグ（div）を未完了リストから削除する。
    const deleteTarget = completeButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // ボタン（削除）タグ作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 削除ボタンが押されたら、その親タグ（div）を未完了リストから削除する。
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);


  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);

};

document.getElementById("add-button").addEventListener("click", () => onClickAdd());
