import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {CONSTANTS} from './core/constants';
import {SnackBarService} from './core/services/snackbar/snack-bar.service';
import {MatSnackBarModule} from '@angular/material';
import {AuthGuard} from './core/guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(CONSTANTS.FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MatSnackBarModule,
  ],
  providers: [
    AuthGuard,
    SnackBarService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
