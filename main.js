'use strict';

class Human {
  constructor(name, age, weight){
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.kind = 'Human';
  }
  
  title() {
    let h2 = document.createElement('h2');
    h2.classList.add('title-class');
    h2.innerHTML = this.kind;
    document.body.append(h2);
    return this;
  }
  picture() {
    let h = document.querySelectorAll('.title-class');
    let h2 = h[h.length-1];
    let container = document.createElement('div');
    container.classList.add('container');
    h2.after(container);
    let svg = document.createElement('div');
    // It is base svg-picture from simple figures
    let block ='<svg class="svg" width = "300" height = "300"><circle  cx="150" cy="140" r="100" stroke="#888888" fill="transparent" stroke-width="3"/>';
    block += '<g class = "eyes"><ellipse cx="200" cy="120" rx="30" ry="15" fill="transparent" stroke="#888888"  stroke-width="3"/>';
    block += '<ellipse cx="100" cy="120" rx="30" ry="15" fill="transparent" stroke="#888888"  stroke-width="3"/></g>';
    block += '<g class="mouth"><path d="m 100 180  C 110 220 190 220 200 180 h -100" stroke  ="#888888" stroke-width= "2" fill="transparent"></path></g>';
    block += '<g id = "teeth" class = "teeth"><rect x="130" y="180" width="15" height="15" fill="white"  stroke="none" />';
    block += '<rect x="160" y="180" width="15" height="15" fill="white"  stroke="none" /></g></svg>';
    svg.innerHTML= block;
    container.prepend(svg);
    // It is a box for data like "name", "age"... 
    let character = document.createElement('div');
    character.classList.add('character');
    let h3 = document.createElement('h3');
    h3.classList.add('data');
    h3.innerHTML = 'DATA';
    let ul = document.createElement('ul');
    ul.classList.add('list');
    container.append(character);
    character.prepend(h3);
    h3.after(ul);

    return this;
  }
  data() {
    // Insert data to box;
    let u = document.querySelectorAll('.list');
    let ul = u[u.length-1];   
    for (let key of Object.keys(this)) {
      let li = document.createElement('li');
      li.innerHTML = `${key}:  ${this[key]}`;
      ul.append(li);  
    }
    return this;
  }
}

class Europeoid extends Human {
  constructor(name, age, weight) {  
    super(name, age, weight); 
    this.kind =' Europeoid';
  }
 
  picture() {
    // filling by colors 
    this.__proto__.picture();
    let ee = document.querySelectorAll('.eyes');
    let eyes = ee[ee.length-1];
    eyes.firstElementChild.setAttribute('fill', '#1188ee');
    eyes.lastElementChild.setAttribute ('fill', '#1188ee');
    let mou = document.querySelectorAll('.mouth');
    let mouth = mou[mou.length-1];
    mouth.firstElementChild.setAttribute('fill', "red");
    return this;
  }

}
let asianKind = {
  // Two mathods for mixing it to classes
  asianEyes () {
    let ey = document.querySelectorAll('.eyes');
    let eyes = ey[ey.length-1];
    let frag = '<ellipse cx="100" cy="120" rx="30" ry="5" stroke="brown" fill="brown" stroke-width="1"/><ellipse cx="200" cy="120" rx="30" ry="5" stroke="brown" fill="brown" stroke-width="1"/>';
    eyes.innerHTML = frag;
    let ull = document.querySelectorAll('.list');
    let ul = ull[ull.length-1];   
      let li = document.createElement('li');
      li.innerHTML = 'mix 1: asianEyes';
      ul.append(li);  
    return this;
  },

  asianSmile() {
    let tee= document.querySelectorAll('.teeth');
    let teeth = tee[tee.length-1];
    teeth.classList.remove('teeth');
    let ull = document.querySelectorAll('.list');
    let ul = ull[ull.length-1];   
    let li = document.createElement('li');
    li.innerHTML = 'mix 2: asianSmile';
    ul.append(li);
    return this;
  }
}

// just mixing
Object.assign(Human.prototype, asianKind);



let ivan = new Human('Ivan', 22, 77);
ivan
  .title()
  .picture()
  .data();

let jeck = new Europeoid('Jeck', 19, 66);
jeck
  .title()
  .picture()
  .data();

let alex = new Europeoid('Alex', 30, 90);
alex
  .title()
  .picture()
  .data()
  .asianEyes()
  .asianSmile();



