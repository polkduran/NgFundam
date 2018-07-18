import { Component, Input, Output, EventEmitter } from '@angular/core'
@Component({
    selector:'expert-thumbnail',
    template:`
    <div class="well hoverwell thumbnail">
        <h2>{{expert.name}}</h2>
        <div>Expert en : {{expert.expertise}}</div>
        <button class="btn btn-primary" (click)="clickHandler()">Push</button>
    </div>
    `,
    styles:[`
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})

export class ExpertThumbnailComponent{
    @Input() expert:any;
    @Output() eventClick = new EventEmitter();

    clickHandler(){
        this.eventClick.emit(this.expert.name);
    }
}