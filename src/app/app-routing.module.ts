import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './MainCompleto/main/main.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ComoFuncionaComponent } from './ComoFuncionaCompleto/como-funciona/como-funciona.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { BlogComponent } from './blogCompleto/blog/blog.component';
import { UsuarioComponent } from './UsuarioCompleto/usuario/usuario.component';
import { PostComponent } from './PostCompleto/post/post.component';
import { ErrorComponent } from './error/error.component';
import { RegistroComponent } from './UsuarioCompleto/registro/registro.component';
import { LoginComponent } from './login/login.component';
import { BlogMainComponent } from './blogCompleto/blog-main/blog-main.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },

  { path: 'main', component: MainComponent },
  { path: 'comofunciona', component: ComoFuncionaComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'servicios/buscador', component: BuscadorComponent },
  { path: 'servicios/blog', component: BlogComponent },
  { path: 'servicios/blog/categoria/:categoria', component: BlogMainComponent},
  { path: 'servicios/blog/post/:idPost', component: PostComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },


  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
