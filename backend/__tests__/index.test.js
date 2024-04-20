const createCRUDController = require('../src/controllers/middlewaresControllers/createCRUDController/index')

const {MongoMemoryServer} = require("mongodb-memory-server");
const mongoose = require("mongoose");
const Email = require("../src/models/coreModels/Email")

describe('createCRUDController function', () => {
    let mongo
    let mockedRes
    let mockedReq

    beforeAll(async () => {
        mongo = await MongoMemoryServer.create()

        await mongoose.connect(mongo.getUri());
        mockedReq = {}
        mockedRes = {
            status: jest.fn().mockReturnThis(), json: jest.fn().mockReturnThis()
        }
    })
    afterAll(async () => {
        await mongoose.disconnect()
        await mongo.stop()
    })
    it('should create crud methods for email model', async () => {
        const crudMethods = createCRUDController('Email')
        expect(crudMethods).toEqual(expect.objectContaining({
            create: expect.anything()
        }))
    });

    it('should raise an error when model is not found', () => {
        expect(()=>createCRUDController('hamza')).toThrow("Model hamza does not exist")
    })
})
