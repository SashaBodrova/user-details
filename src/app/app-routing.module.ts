import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from "./services/guards/auth.guard";

import { HomePageComponent } from "./pages/home/components/home-page/home-page.component";
import { AboutPageComponent } from "./pages/about/components/about-page/about-page.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

import { UsersListComponent } from "./pages/users-page/components/users-list/users-list.component";
import { UserResolverService } from "./services/resolvers/user-resolver.service";
import { TemplateFormComponent } from "./pages/template-form/template-form.component";
import { ReactiveFormComponent } from "./pages/reactive-form/reactive-form.component";

const routes: Routes = [
  { path: '',
    component: HomePageComponent,
    canActivate: [authGuard],
    data: { page: 1, search: 'blabla' },
    resolve: { user: UserResolverService }
  },
  { path: 'users', component: UsersListComponent,
    canActivateChild: [authGuard],
  },
  { path: 'about', component: AboutPageComponent,
  },
  { path: 'template-form', component: TemplateFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
