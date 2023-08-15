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
exports.PictureParamsArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
let PictureParamsArgs = class PictureParamsArgs {
};
__decorate([
    (0, graphql_1.Field)(type => graphql_1.Int, { name: 'width', nullable: false }),
    __metadata("design:type", Number)
], PictureParamsArgs.prototype, "width", void 0);
__decorate([
    (0, graphql_1.Field)({ name: 'height | option' }),
    __metadata("design:type", String)
], PictureParamsArgs.prototype, "option1", void 0);
__decorate([
    (0, graphql_1.Field)({ name: 'option' }),
    __metadata("design:type", String)
], PictureParamsArgs.prototype, "option2", void 0);
PictureParamsArgs = __decorate([
    (0, graphql_1.ArgsType)()
], PictureParamsArgs);
exports.PictureParamsArgs = PictureParamsArgs;
//# sourceMappingURL=picture-params.args.js.map