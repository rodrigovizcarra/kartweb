import React, {useState} from 'react';
import Modal from 'react-modal';
import Close from '../css/ui_img/Close.svg';
import Plus from '../css/ui_img/Plus.svg';

const Newpart = (props) => {

    const updateData = props.updateData;
    const [isOpenMewPartModal, setIsOpenMewPartModal] = useState(false);

    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [stock, setStock] = useState(0);

    const openModal = () => {
        setIsOpenMewPartModal(true);
    }

    const closeModal = () => {
        setIsOpenMewPartModal(false);
    }

    const newPart = () => {
        fetch('http://localhost:8080/chasis', {
            method: 'post',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({ partname: "Chasis", brand: brand, model: model, stock: stock })
         })
        .then(function(response) {
            if(response.status !== 200) {
                console.error("Trouble updating");
            }
            else {
                updateData();
            }
        })
    };

    return (
            <div>
                <div className="toolsParts">
                    <button onClick={() => openModal()}>
                        <img src={Plus} alt="New item btn" />
                    </button>
                </div>
                <Modal
                isOpen={isOpenMewPartModal}
                className="Modal"
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
                <form>
                    <div className="itemForm">
                        <label>Marca: </label>
                        <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)}/>
                    </div>
                    <div className="itemForm">
                        <label>Modelo: </label>
                        <input type="text" value={model} onChange={(e) => setModel(e.target.value)}/>
                    </div>
                    <div className="itemForm">
                        <label>Stock: </label>
                        <input type="text" value={stock} onChange={(e) => setStock(e.target.value)}/>
                    </div>
                    <div className="itemForm-Submit">
                        <button className="saveBtn" onClick={() => newPart()}>Guardar</button>
                    </div>
                </form>
                </Modal>
            </div>
        
    )
};

export default Newpart;