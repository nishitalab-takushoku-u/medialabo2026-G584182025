// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0; 
// そのほか，必要に応じて変数を宣言してもよい
//let n = document.querySelector('span#kaisu');
let p = document.querySelector('p#result');
let b = document.querySelector('button#result');
let h = document.querySelector('p#print');
let f = false;
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  if (f) {
    p.textContent = ('答えは ' + kotae + ' でした．すでにゲームは終わっています');
    h.textContent = ('');
  }else {
  
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
    kaisu++;
  //n.textContent = (kaisu + '回目の予想:');
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  
  // ここから: テキストボックスに指定された数値を yoso に代入する
    let yoso = document.querySelector('input[name="kazu"]');
    let pre = Number(yoso.value);
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  
  // ここから: 正解判定する
    p.textContent = (kaisu + '回目の予想:' + pre);
    if (pre === kotae) {
        h.textContent = ('正解です．おめでとう!');
        f = true; 
    }else if (kaisu >= 3) {
      h.textContent = ('まちがい．残念でした答えは '+kotae+' です．');
      f = true;
    }else {
        if (pre < kotae) {
          h.textContent = ('まちがい．答えはもっと大きいですよ');
        }else {
          h.textContent = ('まちがい．答えはもっと小さいですよ');
        }
    }
  // 　　　　  正解/不正解のときのメッセージを表示する
  }
  // ここまで: 正解判定する
}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
b.addEventListener('click', hantei);
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
