"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const user_queries_controller_1 = require("./user-queries/user-queries.controller");
const user_queries_service_1 = require("./user-queries/user-queries.service");
const user_queries_module_1 = require("./user-queries/user-queries.module");
const external_queries_module_1 = require("./external-queries/external-queries.module");
const apollo_1 = require("@nestjs/apollo");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_queries_module_1.UserQueriesModule,
            external_queries_module_1.ExternalQueriesModule,
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: true,
                driver: apollo_1.ApolloDriver,
            }),
        ],
        controllers: [user_queries_controller_1.UserQueriesController],
        providers: [user_queries_service_1.UserQueriesService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map