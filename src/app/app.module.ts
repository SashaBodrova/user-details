import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HighlightDirective } from './directives/highlight.directive';
import { RendererHighlightDirective } from './directives/renderer-highlight.directive';
import { AlternativeIfDirective } from './directives/alternative-if.directive';

import { OrgansService } from "./services/organs.service";
import { UserResolverService } from "./services/resolvers/user-resolver.service";

import { HomePageComponent } from './pages/home/components/home-page/home-page.component';
import { AboutPageComponent } from './pages/about/components/about-page/about-page.component';

import { OrganComponent } from './pages/users-page/components/organ/organ.component';
import { OrgansComponent } from './pages/users-page/components/organs/organs.component';
import { AddOrganComponent } from './pages/users-page/components/add-organ/add-organ.component';
import { OrganCardComponent } from "./pages/organ-card/components/card-component/organ-card.component";
import { EditOrganComponent } from './pages/users-page/components/edit-organ/edit-organ.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthService } from "./services/auth.service";
import { UsersListComponent } from './pages/users-page/components/users-list/users-list.component';
import { UserComponent } from './pages/users-page/components/user/user.component';
import { UserService } from "./services/user.service";
import { TemplateFormComponent } from './pages/template-form/template-form.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    OrganComponent,
    OrgansComponent,
    AddOrganComponent,
    HighlightDirective,
    RendererHighlightDirective,
    AlternativeIfDirective,
    HomePageComponent,
    AboutPageComponent,
    OrganCardComponent,
    EditOrganComponent,
    NotFoundComponent,
    UsersListComponent,
    UserComponent,
    TemplateFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [OrgansService, AuthService, UserResolverService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
