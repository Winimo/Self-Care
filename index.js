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

