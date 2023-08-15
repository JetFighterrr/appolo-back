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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserQueriesService = void 0;
const common_1 = require("@nestjs/common");
const external_queries_service_1 = require("../external-queries/external-queries.service");
let UserQueriesService = class UserQueriesService {
    constructor(externalQueriesService) {
        this.externalQueriesService = externalQueriesService;
        this.allPicturesCache = new Map();
    }
    async getPicture(pictureParams) {
        if (this.allPicturesCache.has(pictureParams)) {
            return this.allPicturesCache.get(pictureParams);
        }
        return this.createPicture(pictureParams);
    }
    async createPicture(createPictureInput) {
        const { width, option1, option2 } = createPictureInput;
        const fileName = await this.externalQueriesService.downloadImage(width, option1, option2);
        const picture = {
            fileName,
        };
        this.allPicturesCache.set(createPictureInput, picture);
        return picture;
    }
};
UserQueriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [external_queries_service_1.ExternalQueriesService])
], UserQueriesService);
exports.UserQueriesService = UserQueriesService;
//# sourceMappingURL=user-queries.service.js.map