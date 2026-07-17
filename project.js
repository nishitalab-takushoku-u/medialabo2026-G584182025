
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  let n = data.list.g1;
  for(let i = 0; i < n.length; i++) {
    console.log('検索結果' + (i + 1) + '件目');
    let m = n[i];
    console.log(m.start_time);
    console.log(m.end_time);
    console.log(m.service.name);
    console.log(m.title);
    console.log(m.subtitle);
    console.log(m.content);
    console.log(m.act);
  }
}
let b = document.querySelector('button#search');
function val(){
  let cha = document.querySelector('#channel');
  let gen = document.querySelector('#genre');
  console.log('チャンネル: ' + cha.value);
  console.log('ジャンル: ' + gen.value);
  sendRequest();
}
b.addEventListener('click', val);
// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  // リセット
  let old = document.querySelector('#result');
  if (old !== null) {
    old.remove();
  }

  let cha = document.querySelector('#channel');
  let chan = cha.value;
  let n = null;
  if (data !== null && data !== undefined && data.list !== null && data.list !== undefined) {
    n = data.list[chan];
  }

  let bo = document.querySelector('body');
  let di = document.createElement('div');
  di.setAttribute('id', 'result');
  bo.insertAdjacentElement('beforeend', di);

  if (n === null || n === undefined || n.length === 0) {
    let h2 = document.createElement('h2');
    h2.textContent = '検索結果0件';
    di.insertAdjacentElement('beforeend', h2);
    return;
  }

  let u = document.createElement('ul');
  di.insertAdjacentElement('beforeend', u);

  for (let i = 0; i < n.length; i++) {
    let m = n[i];
    let h2 = document.createElement('h2');
    h2.textContent = '検索結果' + (i + 1) + '件目';
    u.insertAdjacentElement('beforeend', h2);

    let l = document.createElement('li');
    l.textContent = '開始時刻: ' + m.start_time;
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.textContent = '終了時刻: ' + m.end_time;
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.textContent = 'チャンネル: ' + m.service.name;
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.textContent = 'タイトル: ' + m.title;
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.textContent = 'サブタイトル: ' + m.subtitle;
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.textContent = '番組説明: ' + m.content;
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.textContent = '出演者: ' + m.act;
    u.insertAdjacentElement('beforeend', l);
  }
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
b = document.querySelector('button#search');
b.addEventListener('click', sendRequest);

// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
    let cha = document.querySelector('#channel');
    let gen = document.querySelector('#genre');
    let chan = cha.value;
    let genr = gen.value;
    let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/' + chan + '-' + genr + '-j.json';
    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

	// サーバから送られてきたデータを出力
	  let data = resp.data;

    if (typeof data === 'string') {
        data = JSON.parse(data);
    }
    printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: textContent 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}