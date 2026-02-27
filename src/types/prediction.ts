export interface PredictionRequest {
  gender: number; // 0 or 1
  age: number;
  hypertension: number; // 0 or 1
  heart_disease: number; // 0 or 1
  smoking_history: number; // 0-4
  bmi: number;
  HbA1c_level: number;
  blood_glucose_level: number;
}

export interface PredictionResponse {
  prediction: number; // 0 or 1
  message: string;
  probability: {
    no_diabetes: number;
    diabetes: number;
  };
}

export interface RiskLevel {
  level: 'low' | 'moderate' | 'high';
  color: string;
  bgColor: string;
  message: string;
}
