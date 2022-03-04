"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = exports.deleteByEndpoint = exports.create = void 0;
const SubscriptionModel_1 = __importDefault(require("../models/SubscriptionModel"));
const create = (subscription) => __awaiter(void 0, void 0, void 0, function* () {
    const newSubscription = new SubscriptionModel_1.default(subscription);
    const savedSubscription = yield newSubscription.save();
    return savedSubscription.toObject();
});
exports.create = create;
const deleteByEndpoint = (endpoint) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield SubscriptionModel_1.default.remove({ endpoint });
    return result.ok === 1 && result.deletedCount > 0;
});
exports.deleteByEndpoint = deleteByEndpoint;
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return SubscriptionModel_1.default.find();
});
exports.getAll = getAll;
//# sourceMappingURL=subscriptionRepository.js.map