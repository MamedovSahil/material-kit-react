export enum IntroductionToAppEnum {
  Recommendation = 1,
  InternetAdvertising,
  Conference,
  LongTimeFan,
  DoNotRemember,
}

export const IntroductionToAppLabels: Record<IntroductionToAppEnum, string> = {
  [IntroductionToAppEnum.Recommendation]: 'Рекомендация',
  [IntroductionToAppEnum.InternetAdvertising]: 'Интернет-реклама',
  [IntroductionToAppEnum.Conference]: 'Конференция',
  [IntroductionToAppEnum.LongTimeFan]: 'Давний поклонник',
  [IntroductionToAppEnum.DoNotRemember]: 'Не помню',
};

export enum uesingPlanEnum {
  RetainCustomers = 1,
  OnlineBooking,
  TrackStaffPerformance,
  ManageInventory,
  KeepFinancialRecords,
  AutomateCommunicationsWithCustomers,
  ReceiveCustomerFeedback,
  CalculatePayroll,
  DiscountAndLoyaltyProgram,
  BuildAClientBase,
}

export const uesingPlanLabels: Record<uesingPlanEnum, string> = {
  [uesingPlanEnum.RetainCustomers]: 'Удержание клиентов',
  [uesingPlanEnum.OnlineBooking]: 'Онлайн-бронирование',
  [uesingPlanEnum.TrackStaffPerformance]: 'Отслеживание эффективности сотрудников',
  [uesingPlanEnum.ManageInventory]: 'Управление запасами',
  [uesingPlanEnum.KeepFinancialRecords]: 'Ведение финансовой отчетности',
  [uesingPlanEnum.AutomateCommunicationsWithCustomers]: 'Автоматизация общения с клиентами',
  [uesingPlanEnum.ReceiveCustomerFeedback]: 'Получение отзывов клиентов',
  [uesingPlanEnum.CalculatePayroll]: 'Расчет заработной платы',
  [uesingPlanEnum.DiscountAndLoyaltyProgram]: 'Скидки и программа лояльности',
  [uesingPlanEnum.BuildAClientBase]: 'Формирование клиентской базы',
};
