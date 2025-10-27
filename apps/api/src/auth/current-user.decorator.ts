import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtUser } from './jwt.strategy';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): JwtUser => {
    const req = ctx.switchToHttp().getRequest();
    return req.user as JwtUser;
  },
);