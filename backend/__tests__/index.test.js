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
        const controller = createCRUDController('Email')
        expect(controller.read).toBeDefined();
        expect(controller.update).toBeDefined();
        expect(controller.delete).toBeDefined();
        expect(controller.list).toBeDefined();
        expect(controller.listAll).toBeDefined();
        expect(controller.search).toBeDefined();
        expect(controller.filter).toBeDefined();
        expect(controller.summary).toBeDefined();

    });

    it('should raise an error when model is not found', () => {
        expect(()=>createCRUDController('hamza')).toThrow("Model hamza does not exist")
    })
})
