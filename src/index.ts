import PasseioModel from "./model/passeio-model";
import CarroModel from "./model/carro-model";
import CaminhoneteModel from "./model/camihonete-model";

var chevette = new PasseioModel (1,1986,'kkk-3333','5555555555',
5000,'GM','Chevette 1.6 alcool','Sedam',5);

//aqui estou comprando chevette
chevette.comprar();

//aqui estou dirigindo um chevette
//metodo da classe CarrroModel
chevette.dirigir();

//aqui estou vendendo chevette
//metodo da classe 
chevette.vender();

//=================================================

var carro: CarroModel;

carro=chevette

carro.modelo='covertte';

carro.dirigir();

//=================================================


//var l200 = new CaminhoneteModel (1,1986,'kkk-3333','5555555555',
//1000000,'GM','silverado',1000);

//silverado.dirigir();

//=================================================
//Abstraçao



