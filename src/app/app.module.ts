import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CabeceraComponent } from "./cabecera/cabecera.component";
import { PiePaginaComponent } from "./pie-pagina/pie-pagina.component";
import { ServiciosComponent } from "./servicios/servicios.component";
import { ComoFuncionaComponent } from "./ComoFuncionaCompleto/como-funciona/como-funciona.component";
import { FaqComponent } from "./ComoFuncionaCompleto/faq/faq.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { BuscadorComponent } from "./buscador/buscador.component";
import { ResultadosComponent } from "./buscador/resultados/resultados.component";
import { BlogComponent } from "./blogCompleto/blog/blog.component";
import { PostComponent } from "./PostCompleto/post/post.component";
import { RegistroComponent } from "./UsuarioCompleto/registro/registro.component";
import { UsuarioComponent } from "./UsuarioCompleto/usuario/usuario.component";
import { PostComentariosComponent } from "./PostCompleto/post-comentarios/post-comentarios.component";
import { PostFiltroComponent } from "./PostCompleto/post-filtro/post-filtro.component";
import { UsuarioFiltroComponent } from "./UsuarioCompleto/usuario-filtro/usuario-filtro.component";
import { BlogRecomendadosComponent } from "./blogCompleto/blog-recomendados/blog-recomendados.component";
import { PostAutorComponent } from "./PostCompleto/post-autor/post-autor.component";
import { UsuarioBecasComponent } from "./UsuarioCompleto/usuario-becas/usuario-becas.component";
import { BlogNuevosComponent } from "./blogCompleto/blog-nuevos/blog-nuevos.component";
import { UsuarioPersonaComponent } from "./UsuarioCompleto/usuario-persona/usuario-persona.component";
import { MainHeroComponent } from "./MainCompleto/main-hero/main-hero.component";
import { MainInfoComponent } from "./MainCompleto/main-info/main-info.component";
import { MainOpinionesComponent } from "./MainCompleto/main-opiniones/main-opiniones.component";
import { MainServiciosComponent } from "./MainCompleto/main-servicios/main-servicios.component";
import { MainComponent } from "./MainCompleto/main/main.component";
import { BlogMainComponent } from "./blogCompleto/blog-main/blog-main.component";
import { MainBlogComponent } from "./MainCompleto/main-blog/main-blog.component";

import { AngularFontAwesomeModule } from "angular-font-awesome";
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ErrorComponent } from './error/error.component'
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NgxPopper } from 'angular-popper';

import {MatStepperModule} from '@angular/material/stepper'; 
import { MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PiePaginaComponent,
    ServiciosComponent,
    ComoFuncionaComponent,
    FaqComponent,
    ContactoComponent,
    BuscadorComponent,
    ResultadosComponent,
    BlogComponent,
    PostComponent,
    RegistroComponent,
    UsuarioComponent,
    PostComentariosComponent,
    PostFiltroComponent,
    UsuarioFiltroComponent,
    BlogRecomendadosComponent,
    PostAutorComponent,
    UsuarioBecasComponent,
    BlogNuevosComponent,
    UsuarioPersonaComponent,
    MainHeroComponent,
    MainInfoComponent,
    MainOpinionesComponent,
    MainServiciosComponent,
    MainComponent,
    BlogMainComponent,
    MainBlogComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPopper,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
