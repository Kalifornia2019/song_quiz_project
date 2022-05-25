import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { StartPageModule } from './pages/start-page/start-page.module';
import { QuizPageModule } from './pages/quiz-page/quiz-page.module';
import { SummaryPageModule } from './pages/summary-page/summary-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StartPageModule,
    QuizPageModule,
    SummaryPageModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
