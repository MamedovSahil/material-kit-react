import { useState } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';
import { Iconify } from 'src/components/iconify';
import { Controller, useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { useLogin } from 'src/Api/account';
import { useTranslation } from 'react-i18next';

interface ILoginValue {
  username: string;
  password: string;
}
const SignIn = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const { mutate, isPending } = useLogin();
  const { handleSubmit, control } = useForm<ILoginValue>({
    defaultValues: { username: '', password: '' },
  });

  const handleSignIn = (values: ILoginValue) => {
    mutate(values);
  };

  const renderForm = (
    <Box display="flex" flexDirection="column" alignItems="flex-end">
      <form onSubmit={handleSubmit(handleSignIn)}>
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <TextField {...field} fullWidth label={t('username')} sx={{ mb: 3 }} required />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label={t('password')}
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      <Iconify icon={showPassword ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              required
            />
          )}
        />
        <Link
          sx={{ mb: 3, mt: 1, cursor: 'pointer' }}
          variant="body2"
          className="flex justify-end"
          color="inherit"
        >
          {t('forgotPassword')}
        </Link>

        <LoadingButton
          loading={isPending}
          fullWidth
          size="large"
          type="submit"
          color="inherit"
          variant="contained"
        >
          {t('signIn')}
        </LoadingButton>
      </form>
    </Box>
  );

  return (
    <>
      <Box gap={1.5} display="flex" flexDirection="column" alignItems="center" sx={{ mb: 5 }}>
        <Typography className="mt-6" variant="h5">
          {t('signIn')}
        </Typography>
      </Box>

      {renderForm}

      <Divider sx={{ my: 3, '&::before, &::after': { borderTopStyle: 'dashed' } }}>
        <Typography
          variant="overline"
          sx={{ color: 'text.secondary', fontWeight: 'fontWeightMedium' }}
        >
          OR
        </Typography>
      </Divider>

      <Box gap={1} display="flex" justifyContent="center">
        <IconButton color="inherit">
          <Iconify icon="logos:google-icon" />
        </IconButton>
        <IconButton color="inherit">
          <Iconify icon="eva:github-fill" />
        </IconButton>
        <IconButton color="inherit">
          <Iconify icon="ri:twitter-x-fill" />
        </IconButton>
      </Box>
    </>
  );
};

export default SignIn;
