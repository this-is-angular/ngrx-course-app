import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { categoryReducer } from './state/reducer';
import { CategoryListContainerComponent } from './category-list/category-list-container/category-list-container.component';
import { CategoryListPresenterComponent } from './category-list/category-list-presenter/category-list-presenter.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListContainerComponent,
    CategoryListPresenterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({categories: categoryReducer}),
    MatListModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
