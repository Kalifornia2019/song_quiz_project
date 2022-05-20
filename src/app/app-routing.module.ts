import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './user.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    loadChildren: () => import('./pages/start-page/start-page.module').then(m => m.StartPageModule)
  },
  { path: 'quiz',
    loadChildren: () => import('./pages/quiz-page/quiz-page.module').then(m=>m.QuizPageModule),
    canActivate: [UserGuard]
  },
  {
    path: 'summary',
    loadChildren: () => import('./pages/summary-page/summary-page.module').then(m => m.SummaryPageModule),
    canActivate: [UserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserGuard]
})
export class AppRoutingModule { }
