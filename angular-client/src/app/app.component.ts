import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './products-page/products-page.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, UserComponent, CommonModule, ProductsPageComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    public title: string = ""
    public userName: string = "Harel"
    public isVisible: boolean = false;
    public users: Array<string> = []
    public selectedUser: string = "Not User selected"

    constructor() {
        this.title = "Is this Text visible?"
    }

    getTitle() {
        return this.title
    }

    toggleTitle() {
        this.isVisible = !this.isVisible
    }

    loadUsers() {
        console.log("loading users...")
        this.users = ["Harel", "Adi", "Ilan", "Michal"]
        this.users.push("Wili")
        console.log(this.users)
    }

    selectUserParent(d: any) {
        this.selectedUser = d;
    }
}

