import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'singIn', loadChildren: () => import('./pages/sing-in/sing-in.module').then(m => m.SingInModule) },
  { path: 'singUp', loadChildren: () => import('./pages/sing-up/sing-up.module').then(m => m.SingUpModule) },
  { path: 'upload', loadChildren: () => import('./pages/upload/upload.module').then(m => m.UploadModule) },
  { path: 'premium', loadChildren: () => import('./pages/premium/premium.module').then(m => m.PremiumModule) },
  { path: 'playlist', loadChildren: () => import('./pages/playlist/playlist.module').then(m => m.PlaylistModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
