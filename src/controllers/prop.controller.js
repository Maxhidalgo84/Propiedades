const propertyModel = require('../models/property.model.js');
const Property = require('../models/property.model.js')


const agregar = async (req, res) => {

    const { propiedad,telefono, email,ubicacion,precio,habitaciones  } = req.body;

    try {
        const newProp = new Property({
            propiedad,
            telefono,
            email,
            ubicacion,
            precio,
            habitaciones
        })
        const saveProp = await newProp.save();
        console.log("Saved");
        res.send("guardando...")
        res.json(saveProp);
    } catch (error) {
        console.log(error);

    }
}

const getprops = async (req, res) => {

    const propers = await Property.find()
    res.json(propers)



}

const getprop = async (req, res) => {

    const proper = await Property.findById(req.params.id)
    if (!proper) return res.status(404).json({ message: 'Property not found' });
    res.json(proper)

}

const deleteprop = async (req, res) => {

    const proper = await Property.findByIdAndDelete(req.params.id)
    if (!proper) return res.status(404).json({ message: 'Property not found' });
    return res.status(204).json({ message: 'Property deleted' });
}

const updateprop = async (req, res) => {

    const proper = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if(!proper) return res.status(404).json({ message: "Property not found" });
    res.json(proper)
}






module.exports = {
    agregar,
    getprops,
    getprop,
    deleteprop,
    updateprop
    
}