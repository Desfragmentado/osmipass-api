// for AdonisJS v6
import path from 'node:path'
import url from 'node:url'
// ---

export default {
    // path: __dirname + "/../", for AdonisJS v5
    path: path.dirname(url.fileURLToPath(import.meta.url)) + "/../", // for AdonisJS v6
    title: "SIIC API V2", // use info instead
    version: "1.0.0", // use info instead
    description: "", // use info instead
    tagIndex: 2,
    productionEnv: "production", // optional
    info: {
        title: "siicapiv2",
        version: "1.0.0",
        description: "Documentation for my RestFul API",
    },
    // components: {
    //     securitySchemes: {
    //         BearerAuth: {
    //             type: 'http',
    //             scheme: 'bearer',
    //             bearerFormat: 'JWT',
    //         },
    //     },
    //     // schemas: {
    //     //     string: {
    //     //         type: 'string',
    //     //     },
    //     //     number: {
    //     //         type: 'number',
    //     //     },
    //     //     boolean: {
    //     //         type: 'boolean',
    //     //     },
    //     // },
    // },
    snakeCase: true,
    //paths : ["interfaces"],
    debug: true, // set to true, to get some useful debug output
    ignore: ["/swagger", "/docs"],
    preferredPutPatch: "PUT", // if PUT/PATCH are provided for the same route, prefer PUT
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
    securitySchemes: {}, // optional
    authMiddlewares: ["auth", "auth:api"], // optional
    defaultSecurityScheme: "BearerAuth", // optional
    persistAuthorization: true, // persist authorization between reloads on the swagger page
    showFullPath: false, // the path displayed after endpoint summary
}