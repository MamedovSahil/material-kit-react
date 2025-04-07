import PageHeader from 'src/components/pageHeader';
import { useTranslation } from 'react-i18next';
import { Grid, StepLabel, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import LoadingButton from '@mui/lab/LoadingButton';
import { ICreateUpdateTenant } from 'src/pages/Tenant/types';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FirstStep from './components/firstStep';
import SecondStep from './components/secondStep';
import LastStep from './components/lastStep';

const CreateUpdateTenantPage = () => {
  const { t } = useTranslation();

  const { handleSubmit, control } = useForm<ICreateUpdateTenant>({
    defaultValues: {
      phoneNumber: '',
      personalCount: null,
      filialCount: null,
      businessId: null,
      introductionToApp: null,
      cityId: null,
      countryId: null,
      isPayedMobileApp: false,
      globalLoyalling: false,
      translations: {
        langId: '',
        name: '',
        address: '',
        description: '',
      },
      recordSettings: {
        requireClientEmail: false,
        requireClientGender: false,
        requireClientBirthdate: false,
        requireClientNote: false,
        requireClientFathername: false,
        showClientEmailInRecords: false,
        showClientGenderInRecords: false,
        showClientBirthdateInRecords: false,
        showClientFathernameInRecords: false,
      },
      usingPlan: {
        planId: null,
      },
    },
  });
  const steps = [
    { stepTitle: 'Step 1', content: <FirstStep control={control} /> },
    { stepTitle: 'Step 2', content: <SecondStep control={control} /> },
    { stepTitle: 'Step 3', content: <LastStep control={control} /> },
  ];

  const handleAddAccount = (values: ICreateUpdateTenant) => {
    console.log(values, 'values');
  };

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="p-5 px-7">
      <PageHeader title="Create-Tenant" />
      <form onSubmit={handleSubmit(handleAddAccount)}>
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => {
              return (
                <Step key={label.stepTitle}>
                  <StepLabel>{label.stepTitle}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
            </>
          ) : (
            <>
              <div className=" p-10">{steps[activeStep].content}</div>

              <div className="flex flex-row p-6 pt-0">
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                  type="button"
                >
                  Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button type="button" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </>
          )}
        </Box>

        {/* <Grid container spacing={2}>
          <Grid item xl={4} md={4}>
            <Controller
              name="translations.name"
              control={control}
              render={({ field }) => (
                <TextField {...field} fullWidth label="Name" size="small" sx={{ mb: 3 }} required />
              )}
            />
          </Grid>
          <Grid item xl={4} md={4}>
            <Controller
              name="translations.address"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label={t('email')}
                  size="small"
                  sx={{ mb: 3 }}
                  required
                />
              )}
            />
          </Grid>
          <Grid item xl={4} md={4}>
            <Controller
              name="translations.description"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  size="small"
                  label={t('email')}
                  sx={{ mb: 3 }}
                  required
                />
              )}
            />
          </Grid>
        </Grid> */}
      </form>
    </div>
  );
};

export default CreateUpdateTenantPage;
