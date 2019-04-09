export interface  INotification {
  type: 'error' | 'info' | 'warn' | 'success';
  message: string;
  closeLabel: string;
}
