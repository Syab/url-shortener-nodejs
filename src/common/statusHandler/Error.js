import { inherits, inspect } from 'util';
import { HTTP_CODE_404, HTTP_CODE_500
} from './HttpCodes';

Error.extend = function(name, httpCode = HTTP_CODE_500) {
    const ErrorType = (function(message='', code, additionalInfo, httpErrorCode){
        if (!(this instanceof ErrorType)){
            return new ErrorType(message, code, additionalInfo, httpErrorCode);
        }
        this.name = name;
        this.code = code;
        this.httpCode = httpErrorCode || httpCode;
        this.message = message;
        this.additionalInfo = additionalInfo;

        if (typeof Error.captureStackTrace === 'function'){
            Error.captureStackTrace(this, this.constructor);
        }
        return this;
    });

    inherits(ErrorType, this);
    ErrorType.prototype.toString = function () {
        return `${this.name} : ${inspect(this.message)}`;
    };

    ErrorType.extend = this.extend;
    return ErrorType;
};

export const ApiError = Error.extend('ApiError', HTTP_CODE_404);
export const DBError = Error.extend('DBError', HTTP_CODE_500);

