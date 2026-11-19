

function calculateFaceShape(faceLength,
  foreheadWidth,
  cheekboneWidth,
  jawlineWidth,
  isRound) {  
  const isRoughlyEqual = (a, b, tolerance = 0.08) => {
    return Math.abs(a - b) / Math.max(a, b) <= tolerance;
  };
  const isLongerThanWidth = faceLength > cheekboneWidth && !isRoughlyEqual(faceLength, cheekboneWidth);
  const isLongerThanCheekbones = faceLength > cheekboneWidth && !isRoughlyEqual(faceLength, cheekboneWidth);
  const isLongerThanForehead = faceLength > foreheadWidth;
  const isLongerThanJawline = faceLength > jawlineWidth;
  const isForeheadLongerThanJawline = foreheadWidth > jawlineWidth && !isRoughlyEqual(foreheadWidth, jawlineWidth);
  const isForeheadShorterThanJawline = foreheadWidth < jawlineWidth && !isRoughlyEqual(foreheadWidth, jawlineWidth);
  const isForeheadLongerThanCheekbones = foreheadWidth > cheekboneWidth && !isRoughlyEqual(foreheadWidth, cheekboneWidth);
  const isForeheadShorterThanCheekbones = foreheadWidth < cheekboneWidth && !isRoughlyEqual(foreheadWidth, cheekboneWidth);
  const isJawlineLongerThanCheekbones = jawlineWidth > cheekboneWidth && !isRoughlyEqual(jawlineWidth, cheekboneWidth);
  const isJawlineShorterThanCheekbones = jawlineWidth < cheekboneWidth && !isRoughlyEqual(jawlineWidth, cheekboneWidth);

   if (!isLongerThanWidth || isRoughlyEqual(faceLength, cheekboneWidth)) {
    if (
      isRoughlyEqual(foreheadWidth, jawlineWidth) && 
      isRoughlyEqual(foreheadWidth, cheekboneWidth) && 
      isRound
    ) {
      return "Round";
    }
    return "Square";
  }

  if (isForeheadShorterThanJawline && isJawlineLongerThanCheekbones) {
    return "Triangle (Pear)";
  }

  if (isForeheadLongerThanCheekbones && isJawlineShorterThanCheekbones) {
    return "Inverted Triangle";
  }

  if (isForeheadLongerThanJawline && isRoughlyEqual(foreheadWidth, cheekboneWidth)) {
    if (!isRound) return "Inverted Triangle"; 
    return "Heart";
  }

  if (isForeheadShorterThanCheekbones && isJawlineShorterThanCheekbones && isRoughlyEqual(foreheadWidth, jawlineWidth)) {
    if (isRound) return "Oval";
    return "Diamond";
  }

  if (
    faceLength / cheekboneWidth >= 1.35 && 
    isRoughlyEqual(foreheadWidth, cheekboneWidth) && 
    isRoughlyEqual(cheekboneWidth, jawlineWidth)
  ) {
    return isRound ? "Rectangle" : "Oblong";
  }

  if (isLongerThanCheekbones && isForeheadLongerThanJawline && isForeheadShorterThanCheekbones) {
    return "Oval";
  }

  return "Oval"; 
}

const hairtype1 = document.getElementByID('hairtype1');
const hairporo = document.getElementByID('hairporo');
const hairthick = document.getElementByID('hairthick');
const hairden = document.getElementByID('hairden');
const submit = document.getElementByID('submit');

function calculateHairProfile(type, thickness, density, porosity) {
  const t = String(type).trim().toUpperCase();
  const th = String(thickness).trim().toUpperCase();
  const d = String(density).trim().toUpperCase();
  const p = String(porosity).trim().toUpperCase();

  const rules = {
    type: {
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
    },
    thickness: {
      "FT": "Include lightweight proteins (rice/silk amino acids) for structure; avoid heavy oils.",
      "MT": "Maintain a 50/50 balance of moisturizing masks and occasional protein.",
      "CT": "Prioritize softening emollients and rich conditioners; avoid protein overload."
    },
    density: {
      "L": "Use coin-sized product amounts; blunt cuts create the illusion of fullness.",
      "M": "Apply products in 2-3 sections; soft layers add natural movement.",
      "H": "Work in 4-8 sections for even coverage; long layers help reduce bulk."
    },
    porosity: {
      "LP": "Use warm water or heat caps to open cuticles; stick to water-based humectants.",
      "MP": "Standard conditioners and light oils work effortlessly to maintain balance.",
      "HP": "Use thick creams, hydrolyzed proteins, and heavy oils/butters to seal cuticles."
    }
  };
  if (!rules.type[t] || !rules.thickness[th] || !rules.density[d] || !rules.porosity[p]) {
    throw new Error("Invalid input. Use Type (1A - 4C), Thickness (F/M/C), Density (L/M/H), and Porosity (L/M/H).");
  }
  return {
    hairCode: `${t} / ${th} / ${d} / ${p}`,
    baseCategory: `Type ${t.charAt(0)}`,
    recommendations: {
      stylingAndHold: rules.type[t],
      proteinAndSoftness: rules.thickness[th],
      amountAndCut: rules.density[d],
      formulaWeight: rules.porosity[p]
    }
  };
}
   