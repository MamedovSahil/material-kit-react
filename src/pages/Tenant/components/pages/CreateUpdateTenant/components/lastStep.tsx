import { LoadingButton } from '@mui/lab';
import { FormControlLabel, Switch } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Control, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ICreateUpdateTenant } from 'src/pages/Tenant/types';

interface LastStepProps {
  control: Control<ICreateUpdateTenant>;
}

const LastStep = ({ control }: LastStepProps) => {
  const { t } = useTranslation();
  return (
    <div>
      <Grid container spacing={2}>
        {/* <Grid item xl={4} md={4}>
          <Controller
            name="recordSettings.requireClientEmail"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                required
                control={<Switch {...field} checked={field.value} />}
                label="Required"
              />
            )}
          />
        </Grid> */}
        <Grid item xl={4} md={4}></Grid>
        <Grid item xl={4} md={4}>
          <div className="mt-5">
            <LoadingButton
              loading={false}
              fullWidth
              size="large"
              type="submit"
              color="inherit"
              variant="contained"
            >
              {t('save')}
            </LoadingButton>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default LastStep;
