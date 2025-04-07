export interface ITenant {
  id: string;
  phoneNumber: string;
  personalCount: number;
  filialCount: number;
  translations: string;
  usingPlan: string;
  recordSetings: string;
}

export interface ICreateUpdateTenant {
  phoneNumber: string;
  personalCount: number | null;
  filialCount: number | null;
  businessId: number | null;
  introductionToApp: number | null;
  cityId: number | null;
  countryId: number | null;
  isPayedMobileApp: boolean;
  globalLoyalling: boolean;
  translations: Translations;
  recordSettings: RecordSettings;
  usingPlan: UsingPlan;
}

export interface Translations {
  langId: string;
  name: string;
  address: string;
  description: string;
}

export interface RecordSettings {
  requireClientEmail: boolean;
  requireClientGender: boolean;
  requireClientBirthdate: boolean;
  requireClientNote: boolean;
  requireClientFathername: boolean;
  showClientEmailInRecords: boolean;
  showClientGenderInRecords: boolean;
  showClientBirthdateInRecords: boolean;
  showClientFathernameInRecords: boolean;
}

export interface UsingPlan {
  planId: number | null;
}
