import { AuthService } from 'src/app/_services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  
  constructor(private authService: AuthService) {}

  canActivate(route, state) {
    return this.authService.isAuthenticated();
  }
}
