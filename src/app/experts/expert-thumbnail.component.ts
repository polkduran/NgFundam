import { Component, Input, Output, EventEmitter } from '@angular/core'
@Component({
    selector:'expert-thumbnail',
    template:`
    <div class="well hoverwell thumbnail"> 
        <h3 [ngSwitch]="expert.role">
            <ng-container *ngSwitchCase="'Coder'">😵</ng-container>
            <ng-container *ngSwitchCase="'Management'">😁</ng-container>
            <ng-container *ngSwitchCase="'Design'">😌</ng-container>
            <ng-container *ngSwitchDefault>😲</ng-container>
            {{expert.name}}
        </h3>

        <div>Expert en : {{expert.expertise}}</div>
        <div>Outil de travail : {{expert.tool}}</div>
        <div *ngIf="expert?.specialSkill">Talent : {{expert.specialSkill}}</div>

     

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