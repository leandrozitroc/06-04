import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuModule} from 'primeng/menu';
import { MenuComponent } from '../component/menu.component';
import {SidebarModule} from 'primeng/sidebar';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {PanelMenuModule} from 'primeng/panelmenu';


@NgModule({
  declarations: [MenuComponent],
  exports: [MenuComponent],
  imports: [
    CommonModule,
    SidebarModule,
    MenuModule,
    TieredMenuModule,
    PanelMenuModule
  ]
})
export class MenuFixModule { }
