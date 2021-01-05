import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;  // テキストボックスの値を取得する。
  document.getElementById("add-text").value = "";  // 追加ボタンを押した後、入力欄を初期化する。

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除する
const deleteFromIncompleteList = (target) => {  
  document.getElementById("incomplete-list").removeChild(target);
};


// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  
  // liタグ作成
  const li = document.createElement("li");
  li.innerText = text;

  // ボタン（完了）タグ作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 完了ボタンが押されたら、その親タグ（div）を未完了リストから削除する。
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;  // parentNodeは、指定されたノードの DOM ツリー内の親ノードを返します。
    const text = addTarget.firstElementChild.innerText;  // TODOの内容のテキストを取得。

    // div以下を初期化
    addTarget.textContent = null;  
    
    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグ作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ（div）を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // ボタン（削除）タグ作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 削除ボタンが押されたら、その親タグ（div）を未完了リストから削除する。
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);


  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);

}



document.getElementById("add-button").addEventListener("click", () => onClickAdd());
