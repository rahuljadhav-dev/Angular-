import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { SupportComponent } from './support/support.component';
import { ErrorComponent } from './error/error.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FormspComponent } from './formsp/formsp.component';

const routes: Routes = [
  {path:'',
    component:HomeComponent

  },
  {path:'login',
    component:LoginComponent

  },
  {path:'about',
    component:AboutComponent

  },
  {path:'support',
    component:SupportComponent

  },

  {
    path:'forms',
    component:FormspComponent

  },
  {
    path:'admin',
    component:AdminDashboardComponent

  },
  {path:'**',
    component:ErrorComponent

  }

];
=======

const routes: Routes = [];
>>>>>>> 8c6b4307b80efb8a147521129d8e529143b9597c

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
