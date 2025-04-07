import dayjs from 'dayjs';
import { useCallback } from 'react';
import { Control, ControllerProps, RegisterOptions } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export const useValidators = () => {
  const { t } = useTranslation();

  const required = useCallback(
    (message = t('requiredField')): Partial<RegisterOptions> => ({
      required: { value: true, message },
    }),
    []
  );

  const maxLength = (
    max: number,
    message = t('maxCharacters', { max })
  ): Partial<RegisterOptions> => ({
    maxLength: { value: max, message },
  });

  const minLength = (
    min: number,
    message = t('minCharacters', { min })
  ): Partial<RegisterOptions> => ({
    minLength: { value: min, message },
  });

  const lengthRange = (
    min: number,
    max: number,
    minMessage?: string,
    maxMessage?: string
  ): Partial<RegisterOptions> => validate(minLength(min, minMessage), maxLength(max, maxMessage));

  const minDate = (
    date?: Date | string,
    message = t('dateGreather', {
      date: dayjs(date).format('YYYY-MM-DD'),
    })
  ): Partial<RegisterOptions> => ({
    validate: (value: Date) => {
      if (!date) return true;

      const inputDate = dayjs(value);
      if (inputDate.isBefore(dayjs(date))) {
        return message;
      }
      return true;
    },
  });

  const maxDate = (
    date?: Date,
    message = t('dateLower', {
      date: dayjs(date).format('YYYY-MM-DD'),
    })
  ): Partial<RegisterOptions> => ({
    validate: (value: Date) => {
      if (!date) return true;

      const inputDate = dayjs(value);
      if (inputDate.isAfter(date)) {
        return message;
      }
      return true;
    },
  });

  const email = (message = t('incorrectEmail')): Partial<RegisterOptions> => ({
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message,
    },
  });

  return {
    required,
    maxLength,
    minLength,
    lengthRange,
    minDate,
    maxDate,
    email,
  };
};

export const validate = (...validators: Partial<RegisterOptions>[]): RegisterOptions => {
  return validators.reduce((acc, validator) => ({ ...acc, ...validator }) as RegisterOptions, {});
};

type FieldRules = Partial<RegisterOptions> | Partial<RegisterOptions>[];

export type FieldControllerProps<T> = T &
  Omit<ControllerProps<any>, 'render'> & {
    control: Control<any>;
    rules?: Partial<RegisterOptions> | Partial<RegisterOptions>[];
  };

export const validateField = (rules?: FieldRules) =>
  Array.isArray(rules) ? validate(...rules) : rules;
