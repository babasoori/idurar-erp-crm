const search = require('../src/controllers/middlewaresControllers/createCRUDController/search')

const {MongoMemoryServer} = require("mongodb-memory-server");
const mongoose = require("mongoose");
const Email = require("../src/models/coreModels/Email")

describe('search function ', () => {
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
                fields: null,
                q: null
            }
        }
        mockedRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
            end: jest.fn().mockReturnThis()

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
                emailSubject: 'Subject One',
                created: new Date(2021, 0, 2)
            },
            {
                emailKey: 'email3',
                emailName: 'Email Three',
                emailBody: 'Body Three',
                emailSubject: 'Subject One',
                created: new Date(2021, 0, 3)
            },
        ];

        mockedReq = {
            query: {
                fields: null,
                q: null
            }
        }
        mockedRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
            end: jest.fn().mockReturnThis()
        }
        await Email.deleteMany({})
        await Email.create(emailData)
    })
    afterAll(async () => {
        await mongoose.disconnect()
        await mongo.stop()
    })
    it('should search for emails by emailSubject', async () => {
        mockedReq.query.fields = 'emailSubject'
        mockedReq.query.q = 'Subject One'
        await search(Email, mockedReq, mockedRes)
        expect(mockedRes.json).toBeCalledWith(expect.objectContaining({
                success: true,
                result: expect.arrayContaining([expect.anything()]),
                message: 'Successfully found all documents',
            }
        ))
        expect(mockedRes.status).toBeCalledWith(200)
        const result = mockedRes.json.mock.calls[0][0].result;
        expect(result.length).toBe(3);
    });

    it('should return 202 when no email is found', async () => {
        mockedReq.query.fields = 'emailSubject'
        mockedReq.query.q = 'hello'
        await search(Email, mockedReq, mockedRes)
        expect(mockedRes.json).toBeCalledWith(expect.objectContaining({
                success: false,
                result: [],
                message: 'No document found by this request',
            }
        ))
        expect(mockedRes.status).toBeCalledWith(202)
        const result = mockedRes.json.mock.calls[0][0].result;
        expect(result.length).toBe(0);
    });

    it('should handle error in query input', async () => {
        mockedReq.query = null
        await expect(search(Email, mockedReq, mockedRes)).rejects.toThrow("additional query parameters missing");
    });

    it('should find results by name when query.fields = null', async () => {
        mockedReq.query = {
            fields:null,
            q:''
        }
        await search(Email,mockedReq,mockedRes)
        expect(mockedRes.json).toBeCalledWith(expect.objectContaining({
                success: false,
                result: [],
                message: 'No document found by this request',
            }
        ))
        expect(mockedRes.status).toBeCalledWith(202)
        const result = mockedRes.json.mock.calls[0][0].result;
        expect(result.length).toBe(0)
    });
})
