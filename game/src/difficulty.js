export const difficulties=[
 {name:'Ember',hp:.75,speed:1,drain:.65,score:1,hint:'Gentle · less enemy hull, slower flame drain'},
 {name:'Ash',hp:1,speed:1,drain:1,score:1,hint:'The intended trial · balanced pressure'},
 {name:'Cinder',hp:1.3,speed:1.3,drain:1.35,score:1.5,hint:'Fierce · stronger, faster foes · +50% score'}
];
export function difficulty(s){return difficulties[s.difficulty??1];}
export function selectDifficulty(s,delta){s.difficulty=((s.difficulty??1)+delta+3)%3;}
