if('shoulder' >='bust' && 'bust' === 'hips' && 'waist' < 'hips' && 'waist' < 'bust' && 'waist' < 'shoulder') {
    console.log(`You have an Hourglass Body Shape.`); 
} else if('shoulder' >= 'bust' && 'bust' > 'hips' && 'bust' > 'waist' && 'waist' > 'hips' && 'shoulder' > 'waist') {
    console.log(`You have an Inverted Triangle Body Shape.`);
} else if('shoulder' >= 'bust' && 'shoulder' > 'waist' && 'bust' > 'waist' && 'shoulder' < 'hips' && 'bust' < 'hips') {
    console.log(`You have a Pear Body Shape.`);
} else if('shoulder' >= 'bust' && 'bust' === 'waist' && 'shoulder' === 'waist' && 'bust' === 'hips' && 'shoulder' === 'hips') {
    console.log(`You have a Rectangle Body Shape.`)
} else if('shoulder' < 'bust' && 'bust' > 'hips' && 'shoulder' <= 'hips' && 'bust' > 'waist' && 'shoulder' <= 'waist') {
    console.log(`You have an Apple Body Shape.`);
}

if('facelength' > 'cheekbones' && 'forehead' > 'jawline' && 'cheekbones' > 'jawline' && 'cheekbones' > 'forehead' && 'facelength' > 'forehead' && 'facelength' > 'jawline') {
    console.log(`You have an Oval Face Shape.`)
} else if('facelength' === 'cheekbones' && 'forehead' === 'jawline' && 'cheekbones' === 'jawline' && 'cheekbones' === 'forehead') {
    console.log(`You have a Round Face Shape.`);
} else if('facelength' > 'cheekbones' && 'forehead' > 'jawline' && 'cheekbones' < 'jawline' && 'cheekbones' < 'forehead' && 'facelength' > 'forehead' && 'facelength' > 'jawline') {
    console.log(`You have a Diamond Face Shape.`);
} else if('facelength' > 'cheekbones' && 'forehead' > 'jawline' && 'cheekbones' > 'jawline' && 'cheekbones' < 'forehead' && 'facelength' < 'forehead' && 'facelength' < 'jawline') {
    console.log(`You have a Heart Face Shape.`);
} else if('facelength' < 'cheekbones' && 'forehead' < 'jawline' && 'cheekbones' < 'jawline' && 'cheekbones' > 'forehead' && 'facelength' < 'forehead' && 'facelength' < 'jawline') {
    console.log(`You have a Triangle Face Shape.`);
} else if('facelength' > 'cheekbones' && 'forehead' > 'jawline' && 'cheekbones' < 'jawline' && 'cheekbones' < 'forehead' && 'facelength' > 'forehead' && 'facelength' > 'jawline') {
    console.log(`You have a Rectangle Face Shape.`);
} else if('facelength' > 'cheekbones' && 'forehead' === 'jawline' && 'cheekbones' === 'jawline' && 'cheekbones' === 'forehead' && 'facelength' > 'forehead' && 'facelength' > 'jawline') {
    console.log(`You have a Oblong Face Shape.`);
} else if('facelength' === 'cheekbones' && 'forehead' === 'jawline' && 'cheekbones' === 'jawline' && 'cheekbones' === 'forehead') {
    console.log(`You have a Square Face Shape.`);
} else if('facelength' > 'cheekbones' && 'forehead' > 'jawline' && 'cheekbones' < 'jawline' && 'cheekbones' > 'forehead' && 'facelength' > 'forehead' && 'facelength' > 'jawline') {
    console.log(`You have a Inverted Triangle Face Shape.`);
}