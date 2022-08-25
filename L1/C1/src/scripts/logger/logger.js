export const createLogger = (name) => {
    const logs = [];

    return {
        log() {
            logs.push(`log - ${name} - ${message}`);
        },
        error(errorText) {
            logs.push(`log - ${name} - ${errorText}`);
        },
        getLogs() {
            return logs;
        },
    };
};