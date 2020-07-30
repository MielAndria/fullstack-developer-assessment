import React from 'react'
import Modal from 'react-bootstrap/Modal'
import closeIcon from '../../assets/UI/close.svg'
import classes from './modal.module.css'
import './modalUI.css'

const ModalUI = (props) => (
  <Modal
    backdrop = {props.backdrop || true}
    show = {props.show}
    onHide = {props.modalClosed}
    className = {[classes.Modal, props.wrapperClass].join(' ')}
    dialogClassName = {props.modalClass}
    aria-labelledby = "modal-info"
    backdropClassName = {props.backdropClassName}
  >
    <Modal.Header className = {props.headerClass}>

      <Modal.Title id = "modal-info" className = {props.headingTextClass}>
      {props.backFilter && <span className={classes.modalImageBack} onClick={props.handleClickBackFilter}><img src={props.backFilter} alt='back'/></span>}
        { props.heading }
      </Modal.Title>
      <span className = {classes.Close} onClick={props.handleCloseModal}> 
        <img src={closeIcon} alt='close modal'/>
      </span>
    </Modal.Header>
    <Modal.Body className = {[classes.ModalBody,props.loginAccountBody].join(' ')}>
      { props.children }
    </Modal.Body>
  </Modal>
)

export default ModalUI
