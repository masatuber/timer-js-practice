//時間についての変数定義、let宣言更新はできても再宣言はできない
let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

//HTMLから要素を取得する変数
const timerElement = document.getElementById('timer');

//スタートボタンのHTML要素
const start = document.getElementById('start');

//リセットボタンのHTML要素
const reset = document.getElementById('reset');

//イベント処理を実行、( 種類, 関数 アローもある, false )
start.addEventListener('click', () => {
  if (isRunning) {
  //条件分岐 タイマーが起動していない時の処理
  //clearInterval(setInterval関数定義)windowインターフェイスのメソッド
    clearInterval(timer);

  //HTML解釈せずに文字列として出力する、textContent
    start.textContent = "start";

  } else {
  //タイマーが起動している状態の処理で一定時間ごとに特定の処理を繰り返す
    timer = setInterval(updateTimer, 1000);
    start.textContent = "stop";
  } 
// 否定演算子:真偽値を反転させる、trueであればfalseに、falseであればtrueに変換します。
  isRunning = !isRunning;

});

  //resetがclickされた時の関数
  reset.addEventListener('click', resetTimer);

//タイマー数値を表示の関数
function updateTimer() {
  //インクリメントで加算処理
  seconds++;

  //seconds条件分岐60の時と比較
  if (seconds === 60) {
    //0で初期化
    seconds = 0;
    //インクリメントで加算処理
    minutes++;

    //minuts が60の時の処理
    if (minutes === 60) {
      //0で初期化
      minutes = 0;

      //インクリメントで加算処理
      hours++;
    }
  }
  //文字列として出力する、textContent,変数と文字列連結
  timerElement.textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

//秒の数値が10よりも下の場合は0をたすための関数
function formatTime(time) {
  //三項演算子、条件式 ? Trueの処理 : Falseの処理
  //関数の実行を終了して呼び出し元に値を返す命令がreturnでリターンより下は実行されない
  return time < 10 ? "0" + time : time;
}

//resetボタンの機能処理関数
function resetTimer() {

  //setIntervalをキャンセルする
  clearInterval(timer);
  
  //初期化する処理
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;

  //resetがclickされた時にgetElementById('timer')がtextContentに表示を変させる
  timerElement.textContent = "00:00:00";
  start.textContent = "start";
}