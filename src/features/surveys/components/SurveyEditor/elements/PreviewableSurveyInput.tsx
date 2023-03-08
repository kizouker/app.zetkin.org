import { FC } from 'react';
import { TextField, Typography, useTheme } from '@mui/material';

import ZUIPreviewableInput, {
  ZUIPreviewableMode,
} from 'zui/ZUIPreviewableInput';

type HeadlinePreviewableInputProps = {
  label?: string;
  mode: ZUIPreviewableMode;
  onChange: (value: string) => void;
  onSwitchMode: (newMode: ZUIPreviewableMode) => void;
  placeholder: string;
  value: string | undefined | null;
  variant: 'h4' | 'h5';
};

const PreviewableSurveyInput: FC<HeadlinePreviewableInputProps> = ({
  placeholder,
  label,
  mode,
  onChange,
  onSwitchMode,
  value,
  variant,
}) => {
  const theme = useTheme();
  return (
    <ZUIPreviewableInput
      mode={mode}
      onSwitchMode={onSwitchMode}
      renderInput={(props) => (
        <TextField
          fullWidth
          inputProps={props}
          label={label}
          onChange={(ev) => onChange(ev.target.value)}
          sx={{ marginBottom: 2 }}
          value={value}
        />
      )}
      renderPreview={() => (
        <Typography
          color={
            value ? theme.palette.text.primary : theme.palette.text.disabled
          }
          marginBottom={2}
          variant={variant}
        >
          {value || placeholder}
        </Typography>
      )}
      value={value || placeholder}
    />
  );
};

export default PreviewableSurveyInput;
