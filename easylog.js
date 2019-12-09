const levels = {
    INFO: 'INFO',
    ERROR: 'ERROR',
}

function log() {
    const level = arguments[0];
    const base = `${new Date().toISOString()} ${level}`;
    if(arguments.length <= 2) {
        const params = Array.prototype.slice.call(arguments,1);
        console.log.call(null, base, ...params)
    } else {
        const params = Array.prototype.slice.call(arguments,1, arguments.length);
        console.log.call(null, base, ...params)
    }


}


const logger = {
    info () {
        log(levels.INFO, ...Array.prototype.slice.call(arguments));
    },
    error () {
        log(levels.ERROR, ...Array.prototype.slice.call(arguments));
    }
}

module.exports = logger
