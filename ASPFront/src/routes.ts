import { Routes } from "@angular/router";
import { HomeComponent } from "./app/home/home.component";
import { ListsComponent } from "./app/lists/lists.component";
import { MemberDetailComponent } from "./app/members/member-detail/member-detail.component";
import { MemberEditComponent } from "./app/members/member-edit/member-edit.component";
import { MemberListComponent } from "./app/members/member-list/member-list.component";
import { MessagesComponent } from "./app/messages/messages.component";
import { AuthGuard } from "./app/_guards/auth.guard";
import { PreventUnsavedChanges } from "./app/_guards/prevent-unsaved-changes.guard";
import { MemberDetailResolver } from "./app/_resolvers/member-detail.resolver";
import { MemberEditResolver } from "./app/_resolvers/member-edit.resolver";
import { MemberListResolver } from "./app/_resolvers/member-list.resolver";

export const appRoutes:Routes = [
    { path: '', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MemberListComponent,resolve:{users:MemberListResolver}},
            { path: 'members/:id', component: MemberDetailComponent,resolve:{user:MemberDetailResolver}},
            { path: 'member/edit', component:MemberEditComponent,
            resolve:{user:MemberEditResolver}, canDeactivate: [PreventUnsavedChanges]},
            { path: 'messages', component: MessagesComponent },
            { path: 'lists', component: ListsComponent },
        ]
    },
   
    { path: '**', redirectTo: '', pathMatch: 'full' },



];