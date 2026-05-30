import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { RoutePasswordService } from '../../security/route-password.service';

@Component({
  selector: 'app-unlock-page',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './unlock-page.component.html'
})
export class UnlockPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly passwordService = inject(RoutePasswordService);
  private readonly queryParams = toSignal(this.route.queryParamMap);

  protected readonly password = signal('');
  protected readonly error = signal('');

  protected readonly area = computed(() => this.queryParams()?.get('area') ?? 'default');
  protected readonly returnUrl = computed(() => this.queryParams()?.get('returnUrl') ?? '/');

  protected submit(): void {
    this.error.set('');

    const unlocked = this.passwordService.unlock(this.area(), this.password().trim());
    if (!unlocked) {
      this.error.set('Incorrect password. Please try again.');
      return;
    }

    void this.router.navigateByUrl(this.returnUrl());
  }
}
