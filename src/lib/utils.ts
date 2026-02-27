import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { RiskLevel } from '../types/prediction';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Calculate BMI from weight and height
 * @param weightKg - Weight in kilograms
 * @param heightM - Height in meters
 * @returns BMI value
 */
export function calculateBMI(weightKg: number, heightM: number): number {
  if (heightM <= 0) return 0;
  return Number((weightKg / (heightM * heightM)).toFixed(1));
}

/**
 * Get risk level based on diabetes probability
 * @param probability - Diabetes probability percentage (0-100)
 * @returns Risk level information
 */
export function getRiskLevel(probability: number): RiskLevel {
  if (probability < 30) {
    return {
      level: 'low',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      message:
        'Your risk appears to be low based on these factors. Maintain a healthy lifestyle!',
    };
  }
  if (probability < 60) {
    return {
      level: 'moderate',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
      message:
        'You have moderate risk factors. Consider consulting a healthcare provider for guidance.',
    };
  }
  return {
    level: 'high',
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    message:
      'You have significant risk factors. We strongly recommend consulting a healthcare provider soon.',
  };
}

/**
 * Interpret HbA1c level
 * @param hba1c - HbA1c percentage
 * @returns Interpretation string
 */
export function interpretHbA1c(hba1c: number): string {
  if (hba1c < 5.7) return 'Normal';
  if (hba1c < 6.5) return 'Prediabetes';
  return 'Diabetes range';
}

/**
 * Interpret blood glucose level
 * @param glucose - Blood glucose in mg/dL
 * @param isFasting - Whether it's a fasting measurement
 * @returns Interpretation string
 */
export function interpretGlucose(
  glucose: number,
  isFasting: boolean = true
): string {
  if (isFasting) {
    if (glucose < 100) return 'Normal';
    if (glucose < 126) return 'Prediabetes range';
    return 'Diabetes range';
  } else {
    if (glucose < 140) return 'Normal';
    if (glucose < 200) return 'Prediabetes range';
    return 'Diabetes range';
  }
}

/**
 * Validate form field
 * @param field - Field name
 * @param value - Field value
 * @returns Error message or null if valid
 */
export function validateHealthField(
  field: string,
  value: string | number
): string | null {
  const numValue = typeof value === 'string' ? parseFloat(value) : value;

  switch (field) {
    case 'age':
      if (isNaN(numValue) || numValue < 18 || numValue > 120) {
        return 'Age must be between 18 and 120';
      }
      break;
    case 'bmi':
      if (isNaN(numValue) || numValue < 10 || numValue > 60) {
        return 'BMI must be between 10 and 60';
      }
      break;
    case 'HbA1c_level':
      if (isNaN(numValue) || numValue < 3 || numValue > 15) {
        return 'HbA1c must be between 3% and 15%';
      }
      break;
    case 'blood_glucose_level':
      if (isNaN(numValue) || numValue < 50 || numValue > 500) {
        return 'Blood glucose must be between 50 and 500 mg/dL';
      }
      break;
  }

  return null;
}

/**
 * Format number with specified decimal places
 * @param value - Number to format
 * @param decimals - Number of decimal places
 * @returns Formatted string
 */
export function formatNumber(value: number, decimals: number = 1): string {
  return value.toFixed(decimals);
}
