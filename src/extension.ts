'use strict'
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import { TextDocument } from 'vscode'

const EXTENSION_ID = 'insert-br-tag'

const lineBreakTag = () => {
  const editor = vscode.window.activeTextEditor
  const extensionConfig = vscode.workspace.getConfiguration(
    EXTENSION_ID,
    editor.document.uri
  )
  const currentLanguageId = editor.document.languageId

  const trailingSlashLanguageList = extensionConfig.get(
    'trailingSlashLanguage'
  ) as string[]

  const tag = trailingSlashLanguageList.includes(currentLanguageId)
    ? `<br />`
    : `<br>`

  return tag
}

const isEnableOnLanguage = (
  enableLanguageList: TextDocument['languageId'][],
  languageId: TextDocument['languageId']
) => enableLanguageList.includes(languageId)

function insertEditorSelection(text: string) {
  const editor = vscode.window.activeTextEditor
  const extensionConfig = vscode.workspace.getConfiguration(
    EXTENSION_ID,
    editor.document.uri
  )
  const currentLanguageId = editor.document.languageId
  const enableLanguageList = extensionConfig.get('enableOnLanguage') as string[]

  if (!isEnableOnLanguage(enableLanguageList, currentLanguageId)) return

  const selections = editor.selections

  editor.edit(editBuilder => {
    selections.forEach(selection => {
      editBuilder.insert(selection.active, text)
    })
  })
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
  const insertLineBreak = vscode.commands.registerCommand(
    `${EXTENSION_ID}.insertToSelection`,
    () => {
      insertEditorSelection(lineBreakTag())
    }
  )

  context.subscriptions.push(insertLineBreak)
}

// this method is called when your extension is deactivated
export function deactivate() {}
