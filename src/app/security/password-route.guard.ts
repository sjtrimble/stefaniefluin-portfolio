import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RoutePasswordService } from './route-password.service';

export const passwordRouteGuard: CanActivateFn = (route, state) => {
  const passwordArea = (route.data?.['passwordArea'] as string | undefined) ?? 'default';
  const passwordService = inject(RoutePasswordService);

  if (passwordService.isUnlocked(passwordArea)) {
    return true;
  }

  return inject(Router).createUrlTree(['/unlock'], {
    queryParams: {
      area: passwordArea,
      returnUrl: state.url
    }
  });
};
