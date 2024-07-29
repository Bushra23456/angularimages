import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes} from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { RegisterComponent } from './register/register.component';
import { NewformComponent } from './newform/newform.component';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter([{path:'',redirectTo:'register',pathMatch:'full'},
    {path:'register',component:RegisterComponent},
    {path:'newpage',component:NewformComponent},

  ]),
   provideClientHydration()]
};
