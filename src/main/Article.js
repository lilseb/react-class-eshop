// import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';
// class Article extends Component {
//     render() {

//         return this.props.nom.map((article) =>
//         <div>
//         <card>
//         <h2> {article.nom}</h2>
//         <h2>{article.prix}</h2>
//         <h2>{article.stock}</h2>
//         <Button variant="success" onClick={this.showProduits}>Buy</Button>{' '}
//         </card>
//         </div>
//         )
//     }
// }

// export default Article;

import React, { Component } from 'react';
import './article.css';
import fanta from '../img/coca.png';
class Article extends Component {
    
    render() {
        return (
            <div className="col-xl-4 col-md-12">
                <div className="card">
                    <div className="logo d-flex justify-content-center align-items-center">
                        <img src={fanta}  className="img-fluid"/>
                        
                    </div>
                    
                    <div className={`card-body ${this.props.article.stock === 1 ? "bg-warning" : this.props.article.stock === 0 ? "bg-danger text-white" : ""}`}>
                        <h5 className="card-title">{this.props.article.nom}</h5>
                        <p className="card-text">Prix : {this.props.article.prix}€</p>
                        <p className="card-text">{this.props.article.stock === 0 ? "Rupture de stock" : `Stock : ${this.props.article.stock} unités`}</p>
                        <button onClick={this.props.acheter} className={`btn btn-success ${this.props.article.stock === 0 || this.props.argent < this.props.article.prix ? "d-none" : ""}`}>Acheter</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Article;