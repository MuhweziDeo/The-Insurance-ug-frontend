import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import color from '@material-ui/core/colors/teal';

export interface IModalProps {
  name?: string
  children?:any
  color?: any
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 700,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(4),
      outline: 'none',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
  }),
);

export default function ModalComponent(props: IModalProps): any {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" color={props.color || "primary"} onClick={handleOpen}>{props.name}</Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
            {props.children}
        </div>
      </Modal>
    </div>
  );
}