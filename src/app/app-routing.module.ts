import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./template/home/home.component";

const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo:'/home'},
  {path:'home' , component:HomeComponent},
  {
    path: 'about-us', loadChildren: () => import("./template/about-us/about-us.module").then(m => m. AboutUsModule ),

  },
  {
    path: 'activities', loadChildren: () => import("./template/activities/activities.module").then(m => m.ActivitiesModule  ),

  },
  {
    path: 'carrer', loadChildren: () => import("./template/carrer/carrer.module").then(m => m. CarrerModule ),

  },
  {
    path: 'contact-us', loadChildren: () => import("./template/contact-us/contact-us.module").then(m => m. ContactUsModule ),

  },
  {
    path: 'dashboard', loadChildren: () => import("./template/dashboard/dashboard.module").then(m => m. DashboardModule ),

  },
  {
    path: 'events', loadChildren: () => import("./template/events/events.module").then(m => m. EventsModule ),

  },
  {
    path: 'stakeholders', loadChildren: () => import("./template/stakeholders/stakeholders.module").then(m => m. StakeholdersModule ),

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
