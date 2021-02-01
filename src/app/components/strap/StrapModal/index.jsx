import React from 'react';
// Node
import PropTypes from 'prop-types';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
// Own
import styleMod from './styles/style.module.css';

/*
 * Компонент "Модальное окно" (обертка над ReactStrap)
 */

// Входящие свойства
const propTypes = {
    // Имя css-класса компонента
    className: PropTypes.string,
    // Текст заголовка
    modalHeader: PropTypes.string,
    // Контент
    modalContent: PropTypes.node,
    // Показывать ли модальное окно
    showModal: PropTypes.bool,
    // Кнопки
    modalButtons: PropTypes.node,
    // Имя css-класса фона
    backdropClassName: PropTypes.string,
    // Текст над модальным окном
    windowHeader: PropTypes.string,
    // Иконка заголовка
    headerIcon: PropTypes.node,    
};

// Свойства по умолчанию
const defaultProps = {           
    showModal: false,    
};

const StrapModal = (props) => {
  const {    
    className, modalHeader, modalContent, showModal,
    modalButtons, backdropClassName, windowHeader, headerIcon
  } = props;

  return (
    <div>      
      <Modal isOpen={showModal} className={className} backdropClassName={backdropClassName}>
        <h2 className="authWindowHeader">{windowHeader}</h2>
        <ModalHeader>
            <div className={styleMod.modalTitleText}>{modalHeader}</div>
            <div className={styleMod.modalTitleIcon}>{headerIcon && headerIcon}</div>
        </ModalHeader>
        <ModalBody>
            {modalContent}
        </ModalBody>
        {modalButtons &&
            <ModalFooter>
              {
                modalButtons.map((button, i) =>
                    <Button
                        color={button.color} 
                        onClick={() => {button.onClick()}}
                        key={'modalbutton_'+i}
                    >
                        {button.text}
                    </Button>
                )
              }          
            </ModalFooter>
        }
      </Modal>
    </div>
  );
}

// Описание свойств и дефолтные значения компонента
StrapModal.propTypes = propTypes;
StrapModal.defaultProps = defaultProps;

// Экспорт компонента
export default StrapModal;