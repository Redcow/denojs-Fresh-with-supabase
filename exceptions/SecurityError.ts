import { AppError } from "./AppError.ts";

type ErrorName = 
    | 'TOKEN_EXPIRED'
    | 'INVALID_TOKEN'

export class SecurityError 
    extends AppError<ErrorName>{}