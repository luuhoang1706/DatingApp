import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolver/member-detail.resolver';
import { MemberListResolver } from './_resolver/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolver/member-edit.resolver';
<<<<<<< HEAD
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
=======
>>>>>>> 65afe56064439c9ce28c9aad420ee4a71796a6f4

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    {
        path: '',
        // runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
<<<<<<< HEAD
            { path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver}},
            { path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver}},
            {path: 'member/edit', component: MemberEditComponent,
                resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges]},
=======
            { path: 'members', component: MemberListComponent,resolve: {users: MemberListResolver}},
            { path: 'members/:id', component: MemberDetailComponent,resolve: {user: MemberDetailResolver}},
            { path: 'member/edit', component: MemberEditComponent, resolve: {user: MemberEditResolver}},
>>>>>>> 65afe56064439c9ce28c9aad420ee4a71796a6f4
            { path: 'messages', component: MessagesComponent},
            { path: 'lists', component: ListsComponent},
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];
