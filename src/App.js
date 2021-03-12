// // Import du CSS et de REACT
// import './App.css';
// import { Component } from "react";
// // Import de votre composants/modules
// import Article from './main/Article.js'

// // Import de vos Images
// import Fanta from './img/fanta.png';
// import Coca from './img/coca.png';
// import Icetea from './img/ice-tea.png';
// // ----------------------------------------------------------------------------------------------------------------------------------------------------- //

// class App extends Component {
//   // !! FONCTION A ECRIRE AVANT RENDER() !! //
//   state = {
//     argent: [
//         {
//             argent: 20,
//         }
//     ],
//     panier: [
//       {

//     }
//       // produits:'',
//     ],
//     article: [
//       [
//         {
//             nom: 'Fanta',
//             prix: 0.75,
//             stock: 5
//         }
//       ],
//       [
//         {
//             nom: 'Coca',
//             prix: 1,
//             stock: 5,
//         }
//       ],
//       [
//         {
//             nom: 'Ice tea',
//             prix: 0.90,
//             stock: 5,
//         }
//       ],
//     ]
// }

//   // !! FONCTION A ECRIRE AVANT RENDER() !! //

//   render() {
//     return(
//         <div className="App container d-flex"> 
//             <div>
//                 <h3>Mon argent:</h3>
//             </div>
//             <div className='row'>
//             <div className='Card col-4'>
//                 <Article nom={this.state.article[0]}/>
//                 <img src={Fanta} alt="Fanta"/>
//             </div>
//             <card className='col-4'>
//                 <Article nom={this.state.article[1]}/>
//                 <img src={Coca} alt="Coca"/>
//             </card>
//             <card className='col-4'>
//                 <Article nom= {this.state.article[2]}/>
//                 <img src={Icetea} alt="Ice tea"/>
//            </card>
//             </div>
//         </div>
//     )
//   }
// }

// export default App;

// Import du CSS et de REACT
import './App.css';
import { Component } from "react";
// Import de votre composants/modules

import Article from './main/Article.js'
import Panier from './main/Panier.js'
// Import de vos Images



// ----------------------------------------------------------------------------------------------------------------------------------------------------- //

class App extends Component {
  state = {
    argent:20,
    panier:[],
    articles: [
      
        {
            nom: 'Fanta',
            prix: 0.75,
            stock: 5,
            
        }
      ,
      
        {
            nom: 'Vodka',
            prix: 1,
            stock: 5,
        }
      ,
      
        {
            nom: 'jupiler',
            prix: 2.50,
            stock: 5,
        }
      ,
    ]
}
acheter = (i) => {
  let { argent, panier, articles } = this.state;   // c'est façon de décomposer le state et de l'utiliser sans le 'this.state.x'

  if (argent < articles[i].prix || articles[i].stock === 0) {   // vérifie si il assez d'argent et si le stock est dispo
    return null;   
  }
  //Logique js pour la partie Acheter
  argent -= articles[i].prix;
  panier.push(articles[i]);
  articles[i].stock--;

  this.setState({ argent, panier, articles });  // N'oubliez pas de toujours mettre votre state à jours. Sinon aucun changement sera pris en compte !
} 

revendre = (i) => {
  let { argent, panier, articles } = this.state;

  // Logique js pour la partie revendre
  argent += panier[i].prix;
  articles[articles.indexOf(panier[i])].stock++;
  panier.splice(i, 1);

  this.setState({ argent, panier, articles })
}
  
  render() {
    
    return (
      <div className="App container d-flex">
        <div>
          <h3>Mon argent: {this.state.argent}¥</h3>

        </div>
        <div className="row">
          {this.state.articles.map((el, i)=> {
            return (
              <Article key={i} article={el} argent={this.state.argent} acheter={() => this.acheter(i)} />
            )
          })}
        </div>
        <p>Mon panier : </p>
        {this.state.panier.map((el, i) => {
          return (
            <Panier key={i} article={el} revendre={() => this.revendre(i)} />
          )
        })}
        
      </div>
    );
  }
}

export default App;