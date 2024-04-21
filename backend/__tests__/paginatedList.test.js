const paginatedList = require('../src/controllers/middlewaresControllers/createCRUDController/paginatedList')

const {MongoMemoryServer} = require("mongodb-memory-server");
const mongoose = require("mongoose");
const Email = require("../src/models/coreModels/Email")
const search = require("@/controllers/middlewaresControllers/createCRUDController/search");

describe('paginatedList function ', () => {
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
            query: {
                page: null,
                items: null,
                fields: null,
                q: null
            },
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

        mockedReq = {
            query: {
                page: null,
                items: null,
                fields: null,
                q: null
            },
        }
        mockedRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis()
        }
        await Email.deleteMany({})
        await Email.create(emailData)
    })
    afterAll(async () => {
        await mongoose.disconnect()
        await mongo.stop()
    })
    it('should search and paginatedList an email by id', async () => {
        mockedReq.query.fields = 'emailSubject'
        mockedReq.query.q = 'Subject'
        mockedReq.query.items = 2
        await paginatedList(Email, mockedReq, mockedRes)
        expect(mockedRes.json).toBeCalledWith(expect.objectContaining({
                success: true,
                result: expect.arrayContaining([expect.anything()]),
                pagination: expect.anything(),
                message: 'Successfully found all documents',
            }
        ))
        expect(mockedRes.status).toBeCalledWith(200)
        const result = mockedRes.json.mock.calls[0][0].result;
        expect(result.length).toBe(2);

    });

    it('should return 203 when email is not found', async () => {

        mockedReq.query.fields = 'emailSubject'
        mockedReq.query.q = 'never'
        mockedReq.query.items = 2
        await paginatedList(Email, mockedReq, mockedRes)
        expect(mockedRes.json).toBeCalledWith(expect.objectContaining({
                success: true,
                result: [],
                pagination :expect.anything(),
                message: 'Collection is Empty',
            }
        ))
        expect(mockedRes.status).toBeCalledWith(203)
        const result = mockedRes.json.mock.calls[0][0].result;
        console.log(result)
        expect(result.length).toBe(0);


    });

    it('should handle error in id input', async () => {
        mockedReq.query = null
        await expect(paginatedList(Email, mockedReq, mockedRes)).rejects.toThrow("Invalid query value");
    });

})
