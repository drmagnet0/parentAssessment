import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';

import { AppBootstrapModule } from './app-bootstrap.module';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule }    from '@angular/common/http';
import { LoginService } from './services/login.service';
import { AuthService } from './services/auth.service';
import { UsersListComponent } from './components/users-list/users-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: UsersListComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  // { path: 'home', component: UsersListComponent, canActivate: [AuthGuard]}
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AuthService,AuthGuard,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
