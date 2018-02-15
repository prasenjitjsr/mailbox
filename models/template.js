import { strictEqual } from 'assert';

const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');

const newTemplate= new mangoose.Schema({
userid:string,
name:string,
code:string,
picture:string
}, { timestamps: true });

const Template = mongoose.model('Template', newTemplate);

module.exports = Template;