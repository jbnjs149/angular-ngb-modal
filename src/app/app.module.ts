import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ModalConfig } from './components/modal-config/modal-config';
import { HomeComponent } from './components/home/home.component';
import { ModalConfigService } from './components/modal-config/modal-config.service';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [AppComponent, HomeComponent, ModalConfig],
  bootstrap: [AppComponent],
  providers: [ModalConfigService]
})
export class AppModule {}
