
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
}
b.addEventListener('click', val);

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let bo = document.querySelector('body'); 
  let di = document.createElement('div');
  bo.insertAdjacentElement('afterend', di); 
  di.setAttribute('id', 'result');
  let n = data.list.g1;
 /* let h1st = document.createElement('h1');
  h1st.setAttribute('id', 'strong');
  let h1add = document.createElement('h1');
  h1st = 'NHKの番組';
  h1add = 'の検索結果';
  let h1 = document.createElement('h1');
  h1.textContent = h1st + h1add;
  di.insertAdjacentElement('beforeend', h1);
  let img = document.createElement('img');
  img.setAttribute('src', 'NHK_logo.svg.png');
  img.setAttribute('title', 'NHKlogo');
  img.setAttribute('width', '100');
  di.insertAdjacentElement('beforeend', img);
  let sel = document.createElement('p#select');
  sel.setAttribute('name', channnel);
  sel.setAttribute('id', channel);
  let op = document.createElement('option');*/
  let u = document.createElement('ul');
  di.insertAdjacentElement('afterend', u);
  for(let i = 0; i < n.length; i++) {
    let m = n[i];
    let h2 = document.createElement('h2');
    h2.textContent = '検索結果' + (i + 1) + '件目';
    u.insertAdjacentElement('beforeend', h2);
    let h4 = document.createElement('h4');
    u.insertAdjacentElement('beforeend', h4);
    let l = document.createElement('li');
    l.textContent='開始時刻: ' + m.start_time;
    h4.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent='終了時刻: ' + m.end_time;
    h4.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent='チャンネル: ' + m.service.name;
    h4.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent='タイトル: ' + m.title;
    h4.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent='サブタイトル: ' +  m.subtitle;
    h4.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent='番組説明: ' + m.content;
    h4.insertAdjacentElement('beforeend', l);
    l = document.createElement('li');
    l.textContent='出演者: ' + m.act;
    h4.insertAdjacentElement('beforeend', l);
  }
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: textContent 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はテレビ番組表のデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0700",
          "0504"
        ]
      },
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0700"
        ]
      }
    ]
  }
};

