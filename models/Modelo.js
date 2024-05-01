const mongoose = require('mongoose');

const ModeloSchema = new mongoose.Schema({
    nome:{
        type:String,
    },
    cpf:{
        type:String,
        default: "",
    },
    preco:{
        type:String,
        default: "",
    },
    email:{
        type:String,
        unique:false,
    },
    altura:{
        type:String,
    },
    nome_completo:{
        type:String,
        default: ""
    },
    cor_pele:{
        type:String,
        default: ""
    },
    cor_cabelo:{
        type:String,
        default: ""
    },
    cor_olhos:{
        type:String,
        default: ""
    },
    tipo_cabelo:{
        type:String,
        default: ""
    },
    tipo_corpo:{
        type:String,
        default: ""
    },
    peso:{
        type:String,
        default: ""
    },
    sexo:{
        type:String,
        default: ""
    },
    genero:{
        type:String,
        default: ""
    },
    orientacao_sexual:{
        type:String,
        default: ""
    },
    profilePic:{
        type:String,
        default: "uploads/user.png"
    },
    banner:{
        type:String,
        default: "uploads/user.png"
    },
    whatsapp: {
        type:String,
        default: "",
    },
    album_id: {
        type:String,
        default: null,
    },
    agencia_id: {
        type:String,
        default: null,
    },
    agencia_name: {
        type:String,
        default: null,
    },
    categoria: {
        type:String,
        default: null,
    },
},
    {timestamps: true}
);

module.exports = mongoose.model("Modelo", ModeloSchema);