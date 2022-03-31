/*export interface ResponseModel{
      message : string;
      allowed : boolean;
      statusCode : number;
      user : string;
}
export interface AdminResponseModel{
      message : string;
      allowed : boolean;
      statusCode : number;
}*/
export interface ResponseModel {
      email: string;
      statusCode: number;
      message: string;
      allowed: boolean;
      userRole: string
      user: string;
}
