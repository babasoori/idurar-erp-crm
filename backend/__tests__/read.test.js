const read = require('../src/controllers/middlewaresControllers/createCRUDController/read')

const {MongoMemoryServer} = require("mongodb-memory-server");
const mongoose = require("mongoose");
const Email = require("../src/models/coreModels/Email")

describe('read function ', () => {
    let mongo
    let mockedRes
    let mockedReq
    beforeAll(async () => {
        // const mongo = await MongoMemoryServer.create()
        //
        // mongoose.connect(mongo.getUri());

        mongo = await MongoMemoryServer.create()

        await mongoose.connect(mongo.getUri());
        mockedReq = {
            params: {
                id: null
            }
        }
        mockedRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis()
        }
    })
    beforeEach(async () => {
        const emailData = [
            {
                emailKey: 'email1',
                emailName: 'Email One',
                emailBody: 'Body One',
                emailSubject: 'Subject One',
                created: new Date(2021, 0, 1)
            },
            {
                emailKey: 'email2',
                emailName: 'Email Two',
                emailBody: 'Body Two',
                emailSubject: 'Subject Two',
                created: new Date(2021, 0, 2)
            },
            {
                emailKey: 'email3',
                emailName: 'Email Three',
                emailBody: 'Body Three',
                emailSubject: 'Subject Three',
                created: new Date(2021, 0, 3)
            },
        ];

        await Email.deleteMany({})
        await Email.create(emailData)
    })
    afterAll(async () => {
        await mongoose.disconnect()
        await mongo.stop()
    })
    it('should read an email by id', async () => {
        const email = await Email.findOne({emailName: "Email Three"}).exec()
        mockedReq.params.id = email._id
        await read(Email, mockedReq, mockedRes)
        expect(mockedRes.json).toBeCalledWith(expect.objectContaining({
                success: true,
                result: expect.anything(),
                message: 'we found this document ',
            }
        ))
        expect(mockedRes.status).toBeCalledWith(200)

    });

    it('should return 404 when email is not found', async () => {
        const email = await Email.findOne({emailName: "Email Three"}).exec()
        await Email.deleteMany({})
        mockedReq.params.id = email._id
        await read(Email, mockedReq, mockedRes)
        expect(mockedRes.json).toBeCalledWith(expect.objectContaining({
                success: false,
                result: null,
                message: 'No document found ',
            }
        ))
        expect(mockedRes.status).toBeCalledWith(404)

    });

    it('should handle error in id input', async () => {
        mockedReq.params.id = 'hello'
        await expect(read(Email, mockedReq, mockedRes)).rejects.toThrow("Invalid _id value: { _id: hello }");
    });

})
