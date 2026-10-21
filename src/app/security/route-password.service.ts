import { Injectable } from '@angular/core';

const STORAGE_KEY = 'portfolio-route-unlocks';

// Client-side route passwords are only a soft gate. For strong protection, gate routes at hosting/edge.
const DEFAULT_ROUTE_PASSWORDS: Record<string, string> = {
  caseStudies: 'change-this-password'
};

declare global {
  interface Window {
    __ROUTE_PASSWORDS__?: Record<string, string>;
  }
}

@Injectable({ providedIn: 'root' })
export class RoutePasswordService {
  private unlockedAreas = new Set<string>(this.readStoredAreas());
  private readonly routePasswords = this.readRoutePasswords();

  isUnlocked(area: string): boolean {
    if (!this.routePasswords[area]) {
      return true;
    }

    return this.unlockedAreas.has(area);
  }

  unlock(area: string, password: string): boolean {
    const expected = this.routePasswords[area];

    if (!expected) {
      return true;
    }

    if (password !== expected) {
      return false;
    }

    this.unlockedAreas.add(area);
    this.persist();
    return true;
  }

  lock(area: string): void {
    this.unlockedAreas.delete(area);
    this.persist();
  }

  private readStoredAreas(): string[] {
    if (typeof window === 'undefined') {
      return [];
    }

    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  private persist(): void {
    if (typeof window === 'undefined') {
      return;
    }

    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify([...this.unlockedAreas]));
  }

  private readRoutePasswords(): Record<string, string> {
    if (typeof window === 'undefined') {
      return DEFAULT_ROUTE_PASSWORDS;
    }

    return {
      ...DEFAULT_ROUTE_PASSWORDS,
      ...(window.__ROUTE_PASSWORDS__ ?? {})
    };
  }
}
