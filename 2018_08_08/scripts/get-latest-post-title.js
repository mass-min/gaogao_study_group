const Nightmare = require('nightmare')

async function getLatestPostTitle (nm, url) {
  // TODO
  // urlが示すページへ移動
  // HTML中から、最新記事のタイトル文字列を取得
  // タイトル文字列を返り値にとして返す
}

(async function () {
  try {
    const nightmare = new Nightmare({
      show: false
    })
    const blogUrl = 'https://mass-min.com/'
    const title = await getLatestPostTitle(nightmare, blogUrl)

    // 整形して表示
    console.log(`${blogUrl}の最新記事のタイトルは${title}です。`)

    // ヘッドレスブラウザを閉じる
    nightmare.halt()
  } catch (e) {
    console.error(e)
  }
})()
