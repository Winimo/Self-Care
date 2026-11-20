function calculateBodyShape(shoulders, bust, waist, hips) {
  const upperBody = Math.max(shoulders, bust);
  const waistToUpperDiff = upperBody - waist;
  const waistToHipsDiff = hips - waist;
  const upperToHipsDiff = Math.abs(upperBody - hips);
  if (waist > upperBody && waist > hips) {
    if (waist - upperBody >= 3 && waist - hips >= 3) {
      return "Diamond";
    }
    return "Apple (Oval)";
  }
  if (waistToUpperDiff >= 7 && waistToHipsDiff >= 7) {
    if (bust - hips >= 2) {
      return "Top Hourglass";
    }
    if (hips - bust >= 2) {
      return "Bottom Hourglass";
    }
    return "Hourglass";
  }
  if (hips - upperBody >= 3) {
    if (hips - waist >= 7) {
      return "Spoon";
    }
    return "Pear (Triangle)";
  }
  if (upperBody - hips >= 3) {
    return "Inverted Triangle";
  }
  if (upperToHipsDiff < 3 && waistToUpperDiff < 7 && waistToHipsDiff < 7) {
    return "Rectangle (Straight)";
  }

  return "Balanced / Custom Proportions";
}

function calculateFaceShape(faceLength,
  foreheadWidth,
  cheekboneWidth,
  jawlineWidth,
  isRound) {  
    // Helper: Evaluates if two dimensions are roughly identical within an 8% variance
  const isRoughlyEqual = (a, b, tolerance = 0.08) => {
    return Math.abs(a - b) / Math.max(a, b) <= tolerance;
  };

  // --- 1. VERTICAL LONG RELATIONSHIPS ---
  // "which face shapes have longer face length than width" 
  // (Width is traditionally evaluated at the cheekbones)

  const isLongerThanWidth = faceLength > cheekboneWidth && !isRoughlyEqual(faceLength, cheekboneWidth);

  // "which have longer face length than cheekbones"
  const isLongerThanCheekbones = faceLength > cheekboneWidth && !isRoughlyEqual(faceLength, cheekboneWidth);

  // "longer face length than forehead"
  const isLongerThanForehead = faceLength > foreheadWidth;

  // "longer face length than jawline" (L > J)
  const isLongerThanJawline = faceLength > jawlineWidth;

  // --- 2. HORIZONTAL PAIRWISE RELATIONSHIPS ---
  // "longer forehead than jawline" & "shorter forehead than jawline"
  const isForeheadLongerThanJawline = foreheadWidth > jawlineWidth && !isRoughlyEqual(foreheadWidth, jawlineWidth);
  const isForeheadShorterThanJawline = foreheadWidth < jawlineWidth && !isRoughlyEqual(foreheadWidth, jawlineWidth);

  // "longer forehead than cheekbones" (F > C) & "shorter forehead than cheekbones" (F < C)
  const isForeheadLongerThanCheekbones = foreheadWidth > cheekboneWidth && !isRoughlyEqual(foreheadWidth, cheekboneWidth);
  const isForeheadShorterThanCheekbones = foreheadWidth < cheekboneWidth && !isRoughlyEqual(foreheadWidth, cheekboneWidth);

  // "longer jawline than cheekbones" (J > C) & "shorter jawline than cheekbones"
  const isJawlineLongerThanCheekbones = jawlineWidth > cheekboneWidth && !isRoughlyEqual(jawlineWidth, cheekboneWidth);
  const isJawlineShorterThanCheekbones = jawlineWidth < cheekboneWidth && !isRoughlyEqual(jawlineWidth, cheekboneWidth);

  // --- 3. CLASSIFICATION ENGINE VIA RULE SETS ---

  // Check Square & Round (Equal ratios: Length is NOT longer than width/cheekbones)
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

  // Check Triangle/Pear (Distinct marker: Forehead is shorter than jawline, Jawline is longer than cheekbones)
  if (isForeheadShorterThanJawline && isJawlineLongerThanCheekbones) {
    return "Triangle (Pear)";
  }

  // Check Inverted Triangle (Distinct marker: Forehead is strictly longer than cheekbones, Jawline is shorter than cheekbones)
  if (isForeheadLongerThanCheekbones && isJawlineShorterThanCheekbones) {
    return "Inverted Triangle";
  }

  // Check Heart (Distinct marker: Forehead is longer than jawline, forehead and cheekbones are roughly equal/flat)
  if (isForeheadLongerThanJawline && isRoughlyEqual(foreheadWidth, cheekboneWidth)) {
    if (!isRound) return "Inverted Triangle"; 
    return "Heart";
  }

  // Check Diamond (Distinct marker: Forehead is shorter than cheekbones, Jawline is shorter than cheekbones, Forehead roughly equals Jawline)
  if (isForeheadShorterThanCheekbones && isJawlineShorterThanCheekbones && isRoughlyEqual(foreheadWidth, jawlineWidth)) {
    if (isRound) return "Oval";
    return "Diamond";
  }

  // Check Rectangle & Oblong (Notably elongated, straight sides: forehead, cheekbones and jawline are all roughly equal)
  if (
    faceLength / cheekboneWidth >= 1.35 && 
    isRoughlyEqual(foreheadWidth, cheekboneWidth) && 
    isRoughlyEqual(cheekboneWidth, jawlineWidth)
  ) {
    return isRound ? "Rectangle" : "Oblong";
  }

  // Oval Fallback (Longer face length than cheekbones/forehead/jawline, Forehead is longer than jawline, Forehead is shorter than cheekbones)
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

function calculateSkinProfile(skinTypeAnswers, toneScores, undertoneAnswers) {
  // 1. Helper to find the most frequent category (used for Type & Undertone)
  const getDominantTrait = (answers, fallback = "normal") => {
    if (!Array.isArray(answers) || answers.length === 0) return fallback;
    
    const counts = answers.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

    return Object.keys(counts).reduce((a, b) => (counts[a] >= counts[b] ? a : b));
  };

  // 2. Determine Skin Type (with optional "Sensitive" flag)
  const isSensitive = skinTypeAnswers.includes("sensitive");
  const coreTypeAnswers = skinTypeAnswers.filter(ans => ans !== "sensitive");
  const primaryType = getDominantTrait(coreTypeAnswers, "normal");

  // 3. Determine Surface Tone (0–4 pts addition via Fitzpatrick Scale)
  const totalToneScore = toneScores.reduce((sum, pts) => sum + pts, 0);
  let fitzpatrick = {};

  if (totalToneScore <= 7) {
    fitzpatrick = { level: "Type I", label: "Very Fair" };
  } else if (totalToneScore <= 16) {
    fitzpatrick = { level: "Type II", label: "Fair" };
  } else if (totalToneScore <= 25) {
    fitzpatrick = { level: "Type III", label: "Medium" };
  } else if (totalToneScore <= 30) {
    fitzpatrick = { level: "Type IV", label: "Olive / Tan" };
  } else {
    fitzpatrick = { level: "Type V - VI", label: "Dark / Deep" };
  }

  // 4. Determine Undertone
  const undertone = getDominantTrait(undertoneAnswers, "neutral");

  // 5. Return the combined profile
  return {
    skinType: {
      primary: primaryType,
      sensitive: isSensitive,
      display: isSensitive ? `${primaryType} (Sensitive)` : primaryType
    },
    skinTone: {
      score: totalToneScore,
      fitzpatrickLevel: fitzpatrick.level,
      depthLabel: fitzpatrick.label
    },
    undertone: undertone,
    summary: `${fitzpatrick.label} (${fitzpatrick.level}) | ${undertone} undertone | ${primaryType} skin`
  };
}