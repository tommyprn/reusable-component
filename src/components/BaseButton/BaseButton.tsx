import { Button } from '@mui/material';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  title: string;
  color?: 'primary' | 'secondary' | 'danger';
  loading?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  textColor?: 'white' | 'black';
}

const BaseButton = ({
  type = 'button',
  size = 'sm',
  title,
  color = 'primary',
  loading,
  onClick,
  disabled = false,
  textColor = 'white',
}: ButtonProps) => {
  const background = {
    danger: '#d33436',
    primary: '#303030',
    secondary: '#F5F5F5',
  };

  const fontColor = {
    white: '#ffffff',
    black: '#303030',
  };

  const fontSize = {
    xs: '10px',
    sm: '12px',
    md: '14px',
    lg: '18px',
    xl: '20px',
  };

  return (
    <Button
      sx={{
        color: fontColor[textColor],
        fontSize: fontSize[size],
        background: background[color],
        borderRadius: '50px',
        padding: '6px 10px ',
      }}
      type={type}
      onClick={onClick}
      loading={loading}
      variant='contained'
      disabled={disabled}
      loadingPosition='start'
      disableElevation
    >
      <p style={{ padding: 0, margin: 0 }}>{title}</p>
    </Button>
  );
};

export default BaseButton;
