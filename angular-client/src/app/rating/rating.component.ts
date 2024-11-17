import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-rating',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './rating.component.html',
    styleUrl: './rating.component.css'
})
export class RatingComponent implements OnInit {
    @Input() stars: number = 0;
    public dummyArray: Array<number> = [];
    public isHalfStar = false;
    constructor() {
        console.log("In constructor, this.stars=", this.stars)
    }

    ngOnInit(): void {
        console.log("In ngOninit, this.stars=", this.stars)
        this.isHalfStar = this.stars - parseInt(this.stars.toString()) > 0
        for (let index = 0; index < parseInt(this.stars.toString()); index++) {
            this.dummyArray.push(1)
        }
    }
}
