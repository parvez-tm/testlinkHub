const { Op } = require("sequelize");
const ProjectManager = require("./pm-model");

const addProject = async (body) => {
    console.log(body,"body");
    return await ProjectManager.create(body)
}

const getProject = async (req) => {
    const perPage = parseInt(req.query.pageNo); 
    const name = req.query.name
    const platform = req.query.platform
    const page = req.query.page || 1; // Current page number, default to 1
    const offset = (page - 1) * perPage;

    const filter = {};
    
    // console.log(name,platform,"ddddd");
    if (name || platform) {
        filter.where = {
            projectName: {
                [Op.like]: `%${name}%`, // % is a wildcard character
            },
            platform: {
                [Op.like]: `%${platform}%`,
            }
        };
    }


    return await ProjectManager.findAndCountAll({
        limit: perPage,
        offset: offset,
        order: [
            ['projectName', 'ASC'],
        ],
        ...filter
    })
}

const updateProject = async (body, params) => {
    return await ProjectManager.update(
        body, { where: { id: params.id } })
}


const deleteProject = async (params) => {
    return await ProjectManager.destroy({
        where: { id: params.id }
    })
}

module.exports = {addProject,getProject,updateProject,deleteProject}