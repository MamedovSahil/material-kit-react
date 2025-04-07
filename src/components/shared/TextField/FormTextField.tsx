import { Controller, ControllerProps } from 'react-hook-form';
// import { TTextField } from '.';
import TextField from '@mui/material/TextField';
import { TextFieldProps } from '@mui/material';

type TFormTextField = Omit<ControllerProps<any>, 'render'> & {
  label?: string;
  required?: boolean;
  type?: string;
};

const FormTextField = ({
  name,
  control,
  rules,
  shouldUnregister,
  defaultValue,
  disabled,
  required,
  ...props
}: TFormTextField) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      shouldUnregister={shouldUnregister}
      defaultValue={defaultValue}
      disabled={disabled}
      render={({ field, fieldState }) => {
        return (
          <TextField
            {...field}
            {...props}
            error={fieldState.invalid}
            fullWidth
            size="small"
            helperText={fieldState.error?.message}
            disabled={disabled}
            required={required}
            value={field.value ?? ''}
            // required={rules && 'required' in rules}
          />
        );
      }}
    />
  );
};

export default FormTextField;
