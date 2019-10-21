import { messagesStorageKey, dialogsStorageKey } from './Constants';

export function getCurrentTime() {
  const time = new Date();
  return time.getTime();
}


export function updateAppState(appState, newMessage) {
  const messageObject = { value: newMessage.value, time: newMessage.absoluteTime };
  appState.messages.push(messageObject);
}

export function updateMessageStorage(appState) {
  localStorage.setItem(messagesStorageKey, JSON.stringify(appState.messages));
}

export function updateDialogsStorage(appState) {
  localStorage.setItem(dialogsStorageKey, JSON.stringify(appState.dialogs));
}
