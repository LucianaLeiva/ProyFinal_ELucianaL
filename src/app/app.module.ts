import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoArgProgComponent } from './componentes/logo-arg-prog/logo-arg-prog.component';
import { RedessocComponent } from './componentes/redessoc/redessoc.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { InfoComponent } from './componentes/info/info.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HnsskillsComponent } from './componentes/hnsskills/hnsskills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArgProgComponent,
    RedessocComponent,
    BannerComponent,
    InfoComponent,
    ExperienciaComponent,
    EducacionComponent,
    HnsskillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NgCircleProgressModule.forRoot({}),
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
