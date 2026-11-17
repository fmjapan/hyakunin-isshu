# 百人一首100首 — 原本バックアップ管理（2026-11-17）

この文書は画像原本の保全に関する **GitHub側の復元台帳** です。アプリの `main` ブランチや公開用ファイルは変更しません。

## 現在の実在資産

- 100首のうち **第1〜26首に関する32点のPNG原本**をChatGPTライブラリに保存。
- **第18首だけユーザー承認済み**。その他は未承認の初稿・QA候補・修正候補。合格と承認と公開は別の状態です。
- 4分割バックアップのSHA256を `SHA256SUMS_20261117.txt` に記載。
- 保存先：ChatGPTライブラリ `/娘の宿題/百人一首_原本保管/`。
- 構図設計V3、100首進捗台帳、各PNGのハッシュを含む正本 `master_manifest_20261117.json`、復元ツール `hyakunin_restore_and_verify.py` はライブラリ内の `03_台帳と復元ツール` またはCONTROL ZIPにある。
- 第18首の原本SHA256：`ed2cbf5fce0b27941fad5a7c9bef06be6b92c6061f479470899018bf9bf73088`。

## GitHubバックアップの実体確認

**GitHubにPNG原本および4ZIPをアップロードできたことを示す記録ではありません。** GitHub Appの対象リポジトリ設定は完了し、このバックアップ用ブランチの作成・テキストファイルの書き込みが可能です。ただし、画像のファイル連携経路は利用できず、GitHub側の原本コピーは現時点で未完了です。

特に、本リポジトリは **公開（public）** のため、このバックアップブランチに画像を入れると未承認イラストも外部から見えます。画像コピーを開始するときは公開範囲に注意します。

## 原本を復元するとき

1. ChatGPTライブラリの `/娘の宿題/百人一首_原本保管/00_バックアップ/` から次の4ファイルを取得する。
   - `HYAKUNIN_WIP_CONTROL_20261117.zip`
   - `HYAKUNIN_WIP_ORIGINALS_001-010_20261117.zip`
   - `HYAKUNIN_WIP_ORIGINALS_011-020_20261117.zip`
   - `HYAKUNIN_WIP_ORIGINALS_021-026_20261117.zip`
2. 各ZIPのSHA256を `SHA256SUMS_20261117.txt` と比較する。
3. CONTROL ZIP内の `hyakunin_restore_and_verify.py` で各ZIPを検証・安全に展開し、`master_manifest.json` のPNG各SHA256と照合する。
4. **承認済み画像だけを最終版に採用**する。第1〜17首の初稿を自動採用しない。

## 証跡
- [原本32枚のバックアップ・復元テスト（private引継ぎIssue #27）](https://github.com/fmjapan/ChatGPT-Claude-Handoff/issues/27)
- [100首の制作・QA・承認台帳（private引継ぎIssue #25）](https://github.com/fmjapan/ChatGPT-Claude-Handoff/issues/25)
