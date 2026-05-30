import { Route } from '@angular/router';
import { passwordRouteGuard } from './password-route.guard';

export function withPasswordProtection(route: Route, passwordArea: string): Route {
  return {
    ...route,
    canActivate: [...(route.canActivate ?? []), passwordRouteGuard],
    data: {
      ...(route.data ?? {}),
      passwordArea
    }
  };
}
