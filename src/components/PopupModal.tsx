import { Grid, Button, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface PopupModalProps {
  width?: number;
  open: boolean;
  text: string;
  handleClose: () => void;
  handleSave: () => void;
  buttonVariant: 'text' | 'outlined' | 'contained';
  buttonColor:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
  buttonText: string;
}

const PopupModal = (props: PopupModalProps) => {
  const {
    width,
    text,
    open,
    handleClose,
    handleSave,
    buttonVariant,
    buttonColor,
    buttonText,
  } = props;

  const styles = {
    modalStyle: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: width !== undefined ? width : 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    },
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grid container sx={styles.modalStyle} spacing={1}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 0,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Grid item xs={12}>
          <p>{text}</p>
        </Grid>
        <>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              onClick={handleSave}
              variant={buttonVariant}
              color={buttonColor}
              className="popup-primary-button"
            >
              {buttonText}
            </Button>
          </Grid>
          <Grid item xs={3}></Grid>
        </>
      </Grid>
    </Modal>
  );
};

export default PopupModal;
