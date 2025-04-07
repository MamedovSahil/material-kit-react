import { FormControlLabel, MenuItem } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useQuery } from '@tanstack/react-query';
import { ChangeEvent } from 'react';
import { Controller, Control } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { CustomSwitch } from 'src/components/CustomSwitch';
import { IntroductionToAppLabels, uesingPlanLabels } from 'src/enums';
import { ICreateUpdateTenant } from 'src/pages/Tenant/types';
import { getAllBusinessTypesFn } from 'src/Api/tenant';
import { IBusinessTypes } from 'src/Api/tenant/types';

interface SecondStepProps {
  control: Control<ICreateUpdateTenant>;
}

const SecondStep = ({ control }: SecondStepProps) => {
  const { data: businessTypes } = useQuery<{ data: IBusinessTypes[] }>({
    queryKey: ['getAllBusinessTypes'],
    queryFn: getAllBusinessTypesFn,
    refetchOnMount: false,
  });

  const { t } = useTranslation();
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xl={6} md={6}>
          <Controller
            name="introductionToApp"
            control={control}
            render={({ field }) => (
              <TextField {...field} size="small" select label="Введение в приложение" fullWidth>
                {Object.entries(IntroductionToAppLabels).map(([value, label]) => (
                  <MenuItem key={value} value={Number(value)}>
                    {label}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Grid>

        <Grid item xl={6} md={6}>
          <Controller
            name="usingPlan.planId"
            control={control}
            render={({ field }) => (
              <TextField {...field} size="small" select label="Использование плана" fullWidth>
                {Object.entries(uesingPlanLabels).map(([value, label]) => (
                  <MenuItem key={value} value={Number(value)}>
                    {label}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Grid>

        <Grid item xl={6} md={6}>
          <Controller
            name="filialCount"
            control={control}
            render={({ field }) => (
              <TextField {...field} size="small" select label="Филиальный Считать" fullWidth>
                <MenuItem value={1}>Один</MenuItem>
                <MenuItem value={2}>Несколько</MenuItem>
              </TextField>
            )}
          />
        </Grid>

        <Grid item xl={6} md={6}>
          <Controller
            name="businessId"
            control={control}
            render={({ field }) => (
              <TextField {...field} size="small" select label="Бизнес" fullWidth>
                {(businessTypes?.data || []).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Grid>

        <Grid item xl={6} md={6}>
          <Controller
            name="isPayedMobileApp"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={<CustomSwitch checked={field.value} onChange={field.onChange} />}
                label="Платное мобильное приложение"
              />
            )}
          />
        </Grid>

        <Grid item xl={6} md={6}>
          <Controller
            name="globalLoyalling"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={<CustomSwitch checked={field.value} onChange={field.onChange} />}
                label="Глобальная лояльность"
              />
            )}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default SecondStep;
