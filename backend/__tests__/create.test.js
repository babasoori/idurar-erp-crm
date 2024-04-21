const create = require('../src/controllers/middlewaresControllers/createCRUDController/create')

const {MongoMemoryServer} = require("mongodb-memory-server");
const mongoose = require("mongoose");
const Email = require("../src/models/coreModels/Email")

describe('create function', () => {
    let mongo
    let mockedRes
    let mockedReq
    const emailData = {
        emailKey: 'email1',
        emailName: 'Email One',
        emailBody: 'Body One',
        emailSubject: 'Subject One',
        created: new Date(2021, 0, 1)
    }

    beforeAll(async () => {
        mongo = await MongoMemoryServer.create()

        await mongoose.connect(mongo.getUri());
        mockedReq = {
            query: {
                sort: "-1"
            }
        }
        mockedRes = {
            status: jest.fn().mockReturnThis(), json: jest.fn().mockReturnThis()
        }
    })
    beforeEach(async () => {
        await Email.deleteMany({})
        mockedReq = {
            body: null, removed: false
        }
        mockedRes = {
            status: jest.fn().mockReturnThis(), json: jest.fn().mockReturnThis()
        }
    })
    afterAll(async () => {
        await mongoose.disconnect()
        await mongo.stop()
    })
    it('should create an email and return status 200', async () => {
        mockedReq.body = emailData
        await create(Email, mockedReq, mockedRes)
        expect(mockedRes.status).toBeCalledWith(200)
        expect(mockedRes.json).toBeCalledWith(
            expect.objectContaining({
                success: true,
                result: expect.objectContaining({
                    emailBody: "Body One",
                }),
                message: 'Successfully Created the document in Model ',
            }))
    });

    it('should raise an error when req.body = null', async () => {
        await Email.deleteMany({})
        await create(Email, mockedReq, mockedRes)
        expect(mockedRes.status).toBeCalledWith(301)

        expect(mockedRes.json).toBeCalledWith({
            success: false, message: 'wrong information',
        });
    });
})
