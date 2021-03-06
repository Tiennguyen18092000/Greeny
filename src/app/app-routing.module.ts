import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'upload', loadChildren: () => import('./pages/upload/upload.module').then(m => m.UploadModule) },
  { path: 'premium', loadChildren: () => import('./pages/premium/premium.module').then(m => m.PremiumModule) },
  { path: 'playlist', loadChildren: () => import('./pages/playlist/playlist.module').then(m => m.PlaylistModule) },
  { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) },
  { path: 'signin', loadChildren: () => import('./pages/signin/signin.module').then(m => m.SigninModule) },
  { path: '**', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
