// import React, { Component } from 'react';

// class Panier extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         );
//     }
// }

// export default Panier;

import React, { Component } from 'react';

class Panier extends Component {
    render() {
        return (
            <div className="d-flex align-items-center my-2">
                <p className="my-0 mx-2">Produit : {this.props.article.nom}</p>
                <button className="btn btn-danger" onClick={this.props.revendre}>Rendre</button>
            </div>
        )
    }
}

export default Panier;