var fs = require('fs');

var conf = require('./config');

module.exports = function(req, res, next) {
    var reMock = new RegExp('^\/' + conf.mockDir + '\/','g');
    if (req.method.toLowerCase() === 'post' &&
        reMock.test(req.url)) {
        var filePath = conf.staticDir + req.url; // 默认测试文件放置在 'static/mock'目录下
        try {
            fs.readFile(filePath, 'utf-8', function(err, content) {
                if (err) {
                    console.error(err);
                    res.json({'err': err.message});
                } else {
                    res.status(200);
                    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
                    res.write(content);
                    res.end();
                }
            });
        } catch (e) {
            console.error(e);
            res.json({'err': e.message});
        }
    } else {
        next();
    }
}