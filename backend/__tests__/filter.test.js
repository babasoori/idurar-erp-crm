const filter = require('../src/controllers/middlewaresControllers/createCRUDController/filter')

const {MongoMemoryServer} = require("mongodb-memory-server");
const mongoose = require("mongoose");
const Email = require("../src/models/coreModels/Email")

describe('filter function ', () => {
    let mongo
    let mockedRes
    let mockedReq
    beforeAll(async () => {
        // const mongo = await MongoMemoryServer.create()
        //
        // mongoose.connect(mongo.getUri());

        mongo = await MongoMemoryServer.create()

        await mongoose.connect(mongo.getUri());
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
                filter: null,
                equal: null
            }
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
    it('should return a filter for emails found by by emailSubject', async () => {
        mockedReq.query.filter = 'emailSubject'
        mockedReq.query.equal = 'Subject One'
        await filter(Email, mockedReq, mockedRes)
        expect(mockedRes.json).toBeCalledWith(expect.objectContaining({
                success: true,
                result: expect.anything(),
                message: 'Successfully found all documents  ',
            }
        ))
        expect(mockedRes.status).toBeCalledWith(200)
        const result = mockedRes.json.mock.calls[0][0].result;
        expect(result.length).toBe(3);

    });

    it('should return 203 when no email is found', async () => {
        mockedReq.query.filter = 'emailSubject'
        mockedReq.query.equal = ''
        await filter(Email, mockedReq, mockedRes)
        expect(mockedRes.json).toBeCalledWith(expect.objectContaining({
                success: false,
                result: [],
                message: 'Collection is Empty',
            }
        ))
        expect(mockedRes.status).toBeCalledWith(203)
        const result = mockedRes.json.mock.calls[0][0].result;
        expect(result.length).toBe(0);
    });


    it('should handle error when filter is null', async () => {
        mockedReq.query.filter = undefined
        await filter(Email, mockedReq, mockedRes)
        expect(mockedRes.json).toBeCalledWith(expect.objectContaining({
                success: false,
                result: null,
                message: 'filter not provided correctly',
            }
        ))

        expect(mockedRes.status).toBeCalledWith(403)
    });

    it('should handle error in query input', async () => {
        mockedReq.query = null
        await expect(filter(Email, mockedReq, mockedRes)).rejects.toThrow("additional query parameters missing");
    });

})
