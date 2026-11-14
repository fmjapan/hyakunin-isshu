百人一首・iPhone対応音声暗記アプリ / GitHub Pages公開手順

1. GitHubで新しいPublicリポジトリ（例: hyakunin-isshu）を作成する。
   GitHub FreeでPagesを使うにはPublicリポジトリが必要。
2. このZIPを展開する。
3. 展開したフォルダの「中身」をリポジトリの一番上（ルート）にアップロードする。
   index.html、manifest.webmanifest、service-worker.js、PNG 3つ、.nojekyll。
   ZIPファイルをそのまま1個アップロードしてもアプリは公開されない。
4. リポジトリで Settings > Pages > Build and deployment > Sourceを
   Deploy from a branchに変更。Branch = main, Folder = /(root) を選んで Save。
5. 発行された URL (例: https://ユーザー名.github.io/hyakunin-isshu/ ) をiPhoneのSafariで開く。
6. Safariの共有メニュー > ホーム画面に追加 > 追加。

使い方: 全文を音声で聞く -> 先頭の句だけ見る/聞く -> 残りを声に出して暗唱
-> 答え合わせ -> 正誤を記録する。

音声はMP3ファイルではなくiPhoneの日本語合成音声を使うため、音声データの容量はゼロ。
読み上げは画面の再生ボタンをタップして開始する。
古語や旧仮名遣いの抑揚が不自然な場合あり。学校配布資料の表記・読みが最優先。
学習記録は開いた端末のブラウザ内に保存され、端末間で自動同期しない。
Safariとホーム画面アプリでは記録が別になることがあるので、同じ起動方法を使う。
データ消去に備えバックアップをとる。
初回の読み込みにはインターネット接続が必要。オフライン再利用時の音声動作は端末設定に依存する。
公開したWebページは誰でも閲覧できる。個人情報は追加しない。
