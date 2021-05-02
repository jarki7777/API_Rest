import Users from '../models/user.model.js';
import { checkUrl } from '../util/checkUrl.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const userController = {
    create: async (req, res) => {

        const born = req.body.born;
        const salRounds = 10;

        const calculateAge = (birthday) => {
            const diffTimestamp = Date.now() - birthday.getTime();
            const today = new Date(diffTimestamp);

            return Math.abs(today.getUTCFullYear() - 1970);
        }

        const age = calculateAge(new Date(born));

        try {
            
            const newUser = {
                email: req.body.email,
                userName: req.body.userName,
                password: bcrypt.hashSync(req.body.password, salRounds),
                born: req.body.born,
                age: age
            }

            const emailExist = await Users.findOne({ email: req.body.email });

            const userNameExist = await Users.findOne({ userName: req.body.userName });

            if (emailExist) {
                res.status(400).send({'message': 'Email is already registered', 'code': 3});
            } else if (userNameExist) {
                res.status(400).send({'message': 'User name is already registered', 'code': 4});                
            } else {
                const response = await Users.create(newUser);                
            }

            res.sendStatus(201);
        } catch (e) {
            console.log(e);
            res.status(400).send({ 'message': e.message });
        }
    },
    dashboard: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await Users.findById({ _id: id }).select('email userName born');
            checkUrl(id, user, res);
        } catch (e) {
            console.log(e);
            res.status(400).send({ 'message': e.message });
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await Users.findByIdAndDelete({ _id: id });
            checkUrl(id, user, res);
        } catch (e) {
            console.log(e);
            res.status(400).send({ 'message': e.message });
        }
    },
    emailUpdate: async (req, res) => {
        try{
            const id = req.body.id
            const email = req.body.email;

            const emailExist = await Users.findOne({ email: email });
            if(emailExist){
                res.status(400).send({'message': 'El email ya está en uso', 'code': 3});
            }else{
                await Users.findByIdAndUpdate({ _id: id }, { email: email });
                res.status(200).send({ 'message': 'El email se ha actualizado correctamente'});
            }
        }catch (e){
            res.status(400).send({ 'message': e.message });
        }
    },
    usernameUpdate: async (req, res) => {
        try{
            const id = req.body.id
            const username = req.body.username;

            const userNameExist = await Users.findOne({ userName: username });

            if(userNameExist){
                res.status(400).send({'message': 'El nombre de usuario ya está en uso', 'code': 3});
            }else{
                await Users.findByIdAndUpdate({ _id: id }, { userName: username });
                res.status(200).send({ 'message': 'El nombre de usuario se ha actualizado correctamente'});
            }
        }catch (e){
            res.status(400).send({ 'message': e.message });
        }
    },
    passwordUpdate: async (req, res) => {
        try{
            const id = req.body.id
            const oldPassword = req.body.oldPassword;
            const newPassword = req.body.newPassword;

            const user = await Users.findById({ _id: id});

            await bcrypt.compare(oldPassword, user.password);
            await Users.findByIdAndUpdate({ _id: id }, { password: newPassword });
            res.status(200).send({ 'message': 'La contraseña se ha actualizado correctamente'});
        }catch (e){
            res.status(400).send({ 'message': e.message });
        }
    }
}