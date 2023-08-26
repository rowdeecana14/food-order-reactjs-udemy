import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const portalElement = document.getElementById("overlays");

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.hideCart}></div>;
}

const ModalOverlay = (props)=> {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

export default function Modal(props) {
  return (
    <>
      {createPortal(<Backdrop hideCart={props.hideCart} />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}
