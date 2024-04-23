import * as vscode from 'vscode';

export function cleanClasses(editor: vscode.TextEditor) {
    if (!editor) {
        vscode.window.showErrorMessage("No active text editor found.");
        return;
    }

    const document = editor.document;

    let text = document.getText();
    text = text.replace(/\s*class\s*=\s*["'][^"']*["']/g, '');

    const edit = new vscode.WorkspaceEdit();
    edit.replace(
        document.uri,
        new vscode.Range(0, 0, document.lineCount, 0),
        text
    );
    vscode.workspace.applyEdit(edit);
    vscode.window.showInformationMessage("Classes removed from file.");
}
