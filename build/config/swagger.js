import path from 'node:path';
import url from 'node:url';
export default {
    path: path.dirname(url.fileURLToPath(import.meta.url)) + "/../",
    title: "SIIC API V2",
    version: "1.0.0",
    description: "",
    tagIndex: 2,
    productionEnv: "production",
    info: {
        title: "siicapiv2",
        version: "1.0.0",
        description: "Documentation for my RestFul API",
    },
    snakeCase: true,
    debug: true,
    ignore: ["/swagger", "/docs"],
    preferredPutPatch: "PUT",
    common: {
        parameters: {},
        headers: {
            paginated: {
                "X-Total-Pages": {
                    description: "Total amount of pages",
                    schema: { type: "integer", example: 5 },
                },
                "X-Total": {
                    description: "Total amount of results",
                    schema: { type: "integer", example: 100 },
                },
                "X-Per-Page": {
                    description: "Results per page",
                    schema: { type: "integer", example: 20 },
                },
            },
        },
    },
    securitySchemes: {},
    authMiddlewares: ["auth", "auth:api"],
    defaultSecurityScheme: "BearerAuth",
    persistAuthorization: true,
    showFullPath: false,
};
//# sourceMappingURL=swagger.js.map