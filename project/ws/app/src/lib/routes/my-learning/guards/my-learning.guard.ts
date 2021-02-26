import { Injectable } from '@angular/core'
import { CanActivate, Router, UrlTree } from '@angular/router'
import { ConfigurationsService } from '@ws-widget/utils'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class LearningGuard implements CanActivate {
  constructor(private configSvc: ConfigurationsService, private router: Router) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.configSvc && this.configSvc.restrictedFeatures && !this.configSvc.restrictedFeatures.has('my-learning')) {
      return true
    }
    return this.router.parseUrl('/page/home')
  }
}
