import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrocarSenhaComponent } from '../component/trocar-senha.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TrocarSenhaRoutingModule } from '../route/trocar-senha.routing.module';
import { TrocarSenhaService } from '../service/trocar-senha.service';

@NgModule({
  declarations: [TrocarSenhaComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    TrocarSenhaRoutingModule
  ],
  providers: [TrocarSenhaService]
})
export class TrocarSenhaModule { }
