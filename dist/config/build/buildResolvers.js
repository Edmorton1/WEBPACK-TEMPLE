function buildResolvers(options) {
    return ({
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': options.paths.src
        }
    });
}
export default buildResolvers;
