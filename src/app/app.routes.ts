import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { JointFamilyTreeComponent } from './joint-family-tree/joint-family-tree.component';
import { CurrentSistersComponent } from './current-sisters/current-sisters.component';
import { ChapterMembersComponent } from './chapter-members/chapter-members.component';
import { BandHistoryComponent } from './band-history/band-history.component';
import { ChapterHistoryComponent } from './chapter-history/chapter-history.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'chapter-history',
    component: ChapterHistoryComponent
  }, {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'band-history',
    component: BandHistoryComponent
  },
  {
    path: 'current-sisters',
    component: CurrentSistersComponent
  },
  {
    path: 'joint-family-tree',
    component: JointFamilyTreeComponent
  },
  {
    path: 'chapter-members',
    component: ChapterMembersComponent
  }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
