export function loadBest(){try{return Number(localStorage.getItem('emberward-best'))||0;}catch{return 0;}}
export function saveBest(score){try{localStorage.setItem('emberward-best',String(Math.floor(score)));}catch{}}
