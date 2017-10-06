'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

const LINE_BREAK_TAG = `<br>`

function insertEditorSelection(text: string) {
  const editor = vscode.window.activeTextEditor;
  const selections = editor.selections;
  
  editor.edit((editBuilder) => {
    selections.forEach((selection) => {
      editBuilder.insert(selection.active, text);
    });
  });
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let insertLineBreak = vscode.commands.registerCommand(
    'insertHTMLTag.insertLineBreak',
    () => { insertEditorSelection(LINE_BREAK_TAG) }
  )

  context.subscriptions.push(insertLineBreak);
}

// this method is called when your extension is deactivated
export function deactivate() {
}