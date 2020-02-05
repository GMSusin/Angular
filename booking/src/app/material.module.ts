import { NgModule } from '@angular/core';
import {MatBadgeModule, MatListModule, MatTabsModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({

    imports: [
        MatBadgeModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule
    ],
    exports: [
        MatBadgeModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule
    ]

})

export class MaterialModule {}
