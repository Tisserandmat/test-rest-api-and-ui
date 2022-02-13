import { Routes } from '@angular/router';
import {UsersComponent} from "./user/users/users.component";
import {UseridComponent} from "./user/userid/userid.component";
import {UsersaveComponent} from "./user/usersave/usersave.component";

const ROUTES: Routes = [
  { path: 'users', component:  UsersComponent },
  { path: 'userId', component: UseridComponent },
  { path: 'userSave', component: UsersaveComponent },
];

export { ROUTES };
