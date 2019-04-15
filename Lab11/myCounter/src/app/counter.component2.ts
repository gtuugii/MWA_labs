import {Component, Input} from "@angular/core"

@Component({
    selector : "student",
    template : "This is child component"
    //,inputs: ['parentValue']
})

export class CounterComponent{
    @Input() parentValue: string;
}

