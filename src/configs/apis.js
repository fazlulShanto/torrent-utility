export const AppEnv = import.meta.env.MODE ?? "development";
// const env = process.env.NODE_ENV ?? 'dev';

const ApiEndpoints = {
    courseMetadata: `/course/meta/generic`,
};

export default ApiEndpoints;
