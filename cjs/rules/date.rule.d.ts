import { ValidationRuleContract } from "../contracts";
export declare function dateAfter(args: Array<Date | string | number>): ValidationRuleContract;
export declare function dateAfterToday(args: Array<string>): ValidationRuleContract;
export declare function dateBefore(args: Array<any>): ValidationRuleContract;
export declare function dateBeforeToday(args: Array<string>): ValidationRuleContract;
export declare function dateFormat(args: Array<string>): ValidationRuleContract;
export declare function dateISO(): ValidationRuleContract;
