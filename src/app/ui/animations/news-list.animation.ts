import {animate, animateChild, query, stagger, style, transition, trigger} from '@angular/animations';

export const NEWS_LIST_ANIMATION = [
  trigger('list', [
    transition(':enter', [
      query('@items', stagger(100, animateChild()))
    ]),
  ]),
  trigger('items', [
    transition(':enter', [
      style({transform: 'scale(0.5)', opacity: 0}),  // initial
      animate('0.5s cubic-bezier(.8, -0.6, 0.2, 1.5)',
        style({transform: 'scale(1)', opacity: 1}))  // final
    ]),
    transition(':leave', [
      style({transform: 'scale(1)', opacity: 1, height: '*'}),
      animate('0.5s cubic-bezier(.8, -0.6, 0.2, 1.5)',
        style({
          transform: 'scale(0.5)', opacity: 0,
          height: '0px', margin: '0px'
        }))
    ])
  ])
];
