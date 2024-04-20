const summary = require('../src/controllers/middlewaresControllers/createCRUDController/summary')

const {MongoMemoryServer} = require("mongodb-memory-server");
const mongoose = require("mongoose");
const Email = require("../src/models/coreModels/Email")

describe('summary function ', () => {
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
                filter: null,
                equal: null
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

        await Email.deleteMany({})
        await Email.create(emailData)
    })
    afterAll(async () => {
        await mongoose.disconnect()
        await mongo.stop()
    })
    it('should return a summary for emails found by by emailSubject', async () => {
        mockedReq.query.filter = 'emailSubject'
        mockedReq.query.equal = 'Subject One'
        await summary(Email, mockedReq, mockedRes)
        expect(mockedRes.json).toBeCalledWith(expect.objectContaining({
                success: true,
                result: expect.objectContaining({
                    countFilter: expect.anything() ,
                    countAllDocs: expect.anything()
                }),
            message: 'Successfully count all documents',
            }
        ))
        expect(mockedRes.status).toBeCalledWith(200)
    });

    it('should return 203 when no email is found', async () => {
        mockedReq.query.filter = 'emailSubject'
        mockedReq.query.equal = 'Subject'
        await summary(Email, mockedReq, mockedRes)
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

    it('should handle error in query input', async () => {
        mockedReq.query = null
        await expect(summary(Email, mockedReq, mockedRes)).rejects.toThrow("additional query parameters missing");
    });

})
