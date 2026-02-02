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
    let message: string = "";
    if (error.status === 0) {
      this.notify.error(title, 'Unable to connect to the server. Please check your internet connection.', { nzPlacement: 'bottomRight' });
      return;
    }
    else if (error.status >= 500) {
      this.notify.error(title, 'A server error occurred. Please try again later.', { nzPlacement: 'bottomRight' });
      return;
    }

    else {

      if (error.status === 400 && error.error.errors) {
        const validationErrors = error.error.errors;
        Object.keys(validationErrors).forEach(field => {
          console.log(`Field: ${field}, Errors: ${validationErrors[field]}`);
          message += `${validationErrors[field].map((s: string) => s).join(' ')} `;
        });
      }
      else if (error.error) {
        message = error.error.message || JSON.stringify(error.error).replace(`["`, '').replace(`"]`, '');
      }
    }

    this.notify.error(title, message, { nzPlacement: 'bottomRight' });
  }
}



