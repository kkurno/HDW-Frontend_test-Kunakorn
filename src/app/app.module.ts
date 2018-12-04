import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment';

import { HandleImageDirective } from './directive/handle-image.directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ManageComponent } from './pages/manage/manage.component';
import { OverviewComponent } from './pages/overview/overview.component';

import { HeaderComponent } from './components/header/header.component';
import { ItemHeaderComponent } from './components/item/item-header/item-header.component';
import { ItemListComponent } from './components/item/item-list/item-list.component';
import { ItemsComponent } from './components/item/items.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalRemoveComponent } from './components/modal/modal-remove/modal-remove.component';
import { ModalEditComponent } from './components/modal/modal-edit/modal-edit.component';
import { ModalAddComponent } from './components/modal/modal-add/modal-add.component';
import { ValidationComponent } from './components/validation/validation.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageComponent,
    OverviewComponent,
    HeaderComponent,
    HandleImageDirective,
    ItemHeaderComponent,
    ItemListComponent,
    ItemsComponent,
    ModalComponent,
    ModalRemoveComponent,
    ModalEditComponent,
    ModalAddComponent,
    ValidationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
