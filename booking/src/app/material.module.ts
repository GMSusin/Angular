import { NgModule } from '@angular/core';
import {MatBadgeModule, MatListModule, MatTabsModule, MatCardModule, MatGridListModule} from '@angular/material';
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
        MatTabsModule,
        MatGridListModule,
        MatCardModule
    ],
    exports: [
        MatBadgeModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatGridListModule,
        MatCardModule
    ]

})

export class MaterialModule {}
