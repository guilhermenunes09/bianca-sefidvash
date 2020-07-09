import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PlanejadosImg from './img/planejados_1.jpg';

const style = {
    image: {
        backgroundColor: '#cc00cc',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
}

const Planejados = () => {
    return(
        <React.Fragment>
            <Row style={{height: '50vh'}}>
                <Col>
                    <h1>
                    Projeto de Marcenaria e Planejados
                    </h1>

                    <p>
                        DESIGN DE MÓVEIS <br />
                        PROJETO PARA MARCENARIA <br />
                        CONSULTORIA DE CORES E ACABAMENTOS
                    </p>
                </Col>
                <Col style={style.image}>
                    <img className="m-2" height={200} src={PlanejadosImg} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <img className="m-2" height={200} src={PlanejadosImg} />
                    <img className="m-2" height={200} src={PlanejadosImg} />
                </Col>
            </Row>
            

        </React.Fragment>
    )
}

export default Planejados;