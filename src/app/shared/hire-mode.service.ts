import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HireModeService {
  readonly hireMode = signal(false);

  setHireMode(value: boolean): void {
    this.hireMode.set(value);
  }
}
