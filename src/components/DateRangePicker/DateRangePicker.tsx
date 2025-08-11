import { useState } from 'react';
import { classNames } from '../../utils/cn';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  Box,
  Paper,
  Popper,
  Button,
  TextField,
  ClickAwayListener,
} from '@mui/material';
import {
  PickersDay,
  DateCalendar,
  LocalizationProvider,
} from '@mui/x-date-pickers';

interface DateRangePickerProps {
  endDate: Date | string | Dayjs;
  disabled?: boolean;
  required?: boolean;
  startDate: Date | string | Dayjs;
  classname?: string;
  setEndDate: (value: dayjs.Dayjs | null) => void;
  setStartDate: (value: dayjs.Dayjs | null) => void;
}

const DateRangePicker = ({
  endDate,
  disabled,
  required,
  startDate,
  classname,
  setEndDate,
  setStartDate,
}: DateRangePickerProps) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selecting, setSelecting] = useState('start');

  const handleOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDateSelect = (newDate: Dayjs) => {
    const normalizedDate = newDate.startOf('day'); // ← This ensures it's 00:00:00 local time

    if (!startDate || selecting === 'start') {
      setStartDate(normalizedDate);
      setEndDate(null);
      setSelecting('end');
    } else {
      if (normalizedDate.isBefore(startDate)) {
        setStartDate(normalizedDate);
        setEndDate(null);
      } else {
        setEndDate(normalizedDate);
        setSelecting('start');
      }
    }
  };

  const isInRange = (day: any) => {
    return (
      endDate &&
      startDate &&
      dayjs(day).isAfter(startDate) &&
      dayjs(day).isBefore(endDate)
    );
  };

  const renderDay = (day: Dayjs, _selectedDates: any, pickersDayProps: any) => {
    const inRange = isInRange(day);
    const isSelectedEnd = dayjs(day).isSame(endDate);
    const isSelectedStart = dayjs(day).isSame(startDate);

    return (
      <PickersDay
        {...pickersDayProps}
        className={classNames(
          '!m-0',
          inRange && '!rounded-none !bg-[#bbdefb]',
          isSelectedEnd && '!rounded-r-full !bg-[#5e9fe0] !text-white',
          isSelectedStart && '!rounded-l-full !bg-[#5e9fe0] !text-white',
          endDate === null && '!rounded-full'
        )}
        sx={{
          '&:focus': {
            backgroundColor:
              isSelectedStart || isSelectedEnd
                ? '#5e9fe0'
                : inRange
                ? '#bbdefb'
                : '',
          },
        }}
      />
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TextField
        value={
          startDate && endDate
            ? `${dayjs(startDate).format('DD MMM YYYY')} - ${dayjs(
                endDate
              ).format('DD MMM YYYY')}`
            : 'Select Date'
        }
        disabled={disabled}
        size='small'
        variant='outlined'
        onClick={handleOpen}
        required={required}
        className={classNames('w-[250px] ', classname)}
      />

      <Popper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        placement='bottom-start'
        sx={{
          zIndex: 1400,
        }}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Paper>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <DateCalendar
                value={null}
                onChange={handleDateSelect as any}
                slots={{
                  day: (params) => renderDay(params.day, null, params),
                }}
              />
            </Box>

            <div className='flex justify-end p-4'>
              <Button
                onClick={handleClose}
                variant='contained'
                disableElevation
              >
                Close
              </Button>
            </div>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </LocalizationProvider>
  );
};

export default DateRangePicker;
