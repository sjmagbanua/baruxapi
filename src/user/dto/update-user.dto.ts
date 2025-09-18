import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsOptional } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    // Example: override to explicitly mark a field optional (though already optional via PartialType)
    @IsOptional()
    name?: string;

    // You can also add additional fields specific to update
    // @IsOptional()
    // someOtherField?: string;
}