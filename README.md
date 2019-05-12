<h1 align="center"><img src="https://raw.githubusercontent.com/1natsu172/vscode-insert-linebreak-tag/master/images/plugin-icon@2x.png" height="128"><br>Insert &lt;br&gt; Tag</h1>
<p align="center"><strong>with Dreamweaver's keybinding style.</strong></p>

<hr>

# Quick insert &lt;br&gt; tag = [Shift+Enter]

Very easy to insert `<br>` HTML tag keybind, with Dreamweaver's keybinding style.

* simple keybinding
  * `shift+enter`

![](https://raw.githubusercontent.com/1natsu172/vscode-insert-linebreak-tag/master/images/insert-br-demo.gif)

## Features

Quick insert `<br>` tag with keybind.

### Support multi cursor

Single or Multiple selections ok.

### Support JSX language

Tags are inserted in the form of `<br />` in jsx language file.


## Usage

### Push `shift+enter` keys.

Then insert `<br>` tag. Easy.

## Options

Can set options in your `settings.json`.

### "insert-br-tag.enableOnLanguage"

Setting of language in which br-tag is inserted.

Example(This notation is the default setting):

```json
"insert-br-tag.enableOnLanguage": [
  "javascript",
  "javascriptreact",
  "typescript",
  "typescriptreact",
  "markdown",
  "html"
]
```

### "insert-br-tag.trailingSlashLanguage"

Setting of language to use trailing slash format(`<br />`).

Example(This notation is the default setting):

```json
"insert-br-tag.trailingSlashLanguage": [
  "javascript",
  "javascriptreact",
  "typescript",
  "typescriptreact"
]
```

## Requirements

```
"vscode": "^1.16.0"
```

---

## CHANGELOG

See https://github.com/1natsu172/vscode-insert-linebreak-tag/blob/master/CHANGELOG.md

## Author

1natsu

GitHub: https://github.com/1natsu172  
Twitter: [@1natsu172](https://twitter.com/1natsu172)