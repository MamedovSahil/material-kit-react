import { IconButton, InputAdornment, TextField } from '@mui/material';
import { FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { CustomModal } from 'src/components/shared/Modal';
import { useTranslation } from 'react-i18next';
import { Iconify } from 'src/components/iconify';
import LoadingButton from '@mui/lab/LoadingButton';
import { useCreateAccaunt } from 'src/Api/account';
interface Props {
  open: boolean;
  onClose: () => void;
}

interface IAccount {
  username: string;
  password: string;
  email: string;
}
const CreateAccountModal: FC<Props> = ({ open, onClose }) => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const { mutate, isPending } = useCreateAccaunt();
  const { handleSubmit, control } = useForm<IAccount>({
    defaultValues: { username: '', password: '', email: '' },
  });

  const handleAddAccount = (values: IAccount) => {
    mutate(values, {
      onSuccess: () => onClose(),
    });
  };

  return (
    <CustomModal
      renderHeader={{ title: 'Create User', hidden: false }}
      open={open}
      onClose={onClose}
      className="w-[600px]"
    >
      <form onSubmit={handleSubmit(handleAddAccount)}>
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <TextField {...field} fullWidth label="Name" sx={{ mb: 3 }} required />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField {...field} fullWidth label={t('email')} sx={{ mb: 3 }} required />
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
              // type={showPassword ? 'text' : 'password'}
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
        <div className="mt-5">
          <LoadingButton
            loading={isPending}
            fullWidth
            size="large"
            type="submit"
            color="inherit"
            variant="contained"
          >
            {t('save')}
          </LoadingButton>
        </div>
      </form>
    </CustomModal>
  );
};

export default CreateAccountModal;
