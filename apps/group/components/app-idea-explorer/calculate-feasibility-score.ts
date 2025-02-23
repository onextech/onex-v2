export type FeasibilityFactors = {
  techComplexity: number;        // Scale: 1 (simple) - 5 (highly advanced)
  developmentTime: number;       // Scale: 1 (<1 month) - 5 (>12 months)
  customFrameworksRequired: number;   // Scale: 1 (many pre-built) - 5 (fully custom)
  scalabilityNeeds: number;      // Scale: 1 (small/local) - 5 (global, millions of users)
  complianceRequirements: number; // Scale: 1 (none) - 5 (strict regulations)
  expertiseRequired: number;     // Scale: 1 (general developer) - 5 (specialized AI/Blockchain teams)
};

export function calculateFeasibilityScore(factors: FeasibilityFactors): number {
  const weights: Record<keyof FeasibilityFactors, number> = {
    techComplexity: 30,
    developmentTime: 30,
    customFrameworksRequired: 10,
    scalabilityNeeds: 10,
    complianceRequirements: 10,
    expertiseRequired: 10
  };

  const maxScore = Object.values(weights).reduce((a, b) => a + b, 0) * 4; // Maximum possible score

  // Apply a minimum feasibility boost so scores are never too low
  const baselineBoost = maxScore * 0.15; // Ensures feasibility isn't too pessimistic

  const totalScore =
    ((5 - factors.techComplexity) * weights.techComplexity) +  // Inverted
    ((5 - factors.developmentTime) * weights.developmentTime) +  // Inverted
    ((5 - factors.scalabilityNeeds) * weights.scalabilityNeeds) +  // Inverted
    ((5 - factors.customFrameworksRequired) * weights.customFrameworksRequired) +  // Inverted
    ((5 - factors.complianceRequirements) * weights.complianceRequirements) +  // Inverted
    ((5 - factors.expertiseRequired) * weights.expertiseRequired) +  // Inverted
    baselineBoost // Apply baseline boost

  return Math.min(100, Math.round((totalScore / maxScore) * 100)); // Cap score at 100
}

export function getFeasibilityLabel(score: number): string {
  switch (true) {
    case score >= 85:
      return "Excellent";
    case score >= 70:
      return 'Great';
    case score >= 55:
      return "High";
    case score >= 40:
      return "Moderate";
    default:
      return "Challenging";
  }
}
