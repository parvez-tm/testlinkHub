const { Router } = require("express");

const sequelize = require('../connection');

const express = require('express');
const ProjectManager = require("./pm-model");
const { addProject,getProject ,updateProject, deleteProject} = require("./pm-handler");

const route = express.Router()


route.post('/addProject',async (req,res)=>{

    const t = await sequelize.transaction();

    try {
        let add = await addProject(req.body)
        res.send(add)
        await t.commit();
    } catch (error) {
        await t.rollback();
        console.log(error);
    }
})

route.get('/getProject', async(req,res)=>{
    try {
        let a = await getProject(req)
        res.send(a)
    } catch (error) {
        console.log(error);
    }
})

route.put('/updateProject/:id',
async(req, res) =>{
    const t = await sequelize.transaction()
    try {

        let data = await updateProject(req.body, req.params)
        res.send(data)
        t.commit()
    } catch (error) {
        console.log(error);
        t.rollback()
    }
})

route.delete('/deleteProject/:id',async(req,res)=>{
    try {
        console.log(req.deleteProject);
        let a = await deleteProject(req.params);
        res.json("Data Deleted")
    } catch (error) {
        console.log(error);
    }
})


module.exports = route