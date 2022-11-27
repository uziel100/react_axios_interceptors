
import { FC } from 'react';
import { useSnackbar, VariantType, WithSnackbarProps } from 'notistack';

let snackbarRef: WithSnackbarProps;

export const SnackbarConfigurator: FC = () => {
  snackbarRef = useSnackbar();
  return null;
}

export const SnackbarUtilities = {
  toast(msg: string, variant: VariantType = "default"){
    snackbarRef.enqueueSnackbar(msg, { variant });
  },
  success(msg: string) {
    this.toast(msg, 'success')
  },
  error(msg: string) {
    this.toast(msg, 'error')
  },
  info(msg: string) {
    this.toast(msg, 'info')
  },
  warning(msg: string) {
    this.toast(msg, 'warning')
  },
}