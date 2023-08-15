"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserQueriesModule = void 0;
const common_1 = require("@nestjs/common");
const user_queries_resolver_1 = require("./user-queries.resolver");
const user_queries_service_1 = require("./user-queries.service");
const external_queries_module_1 = require("../external-queries/external-queries.module");
let UserQueriesModule = class UserQueriesModule {
};
UserQueriesModule = __decorate([
    (0, common_1.Module)({
        providers: [user_queries_resolver_1.UserQueriesResolver, user_queries_service_1.UserQueriesService],
        imports: [external_queries_module_1.ExternalQueriesModule],
        exports: [user_queries_service_1.UserQueriesService],
    })
], UserQueriesModule);
exports.UserQueriesModule = UserQueriesModule;
//# sourceMappingURL=user-queries.module.js.map