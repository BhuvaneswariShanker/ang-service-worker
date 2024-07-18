import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { WebServiceWorker } from '../service/service-worker';

@Component({
  selector: 'app-root',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ang-service-worker';
  isNewAppVersionAvailable: boolean = false;
  newAppUpdateAvailableSubscription: Subscription = new Subscription();


  constructor(
    private webServiceWorker: WebServiceWorker,
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.checkIfAppUpdated();
  }

  checkIfAppUpdated() {
    this.newAppUpdateAvailableSubscription = this.webServiceWorker.$isAnyNewUpdateAvailable.subscribe((versionAvailableFlag: boolean) => {
      this.isNewAppVersionAvailable = versionAvailableFlag;
    });
  }

  refreshApp() {
    window.location.reload();
  }

  ngOnDestroy() {
    this.newAppUpdateAvailableSubscription?.unsubscribe();
  }
} 

