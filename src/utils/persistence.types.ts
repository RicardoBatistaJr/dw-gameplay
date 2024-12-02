import {
  Document,
  Types,
  PaginateModel,
  PaginateResult,
} from 'mongoose';
import * as paginate from 'mongoose-paginate-v2';

export type ObjectId = Types.ObjectId;
export type DocumentType<T> = T & Document;
export type PaginateModelType<T> = PaginateModel<T>;
export type PaginateResultOutput<T> = PaginateResult<T>;
export { paginate as PaginatePlugin };
