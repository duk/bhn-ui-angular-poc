import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BhnNavComponent } from './bhn-nav/bhn-nav.component';
import { BhnMessageComponent } from './bhn-message/bhn-message.component';
import { BhnMenuComponent } from './bhn-menu/bhn-menu.component';
import { BhnCardComponent } from './bhn-card/bhn-card.component';
import { BhnLevelComponent } from './bhn-level/bhn-level.component';
import { BhnPanelComponent } from './bhn-panel/bhn-panel.component';
import { BhnTabsComponent } from './bhn-tabs/bhn-tabs.component';
import { BhnModalComponent } from './bhn-modal/bhn-modal.component';
import { BhnPaginationComponent } from './bhn-pagination/bhn-pagination.component';
import { BhnFooterComponent } from './bhn-footer/bhn-footer.component';
import { BhnHeroComponent } from './bhn-hero/bhn-hero.component';
import { BhnSectionComponent } from './bhn-section/bhn-section.component';
import { BhnBoxComponent } from './bhn-box/bhn-box.component';
import { BhnButtonComponent } from './bhn-button/bhn-button.component';
import { BhnContentComponent } from './bhn-content/bhn-content.component';
import { BhnFormComponent } from './bhn-form/bhn-form.component';
import { BhnTagComponent } from './bhn-tag/bhn-tag.component';
import { BhnTileComponent } from './bhn-tile/bhn-tile.component';
import { BhnTableComponent } from './bhn-table/bhn-table.component';
import { BhnMediaComponent } from './bhn-media/bhn-media.component';

@NgModule({
  declarations: [
    AppComponent,
    BhnNavComponent,
    BhnMessageComponent,
    BhnMenuComponent,
    BhnCardComponent,
    BhnLevelComponent,
    BhnPanelComponent,
    BhnTabsComponent,
    BhnModalComponent,
    BhnPaginationComponent,
    BhnFooterComponent,
    BhnHeroComponent,
    BhnSectionComponent,
    BhnBoxComponent,
    BhnButtonComponent,
    BhnContentComponent,
    BhnFormComponent,
    BhnTagComponent,
    BhnTileComponent,
    BhnTableComponent,
    BhnMediaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
