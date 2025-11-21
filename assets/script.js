async function loadArticles() {
  const container = document.getElementById("articles");

  // サンプル記事を配列で管理
  const articles = ["articles/sample-article.md"];

  for(const path of articles){
    const res = await fetch(path);
    const md = await res.text();
    const html = marked.parse(md);
    const articleEl = document.createElement("article");
    articleEl.innerHTML = html;
    container.appendChild(articleEl);
  }
}

loadArticles();
