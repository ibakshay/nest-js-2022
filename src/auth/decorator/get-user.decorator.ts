import {
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';
import { IGetUserAuthInfoRequest } from '../addUser.interfance';

export const GetUser = createParamDecorator(
  (
    data: string | undefined,
    ctx: ExecutionContext,
  ) => {
    const request: IGetUserAuthInfoRequest = ctx
      .switchToHttp()
      .getRequest();
    if (data) {
      return request.user[data];
    }
    return request.user;
  },
);
