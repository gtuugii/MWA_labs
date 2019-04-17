import {Component, Input, Output, ContentChild, OnInit} from "@angular/core"
import { Compiler_compileModuleAndAllComponentsSync__POST_R3__ } from '@angular/core/src/linker/compiler';
import { EventEmitter } from 'protractor';
import { asTextData } from '@angular/core/src/view';

@Component({
    selector : 'scratch',
    template : `
        <h3> {{monday}} </h3>
        {{asTextData}}

        {{test}}
    `
    //,inputs: ['parentValue']
})

export class Scratch implements OnInit{
    @Input() monday;
    @ContentChild('pero') asTextData;
    test;

    ngOnInit(){
        this.test = this.asTextData.nativeElement.innerHTML;
    }
    
    //@Input() tuesday;

    //@Output() onWednesday = new EventEmitter();
    //doit() {this.onWednesday.emit('This is wednesday')}
}

