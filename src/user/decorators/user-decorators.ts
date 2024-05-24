import { applyDecorators, Controller, UseGuards } from "@nestjs/common"
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger"
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard"

export const UserDecorator  =() =>{
    return applyDecorators(
        ApiBearerAuth(),
        ApiTags('Logon') ,
        Controller('logon'),
        UseGuards(JwtAuthGuard),
    )
}