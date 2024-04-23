import * as vscode from 'vscode';
import { cleanClasses } from './cleaners/clean';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('reset-classes.clean', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showErrorMessage('Error');
			return;
		}

		cleanClasses(editor);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }
