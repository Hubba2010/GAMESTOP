// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { Observable, map, take } from 'rxjs';
// import { AuthService } from '../auth.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class NotLoggedInGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(): boolean | Observable<boolean> {
//     return this.authService.isLoggedIn$.pipe(
//       take(1),
//       map((loggedIn) => {
//         if (loggedIn) {
//           return true;
//         } else {
//           this.router.navigate(['/login']);
//           return false;
//         }
//       })
//     );
//   }
// }