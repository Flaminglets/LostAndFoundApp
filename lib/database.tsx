// const { MongoClient } = require('mongodb');
import { MongoClient } from 'mongodb';

export const uri = 'mongodb+srv://danny:xvyu8PH0Wkdlj6V5@cluster1.mgrtu.mongodb.net/sample_mflix?retryWrites=true&w=majority';
export const dbName = 'sample_mflix';
export const assert = require('assert'); // Simple validator for the request body and the required data on the endpoints
export const bcrypt = require('bcrypt'); // Hashing and verifying a password
export const jwt = require('jsonwebtoken'); // Create secure session for front-end
export const jwtSecret = 'EXTREMESECRETE20220';
export const v4 = require('uuid').v4; // Create random ids for users
export const saltRounds = 10; // cost factor controls how much time is needed to calculate a single BCrypt hash.