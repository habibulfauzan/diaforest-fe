import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  Home,
  AlertCircle,
  CheckCircle,
  Loader2,
  Info,
  ArrowRight,
  RotateCcw,
} from 'lucide-react';

interface FormData {
  gender: string;
  age: string;
  hypertension: string;
  heart_disease: string;
  smoking_history: string;
  weight: string;
  height: string;
  HbA1c_level: string;
  blood_glucose_level: string;
}

interface PredictionResult {
  prediction: number;
  message: string;
  probability: {
    no_diabetes: number;
    diabetes: number;
  };
}

const PredictionApp = () => {
  const [step, setStep] = useState<'form' | 'loading' | 'result'>('form');
  const [formData, setFormData] = useState<FormData>({
    gender: '',
    age: '',
    hypertension: '',
    heart_disease: '',
    smoking_history: '',
    weight: '',
    height: '',
    HbA1c_level: '',
    blood_glucose_level: '',
  });
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [error, setError] = useState('');
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );
  const [calculatedBMI, setCalculatedBMI] = useState<number | null>(null);

  // Function to calculate BMI
  const calculateBMI = (weight: string, height: string): number | null => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (w && h && h > 0) {
      const heightInMeters = h / 100;
      return w / (heightInMeters * heightInMeters);
    }
    return null;
  };

  // Update BMI whenever weight or height changes
  const handleWeightHeightChange = (
    field: 'weight' | 'height',
    value: string,
  ) => {
    const newFormData = { ...formData, [field]: value };
    setFormData(newFormData);

    const bmi = calculateBMI(
      field === 'weight' ? value : formData.weight,
      field === 'height' ? value : formData.height,
    );
    setCalculatedBMI(bmi);
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.gender) newErrors.gender = 'Jenis kelamin harus dipilih';
    if (!formData.age) newErrors.age = 'Usia harus diisi';
    else {
      const age = parseFloat(formData.age);
      if (age < 18 || age > 120)
        newErrors.age = 'Usia harus antara 18-120 tahun';
    }
    if (!formData.hypertension)
      newErrors.hypertension = 'Pilihan harus dipilih';
    if (!formData.heart_disease)
      newErrors.heart_disease = 'Pilihan harus dipilih';
    if (!formData.smoking_history)
      newErrors.smoking_history = 'Riwayat merokok harus dipilih';

    // Validate weight and height
    if (!formData.weight) newErrors.weight = 'Berat badan harus diisi';
    else {
      const weight = parseFloat(formData.weight);
      if (weight < 20 || weight > 300)
        newErrors.weight = 'Berat badan harus antara 20-300 kg';
    }

    if (!formData.height) newErrors.height = 'Tinggi badan harus diisi';
    else {
      const height = parseFloat(formData.height);
      if (height < 100 || height > 250)
        newErrors.height = 'Tinggi badan harus antara 100-250 cm';
    }

    // Validate calculated BMI
    if (calculatedBMI && (calculatedBMI < 10 || calculatedBMI > 60)) {
      newErrors.weight = 'BMI hasil perhitungan tidak valid (harus 10-60)';
    }

    if (!formData.HbA1c_level)
      newErrors.HbA1c_level = 'Kadar HbA1c harus diisi';
    else {
      const hba1c = parseFloat(formData.HbA1c_level);
      if (hba1c < 3 || hba1c > 15)
        newErrors.HbA1c_level = 'HbA1c harus antara 3-15%';
    }
    if (!formData.blood_glucose_level)
      newErrors.blood_glucose_level = 'Gula darah harus diisi';
    else {
      const glucose = parseFloat(formData.blood_glucose_level);
      if (glucose < 50 || glucose > 500)
        newErrors.blood_glucose_level = 'Gula darah harus antara 50-500 mg/dL';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      setError('Mohon isi semua kolom dengan benar');
      return;
    }

    // Calculate BMI from weight and height
    const bmi = calculateBMI(formData.weight, formData.height);
    if (!bmi) {
      setError('Gagal menghitung BMI. Periksa berat dan tinggi badan Anda.');
      return;
    }

    setStep('loading');
    setError('');

    try {
      const response = await fetch(
        import.meta.env.PUBLIC_API_URL || 'http://localhost:7860/predict',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            gender: formData.gender === 'male' ? 1 : 0,
            age: parseFloat(formData.age),
            hypertension: formData.hypertension === 'yes' ? 1 : 0,
            heart_disease: formData.heart_disease === 'yes' ? 1 : 0,
            smoking_history: parseInt(formData.smoking_history),
            bmi: bmi, // Use calculated BMI
            HbA1c_level: parseFloat(formData.HbA1c_level),
            blood_glucose_level: parseFloat(formData.blood_glucose_level),
          }),
        },
      );

      if (!response.ok) throw new Error('API Error');

      const data = await response.json();
      setResult(data);
      setStep('result');
    } catch (err) {
      setError(
        'Gagal memproses prediksi. Pastikan backend API berjalan di http://localhost:7860',
      );
      setStep('form');
    }
  };

  const handleReset = () => {
    setStep('form');
    setFormData({
      gender: '',
      age: '',
      hypertension: '',
      heart_disease: '',
      smoking_history: '',
      weight: '',
      height: '',
      HbA1c_level: '',
      blood_glucose_level: '',
    });
    setResult(null);
    setError('');
    setErrors({});
    setCalculatedBMI(null);
  };

  const getRiskLevel = (
    probability: number,
  ): { level: string; color: string; bgColor: string; message: string } => {
    if (probability < 30)
      return {
        level: 'Risiko Rendah',
        color: 'text-green-600',
        bgColor: 'bg-green-100',
        message:
          'Risiko Anda terlihat rendah berdasarkan faktor-faktor ini. Pertahankan gaya hidup sehat Anda!',
      };
    if (probability < 60)
      return {
        level: 'Risiko Sedang',
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-100',
        message:
          'Anda memiliki faktor risiko sedang. Pertimbangkan untuk berkonsultasi dengan tenaga kesehatan untuk panduan lebih lanjut.',
      };
    return {
      level: 'Risiko Tinggi',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      message:
        'Anda memiliki faktor risiko yang signifikan. Kami sangat menyarankan untuk segera berkonsultasi dengan dokter.',
    };
  };

  return (
    <div className="from-primary/5 via-background to-secondary/5 relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br p-6">
      {/* Animated background orbs */}
      <div className="bg-primary/10 absolute top-[-20%] right-[-10%] h-80 w-80 rounded-full blur-3xl" />
      <div className="bg-accent/10 absolute bottom-[-10%] left-[-5%] h-64 w-64 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 flex items-center gap-2"
      >
        <Activity className="text-primary h-6 w-6" />
        <span className="font-heading text-foreground text-xl font-bold">
          DiaForest
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        <div className="bg-card/95 overflow-hidden rounded-[2rem] border-none shadow-lg backdrop-blur-xl">
          {/* FORM STEP */}
          {step === 'form' && (
            <div className="flex flex-col gap-8 p-8 md:p-12">
              <div className="space-y-2 text-center">
                <h1 className="font-heading text-foreground text-4xl font-bold">
                  Prediksi Risiko Diabetes
                </h1>
                <p className="text-muted-foreground">
                  Isi data kesehatan Anda untuk mendapatkan hasil prediksi
                  risiko diabetes
                </p>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800"
                >
                  <AlertCircle className="h-5 w-5" />
                  <span className="text-sm">{error}</span>
                </motion.div>
              )}

              {/* Personal Information */}
              <div className="space-y-4">
                <h2 className="font-heading text-foreground flex items-center gap-2 text-xl font-bold">
                  <span className="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-full text-sm">
                    1
                  </span>
                  Informasi Pribadi
                </h2>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-foreground mb-2 block text-sm font-medium">
                      Jenis Kelamin *
                    </label>
                    <div className="flex gap-4">
                      {[
                        { value: 'male', label: 'Laki-laki' },
                        { value: 'female', label: 'Perempuan' },
                      ].map((g) => (
                        <label
                          key={g.value}
                          className="flex cursor-pointer items-center gap-2"
                        >
                          <input
                            type="radio"
                            name="gender"
                            value={g.value}
                            checked={formData.gender === g.value}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                gender: e.target.value,
                              })
                            }
                            className="text-primary h-4 w-4"
                          />
                          <span className="text-foreground">{g.label}</span>
                        </label>
                      ))}
                    </div>
                    {errors.gender && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.gender}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-foreground mb-2 block text-sm font-medium">
                      Usia *{' '}
                      <span className="text-muted-foreground">(tahun)</span>
                    </label>
                    <input
                      type="number"
                      value={formData.age}
                      onChange={(e) =>
                        setFormData({ ...formData, age: e.target.value })
                      }
                      className="bg-background border-border text-foreground focus:ring-primary/50 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:outline-none"
                      placeholder="contoh: 35"
                    />
                    {errors.age && (
                      <p className="mt-1 text-xs text-red-600">{errors.age}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Medical History */}
              <div className="space-y-4">
                <h2 className="font-heading text-foreground flex items-center gap-2 text-xl font-bold">
                  <span className="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-full text-sm">
                    2
                  </span>
                  Riwayat Medis
                </h2>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-foreground mb-2 block text-sm font-medium">
                      Hipertensi (Tekanan Darah Tinggi) *
                    </label>
                    <div className="flex gap-4">
                      {[
                        { value: 'yes', label: 'Ya' },
                        { value: 'no', label: 'Tidak' },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className="flex cursor-pointer items-center gap-2"
                        >
                          <input
                            type="radio"
                            name="hypertension"
                            value={option.value}
                            checked={formData.hypertension === option.value}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                hypertension: e.target.value,
                              })
                            }
                            className="text-primary h-4 w-4"
                          />
                          <span className="text-foreground">
                            {option.label}
                          </span>
                        </label>
                      ))}
                    </div>
                    {errors.hypertension && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.hypertension}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-foreground mb-2 block text-sm font-medium">
                      Penyakit Jantung *
                    </label>
                    <div className="flex gap-4">
                      {[
                        { value: 'yes', label: 'Ya' },
                        { value: 'no', label: 'Tidak' },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className="flex cursor-pointer items-center gap-2"
                        >
                          <input
                            type="radio"
                            name="heart_disease"
                            value={option.value}
                            checked={formData.heart_disease === option.value}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                heart_disease: e.target.value,
                              })
                            }
                            className="text-primary h-4 w-4"
                          />
                          <span className="text-foreground">
                            {option.label}
                          </span>
                        </label>
                      ))}
                    </div>
                    {errors.heart_disease && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.heart_disease}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-foreground mb-2 block text-sm font-medium">
                      Riwayat Merokok *
                    </label>
                    <select
                      value={formData.smoking_history}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          smoking_history: e.target.value,
                        })
                      }
                      className="bg-background border-border text-foreground focus:ring-primary/50 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:outline-none"
                    >
                      <option value="">Pilih riwayat merokok</option>
                      <option value="0">Tidak Pernah Merokok / Never</option>
                      <option value="1">Tidak Ada Info / No Info</option>
                      <option value="2">Perokok Aktif / Current</option>
                      <option value="3">Mantan Perokok / Former</option>
                      <option value="4">Pernah Merokok / Ever</option>
                      <option value="5">Tidak Saat Ini / Not Current</option>
                    </select>
                    {errors.smoking_history && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.smoking_history}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Health Metrics */}
              <div className="space-y-4">
                <h2 className="font-heading text-foreground flex items-center gap-2 text-xl font-bold">
                  <span className="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-full text-sm">
                    3
                  </span>
                  Metrik Kesehatan
                </h2>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {/* Weight Input */}
                  <div>
                    <label className="text-foreground mb-2 block text-sm font-medium">
                      Berat Badan *{' '}
                      <span className="text-muted-foreground">(kg)</span>
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={formData.weight}
                      onChange={(e) =>
                        handleWeightHeightChange('weight', e.target.value)
                      }
                      className="bg-background border-border text-foreground focus:ring-primary/50 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:outline-none"
                      placeholder="contoh: 70"
                    />
                    {errors.weight && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.weight}
                      </p>
                    )}
                  </div>

                  {/* Height Input */}
                  <div>
                    <label className="text-foreground mb-2 block text-sm font-medium">
                      Tinggi Badan *{' '}
                      <span className="text-muted-foreground">(cm)</span>
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={formData.height}
                      onChange={(e) =>
                        handleWeightHeightChange('height', e.target.value)
                      }
                      className="bg-background border-border text-foreground focus:ring-primary/50 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:outline-none"
                      placeholder="contoh: 170"
                    />
                    {errors.height && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.height}
                      </p>
                    )}
                  </div>
                </div>

                {/* BMI Preview - Auto Calculated */}
                {calculatedBMI && (
                  <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                          <CheckCircle className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <span className="text-foreground block text-sm font-bold">
                            BMI Anda
                          </span>
                          <span className="text-muted-foreground text-xs">
                            Body Mass Index
                          </span>
                        </div>
                      </div>
                      <span className="text-primary text-3xl font-bold">
                        {calculatedBMI.toFixed(1)}
                      </span>
                    </div>
                    {/* <p className="text-foreground mt-3 text-sm font-medium">
                      {calculatedBMI < 18.5 &&
                        '⚠️ Underweight (Berat badan kurang)'}
                      {calculatedBMI >= 18.5 &&
                        calculatedBMI < 25 &&
                        '✅ Normal (Berat badan ideal)'}
                      {calculatedBMI >= 25 &&
                        calculatedBMI < 30 &&
                        '⚠️ Overweight (Berat badan berlebih)'}
                      {calculatedBMI >= 30 && '⚠️ Obese (Obesitas)'}
                    </p> */}
                  </div>
                )}

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {/* HbA1c Input */}
                  <div>
                    <label className="text-foreground mb-2 flex items-center gap-2 text-sm font-medium">
                      Kadar HbA1c *{' '}
                      <span className="text-muted-foreground">(%)</span>
                      <div className="group relative">
                        <Info className="text-muted-foreground h-4 w-4 cursor-help" />
                        <div className="bg-card border-border invisible absolute bottom-full left-1/2 z-10 mb-2 w-48 -translate-x-1/2 rounded-lg border p-2 text-xs shadow-lg group-hover:visible">
                          Rata-rata gula darah 2-3 bulan terakhir
                        </div>
                      </div>
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={formData.HbA1c_level}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          HbA1c_level: e.target.value,
                        })
                      }
                      className="bg-background border-border text-foreground focus:ring-primary/50 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:outline-none"
                      placeholder="contoh: 5.7"
                    />
                    {errors.HbA1c_level && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.HbA1c_level}
                      </p>
                    )}
                  </div>

                  {/* Blood Glucose Input */}
                  <div>
                    <label className="text-foreground mb-2 block text-sm font-medium">
                      Kadar Gula Darah *{' '}
                      <span className="text-muted-foreground">(mg/dL)</span>
                    </label>
                    <input
                      type="number"
                      value={formData.blood_glucose_level}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          blood_glucose_level: e.target.value,
                        })
                      }
                      className="bg-background border-border text-foreground focus:ring-primary/50 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:outline-none"
                      placeholder="contoh: 120"
                    />
                    {errors.blood_glucose_level && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.blood_glucose_level}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center gap-2 rounded-full px-8 py-4 font-bold shadow-lg transition-all"
                >
                  Dapatkan Hasil Prediksi
                  <ArrowRight className="h-5 w-5" />
                </motion.button>

                <a href="/" className="w-full">
                  <button className="border-border text-foreground hover:bg-secondary/30 flex w-full items-center justify-center gap-2 rounded-full border-2 px-6 py-2 transition-colors">
                    <Home className="h-4 w-4" />
                    Kembali ke Beranda
                  </button>
                </a>
              </div>

              <div className="text-muted-foreground space-y-2 text-center text-xs">
                <p>
                  * Semua kolom wajib diisi. BMI akan dihitung otomatis dari
                  berat dan tinggi badan Anda.
                </p>
                <p>
                  Hasil prediksi ini hanya untuk tujuan informasi dan bukan
                  pengganti diagnosis medis profesional.
                </p>
              </div>
            </div>
          )}

          {/* LOADING STEP */}
          {step === 'loading' && (
            <div className="flex flex-col items-center justify-center gap-6 p-12">
              <Loader2 className="text-primary h-16 w-16 animate-spin" />
              <div className="text-center">
                <h2 className="font-heading text-foreground mb-2 text-2xl font-bold">
                  Menganalisis Data Anda...
                </h2>
                <p className="text-muted-foreground">
                  Model AI sedang memproses informasi kesehatan Anda
                </p>
              </div>
            </div>
          )}

          {/* RESULT STEP */}
          {step === 'result' && result && (
            <div className="flex flex-col gap-8 p-8 md:p-12">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="mx-auto mb-6"
                >
                  <div
                    className={`${getRiskLevel(result.probability.diabetes).bgColor} mx-auto flex h-32 w-32 items-center justify-center rounded-full`}
                  >
                    <span
                      className={`${getRiskLevel(result.probability.diabetes).color} font-heading text-4xl font-bold`}
                    >
                      {result.probability.diabetes.toFixed(1)}%
                    </span>
                  </div>
                </motion.div>

                <h1 className="font-heading text-foreground mb-2 text-3xl font-bold">
                  {getRiskLevel(result.probability.diabetes).level}
                </h1>
                <p className="text-muted-foreground text-lg">
                  Probabilitas Risiko Diabetes
                </p>
              </div>

              <div
                className={`${getRiskLevel(result.probability.diabetes).bgColor} rounded-xl p-6`}
              >
                <div className="flex items-start gap-3">
                  <AlertCircle
                    className={`${getRiskLevel(result.probability.diabetes).color} mt-1 h-6 w-6 flex-shrink-0`}
                  />
                  <div>
                    <h3 className="font-heading text-foreground mb-2 font-bold">
                      Apa Artinya Ini?
                    </h3>
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      {getRiskLevel(result.probability.diabetes).message}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/20 space-y-3 rounded-xl p-6">
                <h3 className="font-heading text-foreground font-bold">
                  Rincian Probabilitas
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground text-sm">
                      Tidak Diabetes
                    </span>
                    <span className="font-bold text-green-600">
                      {result.probability.no_diabetes.toFixed(1)}%
                    </span>
                  </div>
                  <div className="bg-background h-2 overflow-hidden rounded-full">
                    <div
                      className="h-full bg-green-500"
                      style={{
                        width: `${result.probability.no_diabetes}%`,
                      }}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground text-sm">Diabetes</span>
                    <span className="font-bold text-red-600">
                      {result.probability.diabetes.toFixed(1)}%
                    </span>
                  </div>
                  <div className="bg-background h-2 overflow-hidden rounded-full">
                    <div
                      className="h-full bg-red-500"
                      style={{ width: `${result.probability.diabetes}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* <div className="border-border/40 rounded-xl border bg-blue-50 p-6">
                <div className="flex items-start gap-3">
                  <Info className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600" />
                  <div>
                    <h3 className="font-heading mb-2 font-bold text-blue-900">
                      Disclaimer Penting
                    </h3>
                    <p className="text-sm leading-relaxed text-blue-800">
                      Hasil ini <strong>BUKAN diagnosis medis</strong>. Tool ini
                      memberikan estimasi berdasarkan data yang Anda masukkan.
                      Untuk diagnosis yang akurat dan penanganan yang tepat,
                      silakan berkonsultasi dengan dokter atau tenaga kesehatan
                      profesional.
                    </p>
                  </div>
                </div>
              </div> */}

              <div className="flex flex-col gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleReset}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center gap-2 rounded-full px-8 py-4 font-bold shadow-lg transition-all"
                >
                  <RotateCcw className="h-5 w-5" />
                  Prediksi Baru
                </motion.button>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <a href="/guide" className="w-full">
                    <button className="border-primary text-primary hover:bg-primary/10 w-full rounded-full border-2 px-6 py-3 transition-colors">
                      Pelajari Diabetes
                    </button>
                  </a>
                  <a href="/" className="w-full">
                    <button className="border-border text-foreground hover:bg-secondary/30 flex w-full items-center justify-center gap-2 rounded-full border-2 px-6 py-3 transition-colors">
                      <Home className="h-4 w-4" />
                      Kembali ke Beranda
                    </button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-muted-foreground font-hand mt-8 text-center text-sm"
      >
        Kesehatan Anda, masa depan Anda. Ambil kendali hari ini. 💙
      </motion.div>
    </div>
  );
};

export default PredictionApp;
