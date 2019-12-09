const logger = require('./easylog');

test('logger.info()', () => {
    const spiedInfo = jest.spyOn(console, 'log');
    logger.info('Hello, world');
    expect(spiedInfo).toHaveBeenCalled();
})