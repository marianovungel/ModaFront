const express = require('express')
const router = express.Router()
const Produto = require("../models/Produto")
const Modelo = require("../models/Modelo")
const _ = require("underscore")

router.post("/criar", async(req, res)=>{
    try{
        const nerUser = new Modelo(req.body);
        const user = await nerUser.save();
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
});


router.get("/", async(req, res)=>{
    try {
        const produtos = await Modelo.find()
        let data = _.shuffle(produtos);
        res.status(200).json(data);
    } catch (error) {
        return res.status(404).json(err);
    }
})
router.get("/:id", async(req, res)=>{
    try {
        const produtos = await Modelo.findById(req.params.id)
        res.status(200).json(produtos);
    } catch (error) {
        return res.status(404).json(err);
    }

})
router.get("/coop/:id", async(req, res)=>{
    try {
        const produtos = await Modelo.find({agencia_id: req.params.id})
        res.status(200).json(produtos);
    } catch (error) {
        return res.status(404).json(err);
    }

})

router.get("/pesquisa/:id", async(req, res)=>{
    try {
        const produtos = await Modelo.find({nome: req.params.id})
        res.status(200).json(produtos);
    } catch (error) {
        return res.status(404).json(err);
    }

})
router.put("/:id", async(req, res)=>{
    try {
        const product = await Modelo.findById(req.params.id)
        if( product.agencia_id ===  req.body.agencia_id){
            try {
                const Produtos = await Modelo.findByIdAndUpdate(req.params.id, req.body)
                res.status(200).json(Produtos);
            } catch (error) {
                return res.status(404).json(error);
            }
        }else{
            res.status(200).json("Só podes editar Modelo da sua Agência!");
        }
    } catch (error) {
        return res.status(404).json(error);
    }

})
router.delete("/:id", async(req, res)=>{
    try {
        const product = await Modelo.findById(req.params.id)
        if(req.headers.idcoop===product.idcoop){
            await Produto.findByIdAndDelete(req.params.id)
            return res.status(201).json("Deletado com sucesso!")
        }
        
        res.status(201).json("Só podes deletar seu Produto!")
    } catch (error) {
        res.status(404).json(error);
    }

})

module.exports = router;