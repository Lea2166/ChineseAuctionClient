import { computed, inject, Injectable, signal } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {

  private readonly msg = inject(NzMessageService);
  private readonly notify = inject(NzNotificationService);


  success(content: string) {
    this.msg.success(content);
  }


  info(title: string, content: string, persistent = false) {
    this.notify.info(title, content, {
      nzDuration: persistent ? 0 : 4500
    });
  }

  warning(title: string, content: string) {
    this.notify.warning(title, content);
  }

  error(title: string, error: any) {
    const message = typeof error === 'string' ? error : error.error.map((err: string) => err).join('\n') || 'An unknown error occurred';
    this.notify.error(title, message, { nzPlacement: 'bottomRight' });
  }
}



