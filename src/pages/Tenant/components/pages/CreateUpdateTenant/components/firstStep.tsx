import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Controller, Control } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ICreateUpdateTenant } from 'src/pages/Tenant/types';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { twMerge } from 'tailwind-merge';
import FormTextField from 'src/components/shared/TextField/FormTextField';

interface FirstStepProps {
  control: Control<ICreateUpdateTenant>;
}

const FirstStep = ({ control }: FirstStepProps) => {
  const { t } = useTranslation();
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xl={6} md={6}>
          <FormTextField control={control} label="Address" name="translations.name" required />
        </Grid>
        <Grid item xl={6} md={6}>
          <FormTextField control={control} label="Address" name="translations.address" required />
        </Grid>
        <Grid item xl={6} md={6}>
          <FormTextField
            control={control}
            label="Description"
            name="translations.description"
            required
          />
        </Grid>
        <Grid item xl={6} md={6}>
          <FormTextField
            control={control}
            label="Personal Count"
            name="personalCount"
            type="number"
            required
          />
        </Grid>

        <Grid item xl={6} md={6}>
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => (
              <PhoneInput
                country={'ru'}
                value={field.value}
                inputClass={twMerge('focus:outline-none py-[5px] p-3 !w-full  text-xl ')}
                buttonClass="!rounded-l-huge !hover:bg-red-500 !border-0 !bg-transparent"
                onChange={field.onChange}
              />
            )}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default FirstStep;
