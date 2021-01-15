import React, {useEffect} from 'react';
import { connect } from "react-redux";
import KartpartItem from './kartpartitem';
import Newpart from './newpart';

const Kartparts = (props) => {

    const parts = props.parts;
    const setParts = props.setParts;
    /*eslint-disable */
    useEffect(() => {
        getParts();
      }, []);

    const getParts = () => {
        fetch('http://localhost:8080/chasis', { method: 'get' })
            .then(
                function(response) {
                    if(response.status === 200) {
                        response.json().then(function(data){
                            setParts(data);
                        });
                } 
            }
        );
    }
    /*eslint-enable */
    
    return (
        <div className="mainDataContainer">
            <Newpart updateData={getParts}/>
            <div className="headerParts notCellphone">
                <div className="headerDataParts">
                    <div>Parte</div> 
                    <div>Marca</div> 
                    <div>Modelo</div>
                </div>
            </div>

            <div className="headerParts onlyCellphone">
                <div className="headerDataParts">
                    <div>Parte</div> 
                </div>
            </div>

            <div class="partsListContainer">
            {parts.map((p, index) => (
                <KartpartItem id={p._id} partname={p.partname} brand={p.brand}  model={p.model} stock={p.stock} updateData={getParts} key={index} />
            ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    parts: state.partsR.parts,
});

const mapDispatchToProps = (dispatch) => ({
    setParts(parts_data){
        dispatch({
            type: "SET_PARTS",
            parts: parts_data
        });
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Kartparts);