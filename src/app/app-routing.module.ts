import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { ListComponent } from './observable/list/list.component';
import { ObservableComponent } from './observable/observable.component';
import {PromiseComponent} from './promise/promise.component';
import { OfFromComponent} from './observable/of-from/of-from.component'
import { ToArrayComponent } from './to-array/to-array.component';
import { MapComponent } from './observable/map/map.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { FilterComponent } from './observable/filter/filter.component';
import { TapComponent } from './observable/tap/tap.component';
import { TakeComponent } from './observable/take/take.component';
import { RetryComponent } from './observable/retry/retry.component';
import { DemoComponent } from './observable/demo/demo.component';
import { DebouncetimeComponent } from './observable/debouncetime/debouncetime.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { ReplaySubjectComponent } from './observable/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './observable/async-subject/async-subject.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { MergeComponent } from './observable/merge/merge.component';
import { MergemapComponent } from './observable/mergemap/mergemap.component';
import { SwitchmapComponent } from './observable/switchmap/switchmap.component';
import { SwitchmapProjectComponent } from './observable/switchmap-project/switchmap-project.component';
  const routes: Routes = [
  {path: 'promise', component: PromiseComponent},
  {path: 'observable', component: ObservableComponent, children:[
    {path: '', component: ListComponent},
    {path: 'from-event', component: FromEventComponent},
    {path: 'interval', component: IntervalComponent},
    {path: 'of-from', component: OfFromComponent},
    {path: 'to-array', component: ToArrayComponent},
    {path: 'map', component: MapComponent},
    {path: 'pluck', component: PluckComponent},
    {path: 'filter', component: FilterComponent},
    {path: 'tap', component: TapComponent},
    {path: 'take', component: TakeComponent},
    {path: 'retry', component: RetryComponent},
    {path: 'demo', component: DemoComponent},
    {path: 'debouncetime', component: DebouncetimeComponent},
    {path: 'subject', component: SubjectComponent},
    {path: 'replay-subject', component: ReplaySubjectComponent},
    {path: 'async-subject', component: AsyncSubjectComponent},
    {path: 'concat', component: ConcatComponent},
    {path: 'merge', component: MergeComponent},
    {path: 'mergemap', component: MergemapComponent},
    {path: 'switchmap', component: SwitchmapComponent},
    {path: 'switchmap-project', component: SwitchmapProjectComponent}


   ]},
  {path: "**", redirectTo: 'promise'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
