import React, {useState} from 'react';
import Modal from 'react-modal';
import Close from '../css/ui_img/Close.svg';
import trashcan from '../css/ui_img/trashcan.svg';

const KartpartItem = (props) => {
    const id = props.id;
    const partname = props.partname;
    const brand = props.brand;
    const model = props.model;
    const stock = props.stock;

    const updateData = props.updateData;


    const [isOpenDeletePartModal, setIsOpenDeletePartModal] = useState(false);

    const openModal = () => {
        setIsOpenDeletePartModal(true);
    }

    const closeModal = () => {
        setIsOpenDeletePartModal(false);
    }

    const deleteItemPart = () => {
        fetch('http://localhost:8080/chasis/' + id, { method: 'delete' })
            .then(
                function(response) {
                    if(response.status === 200) {
                        response.json().then(function(data){
                            updateData();
                        });
                } 
            }
        );
    }

    const updateStock = (newstock) => {
        fetch('http://localhost:8080/chasis/' + id, {
            method: 'put',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({ stock: newstock })
         })
        .then(function(response) {
            if(response.status !== 200) {
                console.error("Trouble updating");
            }
            else {
                updateData();
                closeModal();
            }
        })
    }

    const increaseItemPart = () => {
        let newstock = Number(props.stock) + 1;
        updateStock(newstock);
    }

    const decreaseItemPart = () => {
        let newstock = Number(props.stock) - 1;
        updateStock(newstock);
    }

    return(<div className="itemPartContainer">
                <div>
                    <div className="itemName">
                        <div>{partname}</div> 
                        <div>{brand}</div> 
                        <div>{model}</div>
                    </div>
                    <div className="itemPart">
                        <button onClick={() => openModal()}><img src={trashcan} alt="del button" /></button>
                    </div>
                    <div className="itemPart">
                        <span className="input-number-decrement" onClick={() => decreaseItemPart()}>–</span>
                        <input className="input-number" type="text" value={stock} readOnly/>
                        <span className="input-number-increment" onClick={() => increaseItemPart()}>+</span>
                    </div>
                </div>
                <Modal
                isOpen={isOpenDeletePartModal}
                className="ModalDelete"
                overlayClassName="Overlay"
                onRequestClose={closeModal}
                contentLabel="Nuevo chasis"
                style={{
                    overlay: {
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      zIndex: 10101,
                    },
                    content: {
                      color: "black",
                      zIndex: 10103,
                    },
                  }}
                >
        
                <h2>Crea un nuevo chasis</h2>
                <button className="closeModal" onClick={closeModal}><img src={Close} alt="close btn"/></button>
                <p>¿Estás seguro que quieres eliminar este item?</p>
                <div className="itemForm-Submit">
                    <button className="saveBtn" onClick={() => deleteItemPart()}>Aceptar</button>
                    <button className="saveBtn" onClick={() => closeModal()}>Cancelar</button>
                </div>
                </Modal>
            </div>);
};


export default KartpartItem;
