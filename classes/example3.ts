// { mark:'male', jade:'male'}
//  {chloe:'female', alex:'male', anna:'female'}

class Students {
  [index: string]: string;
  // = [index: string]: 'male' | 'female';
}

const classA = new Students();
classA.mark = "male";
classA.jade = "male";
console.log(classA);

const classB = new Students();
classB.chloe = "female";
classB.alex = "male";
classB.alex = "female";
