import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { QuoteDetailComponent } from './components/quote-detail/quote-detail.component';
import { QuoteComponent } from './components/quote/quote.component';



@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    QuoteDetailComponent,
    QuoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





