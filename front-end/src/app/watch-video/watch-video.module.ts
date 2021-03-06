import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchVideoRoutingModule } from './watch-video-routing.module';
import { WatchVideoComponent } from './watch-video.component';
import { WatchComponent } from './watch/watch.component';
import { WatchDetailsComponent } from './watch-details/watch-details.component';
import { UIModule } from '../ui/ui.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms'
import {MatInputModule} from '@angular/material/input'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import { MatchMedia } from '@angular/flex-layout/core/typings/match-media';
@NgModule({
  declarations: [WatchVideoComponent, WatchComponent, WatchDetailsComponent],
  imports: [
    CommonModule,
    WatchVideoRoutingModule,
    UIModule,
    MatGridListModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,

  ]
})
export class WatchVideoModule { }
