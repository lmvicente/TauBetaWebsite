import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CurrentSistersComponent } from './current-sisters/current-sisters.component';
import { ChapterMembersComponent } from './chapter-members/chapter-members.component';
import { JointFamilyTreeComponent } from './joint-family-tree/joint-family-tree.component';
import { BandHistoryComponent } from './band-history/band-history.component';
import { ChapterHistoryComponent } from './chapter-history/chapter-history.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavComponent,
    AboutUsComponent,
    CurrentSistersComponent,
    ChapterMembersComponent,
    JointFamilyTreeComponent,
    BandHistoryComponent,
    ChapterHistoryComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutes
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
