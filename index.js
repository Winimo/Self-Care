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

if('L' > 'C' && 'L' > 'F' && 'L' > 'J' && 'F' > 'J' && 'F' < 'C' && 'J' < 'C' && isRound === true) {
    console.log(`You have an Oval Face Shape.`)
} else if('L' === 'C' && 'L' > 'F' && 'L' > 'J' && 'F' > 'J' && 'F' < 'C' && 'J' < 'C' && isRound === true) {
    console.log(`You have a Round Face Shape.`);
} else if('L' > 'C' && 'L' > 'F' && 'L' > 'J' && 'F' === 'J' && 'F' < 'C' && 'J' < 'C' && isRound === false) {
    console.log(`You have a Diamond Face Shape.`);
} else if('L' > 'C' && 'L' > 'F' && 'L' > 'J' && 'F' < 'J' && 'F' >= 'C' && 'J' < 'C' && isRound === 'somewhat') {
    console.log(`You have a Heart Face Shape.`);
} else if('L' > 'J' && 'L' > 'C' && 'L' > 'F' && 'F' < 'J' && 'F' < 'C' && 'J' > 'C' && isRound === false) {
    console.log(`You have a Triangle Face Shape.`);
} else if('L' > 'C' && 'L' > 'F' && 'L' > 'J' && 'F' ===  'C' && 'J' === 'C' && 'F' ===  'J' && isRound === false) {
    console.log(`You have a Rectangle Face Shape.`);
} else if('L' > 'C' && 'L' > 'F' && 'L' > 'J' && 'F' === 'C' && 'J' === 'C' && 'F' === 'J' && isRound === 'somewhat') {
    console.log(`You have a Oblong Face Shape.`);
} else if('L' === 'C' && 'L' === 'F' && 'L' === 'J' && 'F' === 'C' && 'J' === 'C' && 'F' === 'J' && isRound === false) {
    console.log(`You have a Square Face Shape.`);
} else if('L' > 'J' && 'L' > 'C' && 'L' > 'F' && 'F' < 'J' && 'F' < 'C' && 'J' > 'C' && isRound === false) {
    console.log(`You have a Inverted Triangle Face Shape.`);
}

function calculateHairProfile(type, thickness, density, porosity) {
    const t = String(type).trim();
  const th = String(thickness).trim().toUpperCase();
  const d = String(density).trim().toUpperCase();
  const p = String(porosity).trim().toUpperCase();

  const subTypeRules = {
    "1A": "Pin-straight and silky. Avoid all oils near roots; use lightweight volumizing sprays.",
    "1B": "Straight with light body. Use a gentle balancing shampoo and lightweight conditioner on ends.",
    "1C": "Straight with coarse texture. Use smoothing serums to tame subtle bends and humidity frizz.",
    "2A": "Loose, delicate 'S' waves. Use feather-light mousse; heavy gels will stretch waves flat.",
    "2B": "Defined mid-length waves. Scrunch with lightweight gel and diffuse to boost root volume.",
    "2C": "Thick, frizz-prone waves. Layer a light leave-in conditioner with a medium-hold gel.",
    "3A": "Loose, large curls. Use lightweight curl creams or gels to prevent frizz without losing bounce.",
    "3B": "Springy, marker-sized ringlets. Apply leave-in and strong-hold gel on soaking wet hair.",
    "3C": "Tight, pencil-sized corkscrews. Prioritize rich moisture, curl-defining creams, and minimal manipulation.",
    "4A": "Tight, defined 'S' coils. Seal moisture with lightweight creams and detangle gently with slip.",
    "4B": "Sharp 'Z'-angled coils with high shrinkage. Use rich creams and butter-based sealants to soften bends.",
    "4C": "Tightly packed coils with maximum shrinkage. Focus on deep hydration, protective styles, and heavy sealants."
  }
  const rules = {
    thickness: {
      "F": "Include lightweight proteins (rice/silk amino acids) for structure; avoid heavy oils.",
      "M": "Maintain a 50/50 balance of moisturizing masks and occasional protein.",
      "C": "Prioritize softening emollients and rich conditioners; avoid protein overload."
    },
    density: {
      "L": "Use coin-sized product amounts; blunt cuts create the illusion of fullness.",
      "M": "Apply products in 2-3 sections; soft layers add natural movement.",
      "H": "Work in 4-8 sections for even coverage; long layers help reduce bulk."
    },
    porosity: {
      "L": "Use warm water or heat caps to open cuticles; stick to water-based humectants.",
      "M": "Standard conditioners and light oils work effortlessly to maintain balance.",
      "H": "Use thick creams, hydrolyzed proteins, and heavy oils/butters to seal cuticles."
    }
  };
};
   