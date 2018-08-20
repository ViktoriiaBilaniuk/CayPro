import { trigger, state, animate, transition, style } from '@angular/animations';

export const  circleAnimation =
  trigger('circleAnimation', [
    // route 'enter' transition
    transition(':enter', [

      // styles at start of transition
      style({     transform: 'scale(0.5)'}),

      // animation and styles at end of transition
      animate('1s', style({     transform: 'scale(1)' }))
    ]),
  ]);
