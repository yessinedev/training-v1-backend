import { IsString, Length, Matches } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  @Length(1, 50, { message: 'Role name must be between 1 and 50 characters' })
  @Matches(/^[a-zA-Z\s]+$/, {
    message: 'Role name can only contain letters and spaces',
  })
  role_name: string;
}
