const Nightmare = require('nightmare')

async function getLatestPostTitle (nm, url) {
  // urlが示すページへ移動
  nm.goto(url)
  // HTML中から、最新記事のタイトル文字列を取得
  return nm.evaluate(function () {
    return document.querySelector('.archive article:first-child h2 a').innerText
  })
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
