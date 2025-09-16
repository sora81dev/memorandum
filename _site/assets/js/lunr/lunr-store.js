var store = [{
        "title": "iOS26 / iPadOS26でスクリーンショットがフルスクリーンになる時の対処法",
        "excerpt":"解決方法   OS言語: 日本語  設定アプリより 一般→スクリーンショット   「フルスクリーンショット」をオフにする   OS言語: 英語  Settingsアプリより、 General→Screen Capture   「Full-Screen Previews」をオフにする  ","categories": ["Apple"],
        "tags": [],
        "url": "/1/",
        "teaser": null
      },{
        "title": "GitHub Pagesで、「Error: The process '/opt/hostedtoolcache/Ruby/3.1.6/x64/bin/gem' failed with exit code 1」と出た時の対処法",
        "excerpt":"解決方法  Rubyの要求バージョンを上げる      rubyのバージョンを確認する              github/workflowsの中のjekyll.ymlを開く。            40行目あたりを、先ほど確認したバージョンに変える          バージョンはそのまま入れるわけではなく、a.b.c (上の図の3.4.2)のa.b(上の図の3.4)のみを入れる    jobs:     build:         ...         steps:             ...             - name: Setup Ruby                 ...                 with:                      ruby-version: 'x.x'   ","categories": ["GitHub"],
        "tags": [],
        "url": "/2/",
        "teaser": null
      },{
        "title": "gitで「error: remote origin already exists」と表示された時の対処法",
        "excerpt":"エラーの意味  error: remote origin already existsの意味は読んで字の如く、   リモートオリジンを追加しようとしたけど、もうあるから追加できないよ   という意味です   解決方法   $ git remote rm origin   これで現在のリモートレポジトリが削除されます。  ","categories": ["git"],
        "tags": [],
        "url": "/3/",
        "teaser": null
      },{
    "title": "Posts by Category",
    "excerpt":" ","url": "http://localhost:4000/categories/"
  },{
    "title": "Posts by Tag",
    "excerpt":"","url": "http://localhost:4000/tags/"
  },{
    "title": "Apple",
    "excerpt":"","url": "http://localhost:4000/categories/apple/"
  },{
    "title": "GitHub",
    "excerpt":"","url": "http://localhost:4000/categories/github/"
  },{
    "title": "git",
    "excerpt":"","url": "http://localhost:4000/categories/git/"
  }]
