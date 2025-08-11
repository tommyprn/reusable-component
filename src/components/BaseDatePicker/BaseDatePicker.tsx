import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers';
import type { PickerValue } from '@mui/x-date-pickers/internals';

interface BaseInputProps {
  value?: PickerValue;
  error?: string;
  onChange?: (date: any) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  placeholder?: string;
}

function BaseDatePicker({
  value,
  error,
  onChange,
  disabled,
  required,
  className,
  placeholder,
}: BaseInputProps) {
  return (
    <DatePicker
      value={value}
      format={placeholder ? placeholder : 'DD-MMM-YYYY'}
      disabled={disabled}
      onChange={(date) => {
        onChange && onChange(dayjs(date).format('YYYY-MM-DD'));
      }}
      slotProps={{
        textField: {
          size: 'small',
          variant: 'outlined',
          required: required,
          className: className,
          helperText: error,
        },
        openPickerButton: {
          tabIndex: -1,
        },
      }}
    />
  );
}

export default BaseDatePicker;
