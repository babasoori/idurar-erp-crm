const listAll = require('../src/controllers/middlewaresControllers/createCRUDController/listAll')

const {MongoMemoryServer} = require("mongodb-memory-server");
const mongoose = require("mongoose");
const Email = require("../src/models/coreModels/Email")

describe('listAll funtion ', () => {
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
                sort: null
            }
        }
        mockedRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis()
        }
    })
    beforeEach(async ()=>{
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
    it('should retreive an email and return it with a status = 200', async () => {
        await listAll(Email,mockedReq,mockedRes)
        expect(mockedRes.status).toBeCalledWith(200)
        expect(mockedRes.json).toBeCalledWith({
            success: true,
            result: expect.arrayContaining([expect.anything()]),
            message: 'Successfully found all documents',
        })
    });

    it('should not find an email and should return 203', async () => {
        await Email.deleteMany({})
        await listAll(Email, mockedReq, mockedRes)
        expect(mockedRes.status).toBeCalledWith(203)

        expect(mockedRes.json).toBeCalledWith({
            success: false,
            result: [],
            message: 'Collection is Empty',
        });
    });
    it('should return the results in order desc', async () => {
        mockedReq.query.sort = 'desc'
        await listAll(Email, mockedReq, mockedRes)
        const result = mockedRes.json.mock.calls[0][0].result;
        expect(result[0].emailName).toBe('Email Three');
        expect(result[1].emailName).toBe('Email Two');
        expect(result[2].emailName).toBe('Email One');
    });

    it('should return the results in order asc', async () => {
        mockedReq.query.sort = 'asc'
        await listAll(Email, mockedReq, mockedRes)
        const result = mockedRes.json.mock.calls[0][0].result;
        expect(result[0].emailName).toBe('Email One');
        expect(result[1].emailName).toBe('Email Two');
        expect(result[2].emailName).toBe('Email Three');
    });
    it('should handle error in sort input', async () => {
        mockedReq.query.sort = 'hello'
        mockedReq.query.enabled = null
        await expect(listAll(Email,mockedReq,mockedRes)).rejects.toThrow("Invalid sort value: { created: hello }");
    });

    it('should handle error in enabled input', async () => {
        mockedReq.query.sort = null
        mockedReq.query.enabled = 'hello'
        await expect(listAll(Email,mockedReq,mockedRes)).rejects.toThrow("Invalid sort value: { enabled: hello }");
    });
})