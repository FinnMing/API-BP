const { CORS_ALLOWED_ORIGIN_LOCAL: local, CORS_ALLOWED_ORIGIN_PROD: prod } =
    process.env;

const options = { origin: [local, prod] };

export default options;
