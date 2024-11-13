import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})
export class UserComponent {
    @Input() data: string;
    @Input() userIndex: number;
    @Output() sendToParent = new EventEmitter<string>();
    constructor() {
        this.data = ""
        this.userIndex = 0
    }

    selectUser() {
        console.log(this.data)
        this.sendToParent.emit(this.data)
    }

}
