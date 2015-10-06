import proxyquire from 'proxyquire';
import sinon from 'sinon';
import rawRequestMock from '../mock/request.json';
import filteredRequestMock from '../mock/filteredRequest.json';

describe('processor', () => {
    let processor = require('../../app/processor');
    let responseStub = sinon.stub().returns(Promise.reject());

    describe('given valid request is passed', () => {
        it('should return filtered results', (done) => {
            processor.post(JSON.stringify(rawRequestMock)).then((result) => {
                expect(result).to.deep.equal(filteredRequestMock);
                done();
            }).catch((err) => {
                done(err);
            });
        });
    });

    describe('given invalid request data is passed', () => {
        before(() => {
            processor.post('test');
        });

        it('should call Promise.reject()', (done) => {
            expect(responseStub).to.have.been.called;
            done();
        });
    });
});
