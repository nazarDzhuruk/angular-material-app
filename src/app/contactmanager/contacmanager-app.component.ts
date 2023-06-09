import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contacmanager-app',
  template: `
  <app-sidenav></app-sidenav>
  `,
  styles: [
  ]
})
export class ContacmanagerAppComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl("assets/avatars.svg"));
   }

  ngOnInit(): void {
  }

}
