import http from 'http';
import assert from 'assert';

import server from '../lib/app.js';

describe('check http status', () =>{
    it('should run at 200', done =>{
        http.get('http://127.0.0.1:8000',res =>{
        assert.equal(200, res.statusCode);
        server.close();
        done();
        })
    })
})