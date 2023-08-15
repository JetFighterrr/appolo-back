"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserQueriesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_queries_service_1 = require("./user-queries.service");
const picture_model_1 = require("./models/picture.model");
const createPictureInput_1 = require("./input/createPictureInput");
let UserQueriesResolver = class UserQueriesResolver {
    constructor(userQueriesService) {
        this.userQueriesService = userQueriesService;
    }
    async getPicture(pictureParamsModel) {
        return this.userQueriesService.getPicture(pictureParamsModel);
    }
    async createPicture(createPictureInput) {
        return this.userQueriesService.createPicture(createPictureInput);
    }
};
__decorate([
    (0, graphql_1.Query)(returns => picture_model_1.PictureModel),
    __param(0, (0, graphql_1.Args)('pictureParamsModel', { type: () => createPictureInput_1.CreatePictureInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createPictureInput_1.CreatePictureInput]),
    __metadata("design:returntype", Promise)
], UserQueriesResolver.prototype, "getPicture", null);
__decorate([
    (0, graphql_1.Mutation)(returns => picture_model_1.PictureModel),
    __param(0, (0, graphql_1.Args)('createPictureInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createPictureInput_1.CreatePictureInput]),
    __metadata("design:returntype", Promise)
], UserQueriesResolver.prototype, "createPicture", null);
UserQueriesResolver = __decorate([
    (0, graphql_1.Resolver)(of => picture_model_1.PictureModel),
    __metadata("design:paramtypes", [user_queries_service_1.UserQueriesService])
], UserQueriesResolver);
exports.UserQueriesResolver = UserQueriesResolver;
//# sourceMappingURL=user-queries.resolver.js.map